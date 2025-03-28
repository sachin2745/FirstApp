import React, { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";
import { toast } from "react-toastify";

const BulkUploadProducts = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [products, setProducts] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    // Reset states
    setError(null);
    setSuccess(false);
    setValidationErrors([]);
    setProducts([]);

    // File type validation
    const validExtensions = [".xlsx", ".xls", ".csv"];
    const validTypes = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
      "text/csv",
    ];

    const fileExtension = selectedFile.name
      .substring(selectedFile.name.lastIndexOf("."))
      .toLowerCase();

    if (
      !validExtensions.includes(fileExtension) &&
      !validTypes.includes(selectedFile.type)
    ) {
      setError("Please upload a valid Excel file (XLSX, XLS, CSV)");
      return;
    }

    setFile(selectedFile);

    // Parse the Excel file
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet);

        const errors = [];
        const productGroups = {};

        jsonData.forEach((row, index) => {
          // Row validation
          const rowErrors = [];

          if (!row.name) rowErrors.push("Product name is required");
          if (!row.category) rowErrors.push("Category is required");
          if (row.price && isNaN(parseFloat(row.price)))
            rowErrors.push("Price must be a number");
          if (row.stock && isNaN(parseInt(row.stock)))
            rowErrors.push("Stock must be an integer");

          if (rowErrors.length > 0) {
            errors.push({
              row: index + 2, // +2 because header is row 1 and JS is 0-based
              errors: rowErrors,
              data: row,
            });
            return; // Skip this row if there are errors
          }

          // Initialize product group if it doesn't exist
          if (!productGroups[row.name]) {
            productGroups[row.name] = {
              name: row.name,
              description: row.description || "",
              category: row.category,
              variants: [],
            };
          }

          // Process variants only if color is specified
          if (row.color) {
            const variant = {
              color: row.color,
              sizes: [],
              images: [],
            };

            // Add size if available
            if (row.size) {
              variant.sizes.push({
                size: row.size,
                price: parseFloat(row.price) || 0,
                stock: parseInt(row.stock) || 0,
                sku:
                  row.sku ||
                  `${row.name.substring(0, 3)}-${row.color.substring(0, 3)}-${
                    row.size
                  }`.toUpperCase(),
              });
            }

            // Add image if available
            // if (row.imageUrl) {
            //   variant.images.push({
            //     imageUrl: row.imageUrl,
            //     altText: row.altText || `${row.name} ${row.color}`,
            //   });
            // }

            // Process images if available
            if (row.images) {
              // Split the images string into an array
              const imageArray = row.images.split(",").map((img) => img.trim());

              // Convert to the format your system expects
              variant.images = imageArray.map((img) => ({
                imageUrl: img,
                altText: `${row.name} ${row.color} ${index + 1}`,
              }));
            }

            // Check if variant with this color already exists
            const existingVariantIndex = productGroups[
              row.name
            ].variants.findIndex(
              (v) => v.color.toLowerCase() === row.color.toLowerCase()
            );

            if (existingVariantIndex >= 0) {
              // Merge sizes if variant exists
              if (row.size) {
                productGroups[row.name].variants[
                  existingVariantIndex
                ].sizes.push({
                  size: row.size,
                  price: parseFloat(row.price) || 0,
                  stock: parseInt(row.stock) || 0,
                  sku:
                    row.sku ||
                    `${row.name.substring(0, 3)}-${row.color.substring(0, 3)}-${
                      row.size
                    }`.toUpperCase(),
                });
              }
            } else {
              // Add new variant
              productGroups[row.name].variants.push(variant);
            }
          }
        });

        if (errors.length > 0) {
          setValidationErrors(errors);
          toast.warning(`Found ${errors.length} rows with validation errors`);
        }

        const formattedProducts = Object.values(productGroups);
        if (formattedProducts.length === 0) {
          setError("No valid products found in the file");
          return;
        }

        setProducts(formattedProducts);
        toast.success(
          `Parsed ${
            formattedProducts.length
          } products with ${formattedProducts.reduce(
            (sum, p) => sum + p.variants.length,
            0
          )} variants`
        );
      } catch (e) {
        console.error("Error parsing file:", e);
        setError(`Error parsing file: ${e.message}`);
      }
    };

    reader.onerror = () => {
      setError("Error reading file. Please try again.");
    };

    reader.readAsArrayBuffer(selectedFile);
  };

  const handleUpload = async () => {
    if (!file || products.length === 0) {
      setError("No valid products to upload");
      return;
    }

    setUploading(true);
    setError(null);
    setSuccess(false);

    try {
      let uploadedCount = 0;

      for (let i = 0; i < products.length; i++) {
        const formData = new FormData();
        formData.append("name", products[i].name);
        formData.append("description", products[i].description);
        formData.append("category", products[i].category);

        // Append main image
        if (products[i].mainImage) {
          formData.append("mainImage", products[i].mainImage);
        }

        // Append variants as JSON string
        formData.append("variants", JSON.stringify(products[i].variants));

        // Append variant images
        if (products[i].variants) {
          products[i].variants.forEach((variant, variantIndex) => {
            variant.images.forEach((img, imgIndex) => {
              formData.append(`variantImages`, img.file);
            });
          });
        }

        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/store/products/add`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setProgress(percentCompleted);
            },
          }
        );

        console.log(`Uploaded product ${i + 1}:`, response.data);
        uploadedCount++;
      }

      setSuccess(true);
      setProducts([]);
      setFile(null);
      setValidationErrors([]);

      toast.success(`Successfully uploaded ${uploadedCount} products`);
    } catch (err) {
      console.error("Upload error:", err);
      const errorMessage =
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Failed to upload products. Please try again.";

      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  const handleCancel = () => {
    setFile(null);
    setProducts([]);
    setValidationErrors([]);
    setError(null);
    document.querySelector("input[type='file']").value = "";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Bulk Upload Products
        </h1>

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            Products uploaded successfully!
          </div>
        )}

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Excel File
          </label>
          <div className="flex items-center">
            <input
              type="file"
              accept=".xlsx,.xls,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
              disabled={uploading}
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Upload an Excel file with product data. Required fields:{" "}
            <strong>name</strong>, <strong>category</strong>. Optional fields:
            description, color, size, price, stock, imageUrl, altText, sku.
          </p>
        </div>

        {validationErrors.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-800 mb-3">
              Validation Errors ({validationErrors.length} rows)
            </h2>
            <div className="overflow-x-auto max-h-60 overflow-y-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Row
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Errors
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {validationErrors.map((error, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                        {error.row}
                      </td>
                      <td className="px-4 py-2 text-sm text-red-600">
                        <ul className="list-disc pl-5">
                          {error.errors.map((err, i) => (
                            <li key={i}>{err}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-500">
                        <pre className="text-xs">
                          {JSON.stringify(error.data, null, 2)}
                        </pre>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {products.length > 0 && (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-medium text-gray-800">
                Preview ({products.length} products)
              </h2>
              <button
                onClick={handleCancel}
                className="text-sm text-red-600 hover:text-red-800"
              >
                Cancel Upload
              </button>
            </div>
            <div className="overflow-x-auto max-h-96 overflow-y-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Variants
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total SKUs
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((product, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {product.name}
                        {product.description && (
                          <p className="text-xs text-gray-500 mt-1">
                            {product.description}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.category}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="space-y-2">
                          {product.variants.map((variant, vIndex) => (
                            <div
                              key={vIndex}
                              className="border-l-2 border-gray-200 pl-2"
                            >
                              <p className="font-medium">{variant.color}</p>
                              {variant.sizes.length > 0 && (
                                <ul className="text-xs mt-1">
                                  {variant.sizes.map((size, sIndex) => (
                                    <li key={sIndex}>
                                      {size.size}: ${size.price} (Qty:{" "}
                                      {size.stock})
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.variants.reduce(
                          (sum, variant) => sum + variant.sizes.length,
                          0
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center">
          <div>
            {uploading && (
              <div className="text-sm text-gray-600">
                Uploading... {progress}%
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          <div className="flex space-x-3">
            {products.length > 0 && (
              <button
                onClick={handleCancel}
                disabled={uploading}
                className={`px-4 py-2 rounded-md border ${
                  uploading
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-gray-50 border-gray-300"
                }`}
              >
                Cancel
              </button>
            )}

            <button
              onClick={handleUpload}
              disabled={uploading || products.length === 0}
              className={`px-4 py-2 rounded-md text-white ${
                uploading || products.length === 0
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {uploading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Uploading...
                </span>
              ) : (
                "Upload Products"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkUploadProducts;

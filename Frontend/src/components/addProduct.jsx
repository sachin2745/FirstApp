import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const ProductForm = () => {
  // Validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Product name is required"),
    description: Yup.string(),
    category: Yup.string().required("Category is required"),
    variants: Yup.array()
      .of(
        Yup.object().shape({
          color: Yup.string().required("Color is required"),
          sizes: Yup.array()
            .of(
              Yup.object().shape({
                size: Yup.string().required("Size is required"),
                price: Yup.number()
                  .required("Price is required")
                  .min(0, "Price must be positive"),
                stock: Yup.number()
                  .required("Stock is required")
                  .min(0, "Stock must be positive"),
              })
            )
            .min(1, "At least one size is required"),
          images: Yup.array()
            .of(
              Yup.object().shape({
                imageUrl: Yup.string().required("Image field is required"),
                altText: Yup.string(),
              })
            )
            .min(1, "At least one image is required"),
        })
      )
      .min(1, "At least one variant is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      category: "",
      variants: [
        {
          color: "",
          sizes: [{ size: "", price: 0, stock: 0 }],
          images: [{ imageUrl: "", altText: "" }],
        },
      ],
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const formData = new FormData();

        // Append all text fields
        formData.append("name", values.name);
        formData.append("description", values.description);
        formData.append("category", values.category);
        formData.append("variants", JSON.stringify(values.variants));

        // Append main image if exists
        if (values.mainImage) {
          formData.append("mainImage", values.mainImage);
        }

        // Append variant images
        values.variants.forEach((variant, variantIndex) => {
          variant.images.forEach((image, imageIndex) => {
            if (image.imageFile) {
              formData.append(`variantImages`, image.imageFile);
            }
          });
        });

        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/store/products/add`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Product created:", response.data);
        alert("Product created successfully!");
        resetForm();
      } catch (error) {
        console.error("Error creating product:", error);
        alert("Failed to create product");
      }
    },
  });

  // Add this function to handle file changes
  const handleFileChange = (event, variantIndex, imageIndex) => {
    const file = event.currentTarget.files[0];
    if (!file) return;

    const variants = [...formik.values.variants];
    variants[variantIndex].images[imageIndex] = {
      ...variants[variantIndex].images[imageIndex],
      imageFile: file,
      imageUrl: URL.createObjectURL(file), // for preview
    };

    formik.setFieldValue("variants", variants);
  };

  // Helper functions for dynamic fields
  const addVariant = () => {
    formik.setFieldValue("variants", [
      ...formik.values.variants,
      {
        color: "",
        sizes: [{ size: "", price: 0, stock: 0 }],
        images: [{ imageUrl: "", altText: "" }],
      },
    ]);
  };

  const removeVariant = (index) => {
    const variants = [...formik.values.variants];
    variants.splice(index, 1);
    formik.setFieldValue("variants", variants);
  };

  const addSize = (variantIndex) => {
    const variants = [...formik.values.variants];
    variants[variantIndex].sizes.push({ size: "", price: 0, stock: 0 });
    formik.setFieldValue("variants", variants);
  };

  const removeSize = (variantIndex, sizeIndex) => {
    const variants = [...formik.values.variants];
    variants[variantIndex].sizes.splice(sizeIndex, 1);
    formik.setFieldValue("variants", variants);
  };

  const addImage = (variantIndex) => {
    const variants = [...formik.values.variants];
    variants[variantIndex].images.push({ imageUrl: "", altText: "" });
    formik.setFieldValue("variants", variants);
  };

  const removeImage = (variantIndex, imageIndex) => {
    const variants = [...formik.values.variants];
    variants[variantIndex].images.splice(imageIndex, 1);
    formik.setFieldValue("variants", variants);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Create New Product
      </h1>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/* Basic Product Info */}
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.name}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category*
            </label>
            <input
              type="text"
              id="category"
              name="category"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.category}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            />
            {formik.touched.category && formik.errors.category && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.category}
              </div>
            )}
          </div>
        </div>

        {/* Variants Section */}
        <div className="space-y-6">
          <h2 className="text-lg font-medium text-gray-900">
            Product Variants
          </h2>
          {formik.touched.variants &&
            typeof formik.errors.variants === "string" && (
              <div className="text-red-500 text-sm">
                {formik.errors.variants}
              </div>
            )}

          {formik.values.variants.map((variant, variantIndex) => (
            <div key={variantIndex} className="border p-4 rounded-lg space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Variant #{variantIndex + 1}</h3>
                {formik.values.variants.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeVariant(variantIndex)}
                    className="text-red-500 text-sm"
                  >
                    Remove Variant
                  </button>
                )}
              </div>

              {/* Color */}
              <div>
                <label
                  htmlFor={`variants.${variantIndex}.color`}
                  className="block text-sm font-medium text-gray-700"
                >
                  Color*
                </label>
                <input
                  type="text"
                  id={`variants.${variantIndex}.color`}
                  name={`variants.${variantIndex}.color`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={variant.color}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                />
                {formik.touched.variants?.[variantIndex]?.color &&
                  formik.errors.variants?.[variantIndex]?.color && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.variants[variantIndex].color}
                    </div>
                  )}
              </div>

              {/* Sizes */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium text-gray-700">Sizes*</h4>
                  <button
                    type="button"
                    onClick={() => addSize(variantIndex)}
                    className="text-indigo-600 text-sm"
                  >
                    Add Size
                  </button>
                </div>

                {variant.sizes.map((size, sizeIndex) => (
                  <div
                    key={sizeIndex}
                    className="grid grid-cols-3 gap-4 items-end"
                  >
                    <div>
                      <label
                        htmlFor={`variants.${variantIndex}.sizes.${sizeIndex}.size`}
                        className="block text-xs font-medium text-gray-500"
                      >
                        Size
                      </label>
                      <input
                        type="text"
                        id={`variants.${variantIndex}.sizes.${sizeIndex}.size`}
                        name={`variants.${variantIndex}.sizes.${sizeIndex}.size`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={size.size}
                        placeholder="e.g., S, M, L"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                      />
                      {formik.touched.variants?.[variantIndex]?.sizes?.[
                        sizeIndex
                      ]?.size &&
                        formik.errors.variants?.[variantIndex]?.sizes?.[
                          sizeIndex
                        ]?.size && (
                          <div className="text-red-500 text-xs mt-1">
                            {
                              formik.errors.variants[variantIndex].sizes[
                                sizeIndex
                              ].size
                            }
                          </div>
                        )}
                    </div>

                    <div>
                      <label
                        htmlFor={`variants.${variantIndex}.sizes.${sizeIndex}.price`}
                        className="block text-xs font-medium text-gray-500"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        id={`variants.${variantIndex}.sizes.${sizeIndex}.price`}
                        name={`variants.${variantIndex}.sizes.${sizeIndex}.price`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={size.price}
                        min="0"
                        step="0.01"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                      />
                      {formik.touched.variants?.[variantIndex]?.sizes?.[
                        sizeIndex
                      ]?.price &&
                        formik.errors.variants?.[variantIndex]?.sizes?.[
                          sizeIndex
                        ]?.price && (
                          <div className="text-red-500 text-xs mt-1">
                            {
                              formik.errors.variants[variantIndex].sizes[
                                sizeIndex
                              ].price
                            }
                          </div>
                        )}
                    </div>

                    <div className="flex items-end space-x-2">
                      <div className="flex-1">
                        <label
                          htmlFor={`variants.${variantIndex}.sizes.${sizeIndex}.stock`}
                          className="block text-xs font-medium text-gray-500"
                        >
                          Stock
                        </label>
                        <input
                          type="number"
                          id={`variants.${variantIndex}.sizes.${sizeIndex}.stock`}
                          name={`variants.${variantIndex}.sizes.${sizeIndex}.stock`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={size.stock}
                          min="0"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                        />
                        {formik.touched.variants?.[variantIndex]?.sizes?.[
                          sizeIndex
                        ]?.stock &&
                          formik.errors.variants?.[variantIndex]?.sizes?.[
                            sizeIndex
                          ]?.stock && (
                            <div className="text-red-500 text-xs mt-1">
                              {
                                formik.errors.variants[variantIndex].sizes[
                                  sizeIndex
                                ].stock
                              }
                            </div>
                          )}
                      </div>
                      {variant.sizes.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSize(variantIndex, sizeIndex)}
                          className="text-red-500 text-sm mb-1"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Images */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium text-gray-700">Images*</h4>
                  <button
                    type="button"
                    onClick={() => addImage(variantIndex)}
                    className="text-indigo-600 text-sm"
                  >
                    Add Image
                  </button>
                </div>

                {variant.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="grid grid-cols-2 gap-4 items-end"
                  >
                    <div>
                      <label className="block text-xs font-medium text-gray-500">
                        Image
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleFileChange(e, variantIndex, imageIndex)
                        }
                        className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-indigo-50 file:text-indigo-700
                      hover:file:bg-indigo-100"
                      />
                      {image.imageUrl && (
                        <div className="mt-2">
                          <img
                            src={image.imageUrl}
                            alt="Preview"
                            className="h-20 w-20 object-cover rounded"
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex items-end space-x-2">
                      <div className="flex-1">
                        <label
                          htmlFor={`variants.${variantIndex}.images.${imageIndex}.altText`}
                          className="block text-xs font-medium text-gray-500"
                        >
                          Alt Text
                        </label>
                        <input
                          type="text"
                          id={`variants.${variantIndex}.images.${imageIndex}.altText`}
                          name={`variants.${variantIndex}.images.${imageIndex}.altText`}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={image.altText}
                          placeholder="Description of the image"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                        />
                      </div>
                      {variant.images.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeImage(variantIndex, imageIndex)}
                          className="text-red-500 text-sm mb-1"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addVariant}
            className="w-full py-2 px-4 border border-dashed border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            + Add Another Variant
          </button>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;

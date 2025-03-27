import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams(); // Get ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/store/products/getById/${id}`)
      .then((response) => {
        setProduct(response.data);
        console.log("Fetched Product Details:", response.data); // Debugging line to check fetched data

        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const [selectedImage, setSelectedImage] = useState("");

  // Set default image when product images are available
  useEffect(() => {
    if (product?.images?.length > 0) {
      setSelectedImage(
        `${import.meta.env.VITE_API_URL}${product.images[0].imageUrl}`
      );
    }
  }, [product]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!product)
    return (
      <div className="text-center mt-10 text-red-500">Product not found.</div>
    );

  return (
    <>
   
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* images - start */}
            <div className="grid gap-4 lg:grid-cols-5">
              {/* Thumbnails */}
              <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {product?.images?.map((image) => (
                  <div
                    key={image.id}
                    className="overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
                    onClick={() =>
                      setSelectedImage(
                        image.imageUrl
                          ? `${import.meta.env.VITE_API_URL}${image.imageUrl}`
                          : "https://via.placeholder.com/150"
                      )
                    }
                  >
                    <img
                      src={
                        image.imageUrl
                          ? `${import.meta.env.VITE_API_URL}${image.imageUrl}`
                          : "https://via.placeholder.com/150"
                      }
                      loading="lazy"
                      alt={image.altText}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <img
                  src={selectedImage}
                  loading="lazy"
                  alt="Selected Product Image"
                  className="h-full w-full object-cover object-center"
                />
                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                  Sale
                </span>
                <a
                  href="#"
                  className="absolute right-4 top-4 inline-block rounded-lg border bg-white px-3.5 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* images - end */}
            {/* content - start */}
            <div className="md:py-8">
              {/* name - start */}
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-gray-500">
                  {product.product.name}
                </span>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                  {product.product.description}
                </h2>
              </div>
              {/* name - end */}
              {/* rating - start */}
              <div className="mb-6 flex items-center gap-3 md:mb-10">
                <div className="flex h-7 items-center gap-1 rounded-full bg-indigo-500 px-2 text-white">
                  <span className="text-sm">4.2</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-500 transition duration-100">
                  56 ratings
                </span>
              </div>
              {/* rating - end */}
              {/* color - start */}
              <div className="mb-4 md:mb-6">
                <span className="mb-1 inline-block text-sm font-semibold text-gray-500 md:text-base">
                  Color
                </span>
                <div className="flex flex-wrap gap-2">
                  {product?.product?.variants?.map((image) => (
                    <Link to={`/store/${image.id}`} className="mt-4 flex gap-2">
                      <img
                        key={image.id}
                        src={
                          image.images?.[0]?.imageUrl
                            ? `${import.meta.env.VITE_API_URL}${
                                image.images[0].imageUrl
                              }`
                            : "https://via.placeholder.com/150"
                        }
                        alt={image.images[0].altText} // Fix: Use `image.altText` instead of `product.name`
                        className="w-24 h-24 object-cover rounded"
                      />
                    </Link>
                  ))}
                </div>
              </div>
              {/* color - end */}
              {/* size - start */}
              <div className="mb-8 md:mb-10">
                <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
                  Size
                </span>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.id}
                      type="button"
                      className="flex h-8 w-12 items-center justify-center rounded-md border bg-white text-center text-sm font-semibold text-gray-800 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                    >
                      {size.size}
                    </button>
                  ))}
                </div>
              </div>
              {/* size - end */}
              {/* price - start */}
              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">
                    $15.00
                  </span>
                  <span className="mb-0.5 text-red-500 line-through">
                    $30.00
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  incl. VAT plus shipping
                </span>
              </div>

              <div className="mb-6 flex items-center gap-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
                <span className="text-sm">2-4 day shipping</span>
              </div>

              <div className="flex gap-2.5">
                <a
                  href="#"
                  className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base"
                >
                  Add to cart
                </a>
                <a
                  href="#"
                  className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

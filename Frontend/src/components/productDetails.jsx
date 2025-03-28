import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id: variantId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/store/products/getById/${variantId}`
      )
      .then((response) => {
        setProduct(response.data);
        const initialVariant =
          response.data.product.variants.find((v) => v.slug === variantId) ||
          response.data.product.variants[0];
        setSelectedVariant(initialVariant);

        console.log("Initial Variant:", initialVariant);

        if (initialVariant.sizes.length > 0) {
          setSelectedSize(initialVariant.sizes[0]);
        }

        if (initialVariant.images?.length > 0) {
          setSelectedImage(
            `${import.meta.env.VITE_API_URL}${
              initialVariant.images[0].imageUrl
            }`
          );
        }

        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [variantId]);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
    setSelectedSize(variant.sizes[0] || null);
    if (variant.images?.length > 0) {
      setSelectedImage(
        `${import.meta.env.VITE_API_URL}${variant.images[0].imageUrl}`
      );
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedVariant) return;

    addToCart({
      variantId: selectedVariant.id,
      sizeId: selectedSize.id,
      quantity,
      price: selectedSize.price,
      product: {
        name: product.product.name,
        image: selectedVariant.images[0]?.imageUrl,
        variant: selectedVariant.color,
        size: selectedSize.size,
      },
    });

    navigate("/cart");
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!product)
    return (
      <div className="text-center mt-10 text-red-500">Product not found.</div>
    );

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:mx-20">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Images section */}
          <div className="grid gap-4 lg:grid-cols-6">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
              {selectedVariant?.images?.map((image) => (
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

            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-5">
              <img
                src={selectedImage}
                loading="lazy"
                alt="Selected Product Image"
                className="h-full w-full object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {product.product.name}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {product.product.description}
              </h2>
            </div>

            {/* Variant selection */}
            <div className="mb-4 md:my-6 flex items-center gap-5">
              <span className="mr-7 inline-block text-sm font-semibold text-gray-500 md:text-base">
                Color :
              </span>
              <div className="flex flex-wrap gap-2">
                {product?.product?.variants?.map((variant) => (
                  <div key={variant.id} className="relative group">
                    <button
                      onClick={() => handleVariantChange(variant)}
                      className={` flex gap-2 p-1 rounded-md ${
                        selectedVariant?.id === variant.id
                          ? "ring-2 ring-indigo-500"
                          : ""
                      }`}
                    >
                      <Link to={`/store/${variant.slug}`}>
                        <img
                          src={
                            variant.images?.[0]?.imageUrl
                              ? `${import.meta.env.VITE_API_URL}${
                                  variant.images[0].imageUrl
                                }`
                              : "https://via.placeholder.com/150"
                          }
                          alt={variant.images?.[0]?.altText || variant.color}
                          className="w-24 h-24 object-cover rounded"
                        />
                      </Link>
                    </button>

                    {/* Tooltip */}
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 scale-0 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white transition-all duration-200 group-hover:scale-100">
                      {variant.color}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Size selection */}
            <div className="mb-4 md:mb-4 flex items-center gap-5">
              <span className="mr-9 inline-block text-sm font-semibold text-gray-500 md:text-base">
                Size :
              </span>
              <div className="flex flex-wrap gap-3">
                {selectedVariant?.sizes?.map((size) => (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => handleSizeChange(size)}
                    className={`flex h-8 w-12 items-center justify-center rounded-md border text-center text-sm font-semibold transition duration-100 ${
                      selectedSize?.id === size.id
                        ? "bg-indigo-500 text-white border-indigo-500"
                        : "bg-white text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    {size.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-4 flex items-center gap-5">
              <span className="mr-7 inline-block text-sm font-semibold text-gray-500 md:text-base">
                Price :
              </span>

              <span className="text-xl font-bold text-gray-800 md:text-xl">
                {selectedSize ? `₹${selectedSize.price}` : "Select a size"}
              </span>
            </div>

            {/* Quantity selector */}
            <div className="mb-6 flex items-center gap-5">
              <span className=" inline-block text-sm font-semibold text-gray-500 md:text-base">
                Quantity :
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-8 w-8 items-center justify-center rounded-md border text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-8 w-8 items-center justify-center rounded-md border text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
            <div className="mb-5">
              <span className="text-sm font-medium">
                Available Stock:{" "}
                {selectedSize ? (
                  <span
                    className={
                      selectedSize.stock > 5
                        ? "text-green-600"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {selectedSize.stock > 5
                      ? "In Stock - Order Now!"
                      : `Hurry Up! Only ${selectedSize.stock} left`}
                  </span>
                ) : (
                  "Please select a size to check availability"
                )}
              </span>
            </div>
            {/* Add to cart button */}
            <div className="flex gap-2.5">
              <button
                disabled={!selectedSize}
                onClick={handleAddToCart}
                className={`inline-block flex-1 rounded-lg px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 focus-visible:ring md:text-base ${
                  selectedSize
                    ? "bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {selectedSize ? "Add to cart" : "Select a size"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

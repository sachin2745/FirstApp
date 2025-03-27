import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/store/products/getall`
        ); // Replace with actual API endpoint
        const data = await response.json();
        setProducts(data);
        console.log("Fetched Products:", data); // Debugging line to check fetched data
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Product Listing</h1>
        <div className="text-right mb-4">
          <button className="hover:scale-110 transition duration-300 ease-in-out">
            <Link
              to="/add-product"
              className="border border-b-2 border-(--color-midnight) text-(--color-midnight) px-4 py-2 rounded"
            >
              Add Product
            </Link>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 animate-pulse"
            >
              <div className="relative w-full h-96 bg-gray-300 rounded-md"></div>
              <h2 className="w-3/4 h-5 bg-gray-300 rounded mt-5"></h2>
              <h2 className="w-1/2 h-4 bg-gray-300 rounded mt-2"></h2>
              <p className="w-1/3 h-4 bg-gray-300 rounded mt-2"></p>
              <p className="w-2/3 h-3 bg-gray-300 rounded mt-2"></p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Product Listing</h1>
      <div className="text-right mb-4">
        <button className="hover:scale-110 transition duration-300 ease-in-out mr-5">
          <Link
            to="/add-bulk-product"
            className="border border-b-2 border-(--color-midnight) text-(--color-midnight) px-4 py-2 rounded "
          >
            Add Bluk Product
          </Link>
        </button>
        <button className="hover:scale-110 transition duration-300 ease-in-out">
          <Link
            to="/add-product"
            className="border border-b-2 border-(--color-midnight) text-(--color-midnight) px-4 py-2 rounded "
          >
            Add Product
          </Link>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((items) => (
          <div key={items.id} className=" bg-white rounded-lg shadow-lg p-4 ">
            <Link to={`/store/${items.slug}`} className="block w-full">
              <div className="relative group h-[396px] w-full overflow-hidden rounded-md">
                <img
                  src={
                    items.images?.[0]?.imageUrl
                      ? `${import.meta.env.VITE_API_URL}${
                          items.images[0].imageUrl
                        }`
                      : "https://via.placeholder.com/150"
                  }
                  alt={items.images?.[0]?.altText || "Placeholder image"}
                  loading="lazy"
                  className="w-full h-full object-cover object-center rounded-md transition duration-200 group-hover:scale-110"
                />
              </div>
            </Link>

            <Link to={`/store/${items.slug}`}>
              <h2 className="text-lg font-semibold cusrsor-pointer pt-5 uppercase">
                {items.product.name}
              </h2>
              <h2 className="text-md font-medium text-gray-500 line-clamp-1">
                {items.product.description}
              </h2>
            </Link>
            <p className="text-gray-700 font-medium">
              ₹{items.sizes[0]?.price || "N/A"}
            </p>
            <p className="text-sm text-gray-500">
              Available Sizes:{" "}
              {items.sizes.map((size) => size.size).join(", ") || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;

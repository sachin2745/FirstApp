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

  if (loading)
    return <div className="text-center text-lg font-bold">Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((items) => (
          <div key={items.id} className="border rounded-lg shadow-lg p-4">
            <img
              src={
                items.images[0]?.imageUrl || "https://via.placeholder.com/150"
              }
              alt={items.images[0]?.altText}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-semibold">{items.product.name}</h2>
            <p className="text-gray-700">
              Price: ${items.sizes[0]?.price || "N/A"}
            </p>
            <p className="text-sm text-gray-500">
              Available Sizes:{" "}
              {items.sizes.map((size) => size.size).join(", ") || "N/A"}
            </p>
            <Link
              to={`/store/${items.id}`}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;

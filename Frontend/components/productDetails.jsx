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

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!product)
    return (
      <div className="text-center mt-10 text-red-500">Product not found.</div>
    );

    
  return (
    // <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    //   <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
    //   <p className="text-gray-700">{product.description}</p>
    //   <div className="mt-4 text-xl font-semibold text-green-600">${product.price}</div>

    //   {product.variants?.map((variant) => (
    //     <div key={variant.id} className="mt-6 border-t pt-4">
    //       <h2 className="text-lg font-semibold">{variant.name}</h2>

    //       <div className="flex gap-4 mt-2">
    //         {variant.sizes.map((size) => (
    //           <span key={size.id} className="px-3 py-1 bg-gray-200 rounded">{size.label}</span>
    //         ))}
    //       </div>

    //       <div className="mt-4 flex gap-2">
    //         {variant.images.map((image) => (
    //           <img key={image.id} src={image.url} alt={product.name} className="w-24 h-24 object-cover rounded" />
    //         ))}
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <>
      <div className="bg-gray-100 min-h-screen dark:bg-gray-800 py-8">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {product.product.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {product.product.description}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    $ {product.sizes[0].price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Availability:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {product.sizes[0].stock}
                  </span>
                </div>
              </div>
              {product?.product?.variants?.map((image) => (
                <Link to={`/store/${image.id}`} className="mt-4 flex gap-2">
                  <img
                    key={image.id}
                    src={image.images[0].imageUrl} // Fix: Use `image.imageUrl` instead of `image.url`
                    alt={image.images[0].altText} // Fix: Use `image.altText` instead of `product.name`
                    className="w-24 h-24 object-cover rounded"
                  />
                </Link>
              ))}

              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Select Size:
                </span>
                <div className="flex items-center mt-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size.id}
                      className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                    >
                      <span className="">{size.size}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

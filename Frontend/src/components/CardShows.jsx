import React from "react";
import { EffectCoverflow,Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const CardShows = () => {
  // Product data
  const product = {
    name: "Premium Wireless Headphones",
    price: 199.99,
    discount: 249.99,
    description:
      "Experience crystal-clear sound with our noise-cancelling wireless headphones. Featuring 30-hour battery life, touch controls, and premium comfort.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Built-in microphone",
      "Foldable design",
    ],
    colors: ["Black", "Silver", "Blue", "Red"],
    rating: 4.8,
    reviews: 1243,
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Product Image Slider */}
          <div className="relative my-36">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={false}
              modules={[EffectCoverflow,Autoplay, Pagination]}
              className=""
            >
              <SwiperSlide>
                <img src="https://m.media-amazon.com/images/I/61VqpoomXnL._AC_UF1000,1000_QL80_.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://i.pinimg.com/736x/a4/6e/42/a46e42708bc1e2eb6276f722e46d435f.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://s.alicdn.com/@sc04/kf/He4b40632c1ec41058116bfad686a96a7I.jpg_720x720q50.jpg" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="https://www.hatech.pk/web/image/product.template/35177/image_1024?unique=1597568" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="https://i.ebayimg.com/images/g/qxgAAOSw3ydVp-LO/s-l1200.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://expresspromo.com.au/wp-content/uploads/2021/02/112785-2.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Product Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>

            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-current"
                        : "stroke-current fill-transparent"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900">
                ${product.price}
              </span>
              {product.discount && (
                <span className="ml-2 text-lg text-gray-500 line-through">
                  ${product.discount}
                </span>
              )}
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">Available Colors:</h3>
              <div className="flex space-x-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className="w-8 h-8 rounded-full border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-medium transition duration-200">
                Add to Cart
              </button>
              <button className="flex-1 bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-600 py-3 px-6 rounded-lg font-medium transition duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShows;

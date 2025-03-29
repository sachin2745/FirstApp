import React from "react";

const ShopByCategory = () => {
  // Helper function to convert numbers to words (you would need to implement this)
  function getNumberWord(num) {
    const numberWords = [
      "First",
      "Second",
      "Third",
      "Fourth",
      "Fifth",
      "Six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
    ];
    return numberWords[num - 1];
  }
  return (
    <section className="bg-white py-10">
      {/* Banner Image */}
      <div className="max-w-screen-2xl mx-auto bg-white px-4 sm:px-6 lg:px-8">
        <img
          src="/Shop.webp"
          alt="banner"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 cursor-pointer">
        {/* First Slide */}
        <div className="relative h-full w-full bg-white">
          <div className="grid grid-cols-3 md:grid-cols-6">
            {/* Mobile scrolling container */}
            <div className="flex md:hidden overflow-x-auto space-x-4 col-span-3">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <a
                  key={num}
                  href={`/link${num}`}
                  className="block flex-shrink-0 w-32"
                >
                  <img
                    src={`/${num === 6 ? "Six" : getNumberWord(num)}.webp`}
                    alt={`image ${num}`}
                    className="w-full h-auto object-cover"
                  />
                </a>
              ))}
            </div>

            {/* Desktop grid */}
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <a key={num} href={`/link${num}`} className="hidden md:block">
                <img
                  src={`/${num === 6 ? "Six" : getNumberWord(num)}.webp`}
                  alt={`image ${num}`}
                  className="w-full h-auto object-cover"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Second Slide */}
        <div className="relative h-full w-full bg-white">
          <div className="grid grid-cols-3 md:grid-cols-6">
            {/* Mobile scrolling container */}
            <div className="flex md:hidden overflow-x-auto space-x-4 col-span-3">
              {[7, 8, 9, 10, 11, 12].map((num) => (
                <a
                  key={num}
                  href={`/link${num}`}
                  className="block flex-shrink-0 w-32"
                >
                  <img
                    src={`/${getNumberWord(num)}.webp`}
                    alt={`image ${num}`}
                    className="w-full h-auto object-cover"
                  />
                </a>
              ))}
            </div>

            {/* Desktop grid */}
            {[7, 8, 9, 10, 11, 12].map((num) => (
              <a key={num} href={`/link${num}`} className="hidden md:block">
                <img
                  src={`/${getNumberWord(num)}.webp`}
                  alt={`image ${num}`}
                  className="w-full h-auto object-cover"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Third Slide */}
        <div className="relative h-full w-full bg-white">
          <div className="grid grid-cols-3 md:grid-cols-6">
            {/* Mobile scrolling container */}
            <div className="flex md:hidden overflow-x-auto space-x-4 col-span-3">
              {["thirteen", "forteen", "fifteen", "sixteen"].map(
                (word, idx) => (
                  <a
                    key={word}
                    href={`/link${idx + 7}`}
                    className="block flex-shrink-0 w-32"
                  >
                    <img
                      src={`/${word}.webp`}
                      alt={`image ${idx + 7}`}
                      className="w-full h-auto object-cover"
                    />
                  </a>
                )
              )}
            </div>

            {/* Desktop grid */}
            <a href="/link1" className="hidden md:block"></a>
            <a href="/link7" className="hidden md:block">
              <img
                src="/thirteen.webp"
                alt="image 7"
                className="w-full h-auto object-cover"
              />
            </a>
            <a href="/link8" className="hidden md:block">
              <img
                src="/forteen.webp"
                alt="image 8"
                className="w-full h-auto object-cover"
              />
            </a>
            <a href="/link9" className="hidden md:block">
              <img
                src="/fifteen.webp"
                alt="image 9"
                className="w-full h-auto object-cover"
              />
            </a>
            <a href="/link10" className="hidden md:block">
              <img
                src="/sixteen.webp"
                alt="image 10"
                className="w-full h-auto object-cover"
              />
            </a>
            <a href="/link1" className="hidden md:block"></a>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto bg-white px-4 sm:px-6 lg:px-8">
        <img
          src="/MoreKnockout.webp"
          alt="banner"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default ShopByCategory;

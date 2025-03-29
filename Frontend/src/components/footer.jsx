import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] text-center border-b-2 lg:text-left">
      <div className="mx-auto max-w-6xl xl:px-0 xl:py-8 px-4 py-4 xl:w-[95%]">
        <div className="md:flex md:flex-col md:justify-between xl:flex xl:flex-row">
          <div className="mb-6 md:mb-0 xl:w-[40%] md:w-[100%]">
            <div className="flex items-center">
              <div className="self-center font-[700] text-[#1B2124] text-[18px] leading-[28px]">
                E-Commerce
              </div>
            </div>
            <div className="pt-3 font-[500] text-[#3D3D3D] text-xs xl:text-[14px] xl:leading-[20px] sm:text-[12px] sm:leading-[18px] text-left">
              Your one-stop destination for premium quality shirts. We offer the
              latest trends in men's and women's fashion with fast delivery and
              excellent customer service.
            </div>
            <div className="2xl">
              <div className="grid content-between md:justify-start col-span-12 md:col-span-4 space-y-2">
                <div className="whitespace-nowrap text-[#989DA5] md:block hidden" />
                <div className="flex d-md-items-end gap-4 py-6">
                  <a
                    aria-label="google-store"
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="h-[40px] rounded-lg"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                      alt="Download App on Playstore"
                    />
                  </a>
                  <a
                    aria-label="apple-store"
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="h-[40px] rounded-lg"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                      alt="Download App on Appstore"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[24px] md:mb-0 lg:mt-0 mt-[20px]">
                <div className="text-[16px] md:text-[20px] font-[600] mb-[10px] text-start">
                  Follow Us:
                </div>
                <div className="flex w-[204px] justify-between">
                  <a aria-label="facebook" href="https://www.facebook.com">
                    <img
                      className="h-6 w-6"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                      alt="Facebook"
                    />
                  </a>
                  <a aria-label="instagram" href="https://www.instagram.com">
                    <img
                      className="h-6 w-6"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                      alt="Instagram"
                    />
                  </a>
                  <a aria-label="youtube" href="https://www.youtube.com">
                    <img
                      className="h-6 w-6"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
                      alt="YouTube"
                    />
                  </a>
                  <a aria-label="linkedin" href="https://www.linkedin.com">
                    <img
                      className="h-6 w-6"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
                      alt="LinkedIn"
                    />
                  </a>
                  <a aria-label="twitter" href="https://twitter.com">
                    <img
                      className="h-6 w-6"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png"
                      alt="Twitter"
                    />
                  </a>
                  <a aria-label="pinterest" href="https://pinterest.com">
                    <img
                      className="h-6 w-6"
                      src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
                      alt="Pinterest"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-[50%] grid xl:grid-cols-3 gap-5 md:grid-cols-3 md:place-items-start grid-cols-2 md:pt-6 xl:pt-0 xl:mr-[60px]">
            <div>
              <div className="mb-2 font-[600] text-start text-[#1B2124] xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px]">
                Shop
              </div>
              <ul className="font-[400] text-start text-[#757575] text-[14px] leading-[20px]">
                <li className="mb-2">
                  <a href="/men">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      Men's Shirts
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/women">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      Women's Shirts
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/new-arrivals">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      New Arrivals
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/best-sellers">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      Best Sellers
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/sale">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      Sale
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-2 font-[600] text-start text-[#1B2124] xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px]">
                Customer Service
              </div>
              <ul className="font-[400] text-start text-[#757575] text-[14px] leading-[20px]">
                <li className="mb-2">
                  <a href="/contact">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      Contact Us
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/faq">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      FAQ
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/shipping">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      Shipping & Returns
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/size-guide">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      Size Guide
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/privacy-policy">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      Privacy Policy
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/terms">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      Terms & Conditions
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-2 font-[600] text-start text-[#1B2124] xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px]">
                About Us
              </div>
              <ul className="font-[400] text-start text-[#757575] text-[14px] leading-[20px]">
                <li className="mb-2">
                  <a href="/about">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      Our Story
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/blog">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      Blog
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/careers">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      Careers
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/sustainability">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      Sustainability
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/press">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      Press
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-2 font-[600] text-start text-[#1B2124] xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px]">
                My Account
              </div>
              <ul className="font-[400] text-start text-[#757575] text-[14px] leading-[20px]">
                <li className="mb-2">
                  <a href="/account">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      Account
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/orders">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      Order Status
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/wishlist">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      Wishlist
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/gift-cards">
                    <div className="hover:underline text-[#3D3D3D] hover:text-black">
                      Gift Cards
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[#e0e0e0] text-center text-[#757575] text-sm">
          © {new Date().getFullYear()} E-Commerce. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

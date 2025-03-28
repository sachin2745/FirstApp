import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";



function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <div
              className="flex items-center fontss gap-2 px-2 py-3 cursor-pointer font-medium text-lg text-white active:bg-black hover:bg-black hover:text-brown"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Fragnance
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-full rounded-xl border-white  lg:block focus:outline-none focus:ring-0 focus:ring-offset-0">
          <div>
            <div className="bg-white fontss">
              <div className="h-[288px]  flex overflow-hidden items-center flex-col">
                <div className="grid grid-cols-3 m-0 p-4 h-full">
                  <div className="col-span-1 w-full">
                    <div class="flex flex-col h-full">
                      <h2 class="mb-3 text-2xl text-black font-semibold ">
                        Fragrances
                      </h2>
                      <p class="text-[16px] text-black font-normal mb-4">
                        Each handcrafted scent embodies love. Designed for the
                        timeless man and woman.
                      </p>
                      <div class="mt-auto">
                        <button class="w-full p-3 bg-black">
                          <a
                            class="text-white"
                            href="https://luxbysandy.com/collections/all-fragnance"
                          >
                            SHOP ALL Fragrances
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2  ps-10   flex gap-5 h-full">
                    <div className="">
                      <a
                        className="text-dark "
                        href="https://luxbysandy.com/lections/fragrances"
                      >
                        <img
                          className="mb-3 object-cover h-56"
                          src="https://luxbysandy.com/assets/luxbysandyPanel/ProductSubCategoryImages/IMG_2662.jpeg"
                          alt=""
                        />
                        <div className="text-center font-medium text-black text-medium">
                          Unisex Fragrances
                        </div>
                      </a>
                    </div>
                    <div className="">
                      <a
                        className="text-dark "
                        href="https://luxbysandy.com/lections/fragrances"
                      >
                        <img
                          className="mb-3 object-cover h-56"
                          src="https://luxbysandy.com/assets/luxbysandyPanel/ProductSubCategoryImages/970f2bc1-cfbe-4981-a8a0-475dd25aa094.jfif"
                          alt=""
                        />
                        <div className="text-center font-medium text-black text-medium">
                          Unisex Fragrances
                        </div>
                      </a>
                    </div>
                    <div className="">
                      <a
                        className="text-dark "
                        href="https://luxbysandy.com/lections/fragrances"
                      >
                        <img
                          class="mb-3 object-cover h-56"
                          src="https://luxbysandy.com/assets/luxbysandyPanel/ProductSubCategoryImages/WhatsApp Image 2025-03-24 at 12.20.30 PM.jpeg"
                          alt=""
                        />
                        <div className="text-center font-medium text-black text-medium">
                          Unisex Fragrances
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        {/* <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse> */}
      </div>
    </React.Fragment>
  );
}

function NavListMenu2() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
 

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <div
              className="flex items-center fontss gap-2 px-2 py-3 cursor-pointer  font-medium text-lg text-white hover:bg-black hover:text-brown"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Collection
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[30%] p-0 border-white mx-auto rounded-xl lg:block h-auto overflow-hidden">
          <div className="bg-white flex fontss ">
            {/* Left Side - Categories */}
            <div className="flex flex-col border-r border-gray-200">
              <div className="group py-2 text-sm cursor-pointer px-4 hover:bg-blue-100 flex items-center justify-between gap-5 w-56">
                <h3 className="text-medium  overflow-y-auto overflow-x-hidden cursor-pointer text-black">Mens Top Wear</h3>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>

                {/* Right Side - Varieties (shown on hover) */}
                <div className="absolute overflow-y-auto overflow-x-hidden left-48 top-0 hidden group-hover:block bg-white shadow-xl w-full h-full px-4 ml-[31px]">
                  <div className="py-2 text-sm text-black font-medium">More in Men's Top Wear</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">All</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Men's T-Shirts</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Men's Formal Shirts</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Men's Casual Shirts</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Men's Kurtas</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Men's Ethnic Sets</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Men's Blazer</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Men's Raincoat</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Jeans</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Trousers</div>
                </div>
              </div>

              <div className="group py-2 text-sm cursor-pointer px-4 hover:bg-blue-100 flex items-center justify-between gap-5 w-56">
                <h3 className="text-medium text-black">Mens Footwear</h3>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>

                <div className="absolute overflow-y-auto overflow-x-hidden cursor-pointer left-48 top-0 hidden group-hover:block bg-white shadow-lg w-full h-full px-4 ml-[31px]">
                <div className="py-2 text-sm text-black font-medium">More in Mens Footwear</div>

                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Sports Shoes</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Casual Shoes</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Formal Shoes</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Sandals</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Sneakers</div>
                </div>
              </div>

              <div className="group py-2 text-sm cursor-pointer px-4 hover:bg-blue-100 flex items-center justify-between gap-5 w-56">
                <h3 className="text-medium text-black">Women Footwear</h3>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>

                <div className="absolute overflow-y-auto overflow-x-hidden cursor-pointer left-48 top-0 hidden group-hover:block bg-white shadow-lg w-full h-full px-4 ml-[31px]">
                <div className="py-2 text-sm text-black font-medium">More in Women Footwear</div>

                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Backpacks</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Laptop Bags</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Travel Bags</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Suitcases</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Wallets</div>
                </div>
              </div>

              <div className="group py-2 text-sm cursor-pointer px-4 hover:bg-blue-100 flex items-center justify-between gap-5 w-56">
                <h3 className="text-medium text-black">Watches & Accessories</h3>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>

                <div className="absolute overflow-y-auto overflow-x-hidden cursor-pointer left-48 top-0 hidden group-hover:block bg-white shadow-lg w-full h-full px-4 ml-[31px]">
                <div className="py-2 text-sm text-black font-medium">More in Watches & Accessories</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Mens & Woman Watches</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Mens & Woman Sunglases</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Wallets</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Travel Bags</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Suitcases</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Wallets</div>
                </div>
              </div>
              <div className="group py-2 text-sm cursor-pointer px-4 hover:bg-blue-100 flex items-center justify-between gap-5 w-56">
                <h3 className="text-medium text-black">Women Western</h3>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>

                <div className="absolute overflow-y-auto overflow-x-hidden cursor-pointer left-48 top-0 hidden group-hover:block bg-white shadow-lg w-full h-full px-4 ml-[31px]">
                <div className="py-2 text-sm text-black font-medium">More in Women Western</div>

                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Backpacks</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Laptop Bags</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Travel Bags</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Suitcases</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Wallets</div>
                </div>
              </div>
              <div className="group py-2 text-sm cursor-pointer px-4 hover:bg-blue-100 flex items-center justify-between gap-5 w-56">
                <h3 className="text-medium text-black">Kids</h3>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>

                <div className="absolute overflow-y-auto overflow-x-hidden cursor-pointer left-48 top-0 hidden group-hover:block bg-white shadow-lg w-full h-full px-4 ml-[31px]">
                <div className="py-2 text-sm text-black font-medium">More in Kids</div>

                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Backpacks</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Laptop Bags</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Travel Bags</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Suitcases</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Wallets</div>
                </div>
              </div>
              <div className="group py-2 text-sm cursor-pointer px-4 hover:bg-blue-100 flex items-center justify-between gap-5 w-56">
                <h3 className="text-medium text-black">Essentails</h3>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>

                <div className="absolute overflow-y-auto overflow-x-hidden cursor-pointer left-48 top-0 hidden group-hover:block bg-white shadow-lg w-full h-full px-4 ml-[31px]">
                <div className="py-2 text-sm text-black font-medium">More in Essentails</div>

                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Backpacks</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Laptop Bags</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Travel Bags</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Suitcases</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Wallets</div>
                </div>
              </div>
              <div className="group py-2 text-sm cursor-pointer px-4 hover:bg-blue-100 flex items-center justify-between gap-5 w-56">
                <h3 className="text-medium text-black">Winter</h3>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>

                <div className="absolute overflow-y-auto overflow-x-hidden cursor-pointer left-48 top-0 hidden group-hover:block bg-white shadow-lg w-full h-full px-4  ml-[31px]">
                <div className="py-2 text-sm text-black font-medium">More in Winters</div>

                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Backpacks</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Laptop Bags</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Travel Bags</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Suitcases</div>
                  <div className="py-2 text-sm text-gray-700  hover:text-black hover:font-semibold">Wallets</div>
                </div>
              </div>
            </div>
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        {/* <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse> */}
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row  lg:p-1 font-Montserrat ">
      
      <NavListMenu />
      <NavListMenu2 />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="white"
        className="font-medium text-lg"
      >
        <div className="flex items-center py-3 px-2 gap-2 fontss hover:bg-black hover:text-brown">
          About us
        </div>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="white"
        className="font-medium text-lg"
      >
        <div className="flex items-center py-3 px-2 gap-2 fontss hover:bg-black hover:text-brown">
          Blogs
        </div>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="white"
        className="font-medium text-lg "
      >
        <div className="flex items-center py-3 px-2 gap-2 fontss hover:bg-black hover:text-brown ">
          All Products
        </div>
      </Typography>
    </List>
  );
}

export function MegaMenuWithHover() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="bg-black font-Montserrat">
      <div className="text-center p-2 bg-secondary">
        <p className="text-sm font-medium text-white">
          10,000+ Five Star Reviews | SALE
        </p>
      </div>
      <Navbar className="mx-auto max-w-screen-2xl px-4 py-1 text-sm bg-black border-none fontss">
        <div className="flex items-center justify-between text-white fontss">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            <img
              src="/LUX-BY-SANDY-LOGO.webp"
              alt="Logo"
              className="w-28 h-auto"
            />
          </Typography>
          <div className="hidden lg:block ">
            <NavList />
          </div>
          <IconButton
            variant="text"
            color="white"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
          <div className="hidden lg:flex items-center gap-2 ">
            <a href="https://luxbysandy.com/stripe-checkout">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
            </a>
            <a href="#ar" id="changeLanguage">
              <img
                src="https://luxbysandy.com/assets/images/sa.png"
                width="32"
                alt="العربية"
              />
            </a>
          </div>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";

const showBgColorPaths = ["/contact"];
const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();
  const isShowBgColor = showBgColorPaths.includes(usePathName);

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? `dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white text-black !bg-opacity-80 shadow-sticky backdrop-blur-sm transition`
            : `absolute bg-transparent ${isShowBgColor ? "text-black" : "text-white"}`
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <Image
                  src="/images/logo/logo-2.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  priority
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  priority
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-center px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100 bg-gray-700"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <NavMenu />
                  {/*<ul className="block lg:flex lg:space-x-12 text-white">*/}
                  {/*  {menuData.map((menuItem, index) => (*/}
                  {/*    <li*/}
                  {/*      key={index}*/}
                  {/*      className="group relative tw-px-6 hover:tw-underline xl:text-2xl flex cursor-pointer"*/}
                  {/*    >*/}
                  {/*      {menuItem.path ? (*/}
                  {/*        <Link*/}
                  {/*          href={menuItem.path}*/}
                  {/*          className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${*/}
                  {/*            usePathName === menuItem.path*/}
                  {/*              ? "text-white"*/}
                  {/*              : "text-white"*/}
                  {/*          }`}*/}
                  {/*        >*/}
                  {/*          {menuItem.title}*/}
                  {/*        </Link>*/}
                  {/*      ) : Array.isArray(menuItem.submenu) ? (*/}
                  {/*        <>*/}
                  {/*          <p*/}
                  {/*            onClick={() => handleSubmenu(index)}*/}
                  {/*            className="flex text-white cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-white dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"*/}
                  {/*          >*/}
                  {/*            {menuItem.title}*/}
                  {/*            <span className="pl-3">*/}
                  {/*              <svg width="25" height="24" viewBox="0 0 25 24">*/}
                  {/*                <path*/}
                  {/*                  fillRule="evenodd"*/}
                  {/*                  clipRule="evenodd"*/}
                  {/*                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"*/}
                  {/*                  fill="currentColor"*/}
                  {/*                />*/}
                  {/*              </svg>*/}
                  {/*            </span>*/}
                  {/*          </p>*/}
                  {/*          <div*/}
                  {/*            className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${*/}
                  {/*              openIndex === index ? "block" : "hidden"*/}
                  {/*            }`}*/}
                  {/*          >*/}
                  {/*            <div className="container">*/}
                  {/*              {menuItem.submenu.map((submenuItem, index) => (*/}
                  {/*                <Link*/}
                  {/*                  href={submenuItem.path}*/}
                  {/*                  key={`${index}-abc`}*/}
                  {/*                  className="block rounded py-2.5 text-sm text-dark hover:text-white dark:text-white/70 dark:hover:text-white lg:px-3"*/}
                  {/*                >*/}
                  {/*                  {submenuItem.title}*/}
                  {/*                </Link>*/}
                  {/*              ))}*/}
                  {/*            </div>*/}
                  {/*          </div>*/}
                  {/*        </>*/}
                  {/*      ) : (*/}
                  {/*        <>*/}
                  {/*          <p*/}
                  {/*            onClick={() => handleSubmenu(index)}*/}
                  {/*            className="flex text-white cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-white dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"*/}
                  {/*          >*/}
                  {/*            {menuItem.title}*/}
                  {/*            <span className="pl-3">*/}
                  {/*              <svg width="25" height="24" viewBox="0 0 25 24">*/}
                  {/*                <path*/}
                  {/*                  fillRule="evenodd"*/}
                  {/*                  clipRule="evenodd"*/}
                  {/*                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"*/}
                  {/*                  fill="currentColor"*/}
                  {/*                />*/}
                  {/*              </svg>*/}
                  {/*            </span>*/}
                  {/*          </p>*/}
                  {/*          <div*/}
                  {/*            className={`submenu relative left-[-50px] top-full rounded-sm */}
                  {/*            bg-white transition-[top] duration-300*/}
                  {/*            w-[650px] group-hover:opacity-100 dark:bg-dark */}
                  {/*            lg:invisible lg:absolute lg:top-[80%] lg:block*/}
                  {/*            lg:p-4 lg:opacity-99 */}
                  {/*            lg:shadow-lg lg:group-hover:visible */}
                  {/*            lg:group-hover:top-full block*/}
                  {/*            lg:w-[650px]*/}
                  {/*            `}*/}
                  {/*          >*/}
                  {/*            <div className="grid grid-cols-2 gap-4">*/}
                  {/*              {Object.entries(menuItem.nestedSubMenu).map(*/}
                  {/*                ([keyItem, keyValue]) => (*/}
                  {/*                  <div className="row flex flex-wrap flex-col">*/}
                  {/*                    <p key={index} className="text-black">*/}
                  {/*                      {keyItem}*/}
                  {/*                    </p>*/}
                  {/*                    {keyValue.map(*/}
                  {/*                      (nestedChild, childIndex) => (*/}
                  {/*                        <Link*/}
                  {/*                          href={nestedChild.path}*/}
                  {/*                          key={nestedChild.id}*/}
                  {/*                          className="block rounded py-2.5 text-sm text-dark hover:text-black lg:px-3"*/}
                  {/*                        >*/}
                  {/*                          {nestedChild.title}*/}
                  {/*                        </Link>*/}
                  {/*                      ),*/}
                  {/*                    )}*/}
                  {/*                  </div>*/}
                  {/*                ),*/}
                  {/*              )}*/}
                  {/*            </div>*/}
                  {/*          </div>*/}
                  {/*        </>*/}
                  {/*      )}*/}
                  {/*    </li>*/}
                  {/*  ))}*/}
                  {/*</ul>*/}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

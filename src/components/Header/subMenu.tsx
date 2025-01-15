import React from "react";
import Link from "next/link";

const SubMenu = ({ subMenu }) => {
  return (
    <div className="absolute top-0 -left-2 transition group-hover:translate-y-8 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
      <div className="relative top-6 p-6 bg-gray-700 rounded-xl shadow-xl w-full">
        <div className="w-10 h-10 bg-gray-700 transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
        <div className="relative z-10">
          <ul className="text-[15px]">
            {subMenu.map((menuItem, index) => (
              <li
                key={`sub-menu-item-${index}`}
                className="py-2 text-[#f7f9fa] font-light"
              >
                <Link href={menuItem.path} className="hover:text-[#b5b4ff]">
                  {menuItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubMenu;

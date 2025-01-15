import React from "react";
import MegaMenu from "@/components/Header/megaMenu";
import SubMenu from "@/components/Header/subMenu";
import menuData from "@/components/Header/menuData";
import Link from "next/link";

const NavMenu = ({ submenu }) => {
  return (
    <ul className="flex items-center justify-center font-semibold lg:flex lg:space-x-14 text-white">
      {menuData.map((menuItem, index) => (
        <li
          key={`nav-item-${index}`}
          className="relative group cursor-pointer hover:text-[#b5b4ff] hover:underline"
        >
          {menuItem.path ? (
            <Link href={menuItem.path} className={`flex text-base p-4`}>
              {menuItem.title}
            </Link>
          ) : (
            <button className="hover:opacity-50 p-4">{menuItem.title}</button>
          )}
          {menuItem.submenu && <SubMenu subMenu={menuItem.submenu} />}
          {menuItem.nestedSubMenu && (
            <MegaMenu megaMenuTitle={menuItem.title} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;

"use client";
import Link from "next/link";
import Image from "next/image";
import LanguageIcon from "@mui/icons-material/Language";
import { menuItems } from "@/constants/menus";
import { useState } from "react";

const Header = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<null | number>(null);

  return (
    <header className="bg-gray-100 p-6 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 items-center space-x-2">
          <Link href="/">
            <Image src="/vercel.svg" alt="Logo" width={50} height={50} />
          </Link>
        </div>
        <nav className="flex space-x-12">
          {menuItems.map((menuItem, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveMenuItem(index)}
              onMouseLeave={() => setActiveMenuItem(null)}
            >
              <div
                className={`text-gray-700 hover:text-blue-600 hover:underline cursor-pointer ${
                  activeMenuItem === index && "text-blue-600"
                }`}
              >
                <Link href={menuItem.href}>
                  <span>{menuItem.name}</span>
                </Link>
              </div>

              <div
                className={`absolute top-full left-0 bg-white ${
                  activeMenuItem === index
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
                onMouseEnter={() => setActiveMenuItem(index)}
                onMouseLeave={() => setActiveMenuItem(null)}
              >
                {menuItem.dropdownItems.map((dropdownItem, idx) => (
                  <div key={idx}>
                    <Link
                      href={dropdownItem.href}
                      className="block px-4 py-2 text-gray-700 hover:text-gray-900 whitespace-nowrap"
                    >
                      {dropdownItem.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="flex-1 flex justify-end space-x-2">
          <LanguageIcon
            className="text-gray-700 hover:text-gray-900"
            cursor="pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

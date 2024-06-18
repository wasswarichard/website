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
        <nav className="flex space-x-8">
          {menuItems.map((menuItem, index) => (
            <div key={index} className="relative group">
              <Link
                href={menuItem.href}
                className="text-gray-700 hover:text-blue-600 hover:underline"
              >
                {menuItem.name}
              </Link>
              <div className="hidden group-hover:block absolute top-full right-0 left-0 bg-white mt-5 w-full">
                <div className="w-full">
                  {menuItem.dropdownItems.map((dropdownItem, idx) => (
                    <Link
                      key={idx}
                      href={dropdownItem.href}
                      className={`text-gray-700 hover:text-gray-900 mx-2 relative ${idx !== 0 ? "mt-2" : ""}`}
                    >
                      {dropdownItem.name}
                      {idx !== 0 && (
                        <span className="absolute left-0 top-0 h-full border-l border-gray-200"></span>
                      )}
                    </Link>
                  ))}
                </div>
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

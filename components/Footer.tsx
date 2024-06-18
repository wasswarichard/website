import Link from "next/link";
import { menuItems } from "@/constants/menus";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 p-2 mt-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-around">
          {menuItems.map((menuItem, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-lg font-normal">{menuItem.name}</h2>
              <ul className="mt-4">
                {menuItem.dropdownItems.map((dropdownItem, idx) => (
                  <li key={idx} className="mt-2">
                    <Link
                      href={dropdownItem.href}
                      className="text-gray-700 hover:text-gray-900 font-thin"
                    >
                      {dropdownItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-gray-700 mt-4">
          © 2024 Hugamara. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

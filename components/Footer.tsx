import Link from "next/link";

export const Footer = () => {
  const menuItems = [
    {
      name: "Home",
      href: "/",
      dropdownItems: [
        { name: "Home Option 1", href: "/home-option1" },
        { name: "Home Option 2", href: "/home-option2" },
      ],
    },
    {
      name: "About",
      href: "/about",
      dropdownItems: [
        { name: "About Option 1", href: "/about-option1" },
        { name: "About Option 2", href: "/about-option2" },
      ],
    },
    {
      name: "Services",
      href: "/services",
      dropdownItems: [
        { name: "Service Option 1", href: "/service-option1" },
        { name: "Service Option 2", href: "/service-option2" },
      ],
    },
    {
      name: "Contact",
      href: "/contact",
      dropdownItems: [
        { name: "Contact Option 1", href: "/contact-option1" },
        { name: "Contact Option 2", href: "/contact-option2" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 p-4 mt-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-around">
          {menuItems.map((menuItem, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-lg font-bold">{menuItem.name}</h2>
              <ul className="mt-2">
                {menuItem.dropdownItems.map((dropdownItem, idx) => (
                  <li key={idx}>
                    <Link
                      href={dropdownItem.href}
                      className="text-gray-700 hover:text-gray-900"
                    >
                      {dropdownItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-gray-700 mt-8">
          © 2024 My Next.js App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

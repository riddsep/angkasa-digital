import { Menu } from "lucide-react";
import { useState } from "react";

const navlist = [
  {
    id: 1,
    title: "Beranda",
    href: "#",
  },
  {
    id: 2,
    title: "Layanan",
    href: "#",
  },
  {
    id: 3,
    title: "Portofolio",
    href: "#",
  },
  {
    id: 4,
    title: "Kontak",
    href: "#",
  },
  {
    title: "Konsultasi gratis",
    id: 5,
    href: "#",
  },
];
const Navbar = ({ isSticky }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`shadow text-black lg:text-white ${
        isSticky ? "lg:fixed top-0 left-0 right-0 bg-white z-20" : ""
      }`}
    >
      <nav className="w-full lg:w-[90%] mx-auto flex items-center justify-between py-6 px-5 overflow-hidden">
        <div>
          <img src="/logo.svg" alt="Angkasa Digital" className="lg:w-40" />
        </div>

        <ul
          className={`absolute right-5 top-14 w-full z-10 bg-white max-w-72 px-5 py-8 lg:py-0 rounded shadow-xl transition-transform lg:flex lg:translate-x-0 lg:static lg:bg-transparent lg:max-w-full lg:shadow-none 
          ${isOpen ? "translate-x-0" : "-translate-x-[1000px]"}`}
        >
          {navlist.map((list) => (
            <NavItem key={list.id} href={list.href} isSticky={isSticky}>
              {list.title}
            </NavItem>
          ))}
        </ul>

        <Menu
          color="#F27121"
          size={35}
          className="lg:hidden cursor-pointer"
          onClick={() => setIsOpen((is) => !is)}
        />
      </nav>
    </div>
  );
};

const NavItem = ({ children, href, isSticky }) => {
  return (
    <li
      className={`px-4 py-2 hover:text-[#F27121] mb-1 transition-all rounded-2xl   ${
        children === "Konsultasi gratis"
          ? "bg-[#F27121] text-white hover:text-white hover:bg-[#D85E12] px-4 py-2 rounded-2xl"
          : ""
      } ${children === "Beranda" ? "ml-auto" : ""} ${
        children === "Kontak" ? "mr-auto" : ""
      } ${isSticky ? "lg:text-black" : ""}`}
    >
      <a href={href}>{children}</a>
    </li>
  );
};

export default Navbar;

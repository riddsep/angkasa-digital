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
const Navbar = ({ isSticky, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`text-black shadow lg:text-white ${
        isSticky ? "fixed left-0 right-0 top-0 z-20 bg-white" : ""
      }`}
    >
      <nav className="mx-auto flex w-full items-center justify-between overflow-hidden px-5 py-6 lg:w-[90%]">
        <div>
          <img src="/logo.svg" alt="Angkasa Digital" className="lg:w-40" />
        </div>

        <ul
          className={`absolute right-5 top-14 z-10 w-full max-w-72 rounded bg-white px-5 py-8 shadow-xl transition-transform lg:static lg:flex lg:max-w-full lg:translate-x-0 lg:bg-transparent lg:py-0 lg:shadow-none ${isOpen ? "translate-x-0" : "-translate-x-[1000px]"}`}
        >
          {navlist.map((list) => (
            <NavItem
              key={list.id}
              href={list.href}
              isSticky={isSticky}
              scrollToSection={scrollToSection}
            >
              {list.title}
            </NavItem>
          ))}
        </ul>

        <Menu
          color="#F27121"
          size={35}
          className="cursor-pointer lg:hidden"
          onClick={() => setIsOpen((is) => !is)}
        />
      </nav>
    </div>
  );
};

const NavItem = ({ children, isSticky, scrollToSection }) => {
  const scrollTo = {
    beranda: () => scrollToSection("home"),
    layanan: () => scrollToSection("service"),
    portofolio: () => scrollToSection("portfolio"),
    contact: () => scrollToSection("contact"),
  };
  return (
    <li
      className={`mb-1 rounded-2xl px-4 py-2 transition-all hover:text-[#F27121] ${
        children === "Konsultasi gratis"
          ? `rounded-2xl bg-[#F27121] px-4 py-2 text-white hover:bg-[#D85E12] hover:text-white ${
              isSticky ? "lg:text-white" : ""
            }`
          : ""
      } ${children === "Beranda" ? "ml-auto" : ""} ${
        children === "Kontak" ? "mr-auto" : ""
      } ${isSticky ? "lg:text-black" : ""}`}
    >
      <button
        onClick={
          scrollTo[children === "Kontak" ? "contact" : children.toLowerCase()]
        }
      >
        {children}
      </button>
    </li>
  );
};

export default Navbar;

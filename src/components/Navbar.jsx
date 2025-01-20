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
    title: "FAQ",
    href: "#",
  },
  {
    id: 5,
    title: "Hubungi Kami",
    href: "https://wa.me/6281298986482", // Tambahkan link WhatsApp atau lainnya
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
          className={`absolute right-5 top-14 z-10 w-full max-w-72 rounded bg-white px-5 py-8 shadow-xl transition-transform lg:static lg:flex lg:max-w-full lg:translate-x-0 lg:bg-transparent lg:py-0 lg:shadow-none ${
            isOpen ? "translate-x-0" : "-translate-x-[1000px]"
          }`}
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
          aria-label="Toggle menu"
          role="button"
        />
      </nav>
    </div>
  );
};

const NavItem = ({ children, href, isSticky, scrollToSection }) => {
  const scrollTo = {
    beranda: () => scrollToSection("home"),
    layanan: () => scrollToSection("service"),
    portofolio: () => scrollToSection("portfolio"),
    faq: () => scrollToSection("faq"),
  };

  return (
    <li
      className={`mb-1 rounded-2xl px-4 py-2 transition-all hover:text-[#F27121] ${
        children === "Hubungi Kami"
          ? `rounded-2xl bg-[#F27121] px-4 py-2 text-white hover:bg-[#D85E12] hover:text-white ${
              isSticky ? "lg:text-white" : ""
            }`
          : ""
      } ${children === "Beranda" ? "ml-auto" : ""} ${
        children === "FAQ" ? "mr-auto" : ""
      } ${isSticky ? "lg:text-black" : ""}`}
    >
      {children === "Hubungi Kami" ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <img src="/wa.svg" alt="WhatsApp Icon" className="h-5 w-5" />
          {children}
        </a>
      ) : (
        <button onClick={scrollTo[children.toLowerCase()]}>{children}</button>
      )}
    </li>
  );
};

export default Navbar;

function Footer() {
  return (
    <div className="bg-[#eeeeee] py-6">
      <div className="mx-auto flex flex-col items-start justify-between gap-5 px-5 md:flex-row lg:w-[90%]">
        <div className="flex flex-col gap-5">
          <img src="logo.svg" alt="" className="w-32" />
          <p>&copy;Angkasa Digital 2024. All Right reserved</p>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">Beranda</a>
            </li>
            <li>
              <a href="#">Layanan</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Kontak</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
          <img src="instagram.svg" alt="" className="w-7 cursor-pointer" />
          <img src="map-pin.svg" alt="" className="w-7 cursor-pointer" />
          <img src="mail.svg" alt="" className="w-7 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Footer;

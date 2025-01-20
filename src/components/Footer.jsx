function Footer() {
  return (
    <div className="bg-[#eeeeee] py-6">
      <div className="mx-auto flex flex-col items-start justify-between gap-5 px-5 md:flex-row lg:w-[90%]">
        <div className="flex flex-col gap-5">
          <img src="logo.svg" alt="" className="w-32" />
          <p>&copy;Angkasa Digital 2024. All Right reserved</p>
        </div>

        <div className="flex gap-2">
          <img src="instagram.svg" alt="" className="w-7 cursor-pointer" />
          <img src="map-pin.svg" alt="" className="w-7 cursor-pointer" />
          <a
            href="mailto:pt.ictnusantara@gmail.com?subject=Halo Angkasa Digital&body=Saya tertarik untuk berkonsultasi."
            className="hover:underline"
          >
            <img src="mail.svg" alt="" className="w-7 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

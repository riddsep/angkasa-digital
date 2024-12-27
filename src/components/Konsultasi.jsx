import Button from "./Button";

function Konsultasi() {
  return (
    <div className="px-5 lg:w-[90%] mx-auto my-16 lg:my-[120px]">
      <h1 className="text-clamp-3 mb-10 font-semibold">
        Konsultasikan bisnis kamu sekarang
      </h1>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-10">
          <p>
            Kami siap membantu Anda menciptakan website atau aplikasi yang
            sesuai dengan kebutuhan bisnis Anda. Jangan ragu untuk menghubungi
            kami!
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 bg-[#eeeeee] w-80 rounded-xl py-2 px-5 text-[#F27121]">
              <img src="/mail.svg" alt="" />
              abcdefg@gmail.com
            </div>
            <div className="flex items-center gap-2 bg-[#eeeeee] w-80 rounded-xl py-2 px-5 text-[#F27121]">
              <img src="/instagram.svg" alt="" /> @angkasadigital
            </div>
            <div className="flex items-center gap-2 bg-[#eeeeee] w-80 rounded-xl py-2 px-5 text-[#F27121]">
              <img src="/map-pin.svg" alt="" /> Jl. Km 16 Dago, Kota Bandung
            </div>
          </div>
        </div>
        <div>
          <form action="">
            <label htmlFor="nama">Nama</label>
            <input
              id="nama"
              type="text"
              placeholder="Tulis nama anda"
              className="block w-full p-2 rounded-lg border mb-4"
            />
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="text"
                  placeholder="abcdefg@gmail.com"
                  className="block w-full p-2 rounded-lg border "
                />
              </div>
              <div>
                <label htmlFor="notel">No Telepon</label>
                <input
                  id="notel"
                  type="text"
                  placeholder="085687652345"
                  className="block w-full p-2 rounded-lg border "
                />
              </div>
              <div>
                <label htmlFor="lokasi">Lokasi</label>
                <input
                  id="lokasi"
                  type="text"
                  placeholder="Jakarta"
                  className="block w-full p-2 rounded-lg border "
                />
              </div>
              <div>
                <label htmlFor="budget">Estimasi Budget</label>
                <select
                  name="budget"
                  id="budget"
                  className="block w-full p-2 rounded-lg border "
                >
                  <option value="1">Rp. 1.000.000 - Rp. 2.000.000</option>
                  <option value="2">Rp. 2.000.000 - Rp. 3.000.000</option>
                  <option value="3">Rp. 3.000.000 - Rp. 5.000.000</option>
                  <option value="4">Rp. 5.000.000++</option>
                </select>
              </div>
            </div>

            <label htmlFor="pesan">Tulis Pesan</label>
            <textarea
              name="pesan"
              id="pesan"
              placeholder="Tulis apa yang ingin kamu tanyakan ....."
              className="block w-full p-2 rounded-lg border mb-4"
              rows={5}
            ></textarea>
            <Button variant="primary" width="w-full">
              Kirim Pesan
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Konsultasi;

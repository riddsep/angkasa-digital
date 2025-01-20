import { useState } from "react";
import Button from "./Button";
import { toast, ToastContainer } from "react-toastify";
import { MyFormcarryFormURL } from "./config";

function Konsultasi({ contactRef }) {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    notel: "",
    lokasi: "",
    estimasiBudget: "1",
    pesan: "",
  });

  function handleChange(e) {
    const newData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newData);
    e.target.setCustomValidity("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const loading = toast.loading("Sending message...");

    fetch(MyFormcarryFormURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          toast.update(loading, {
            render: "Message sent successfully!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
          setFormData({
            nama: "",
            email: "",
            notel: "",
            lokasi: "",
            estimasiBudget: "1",
            pesan: "",
          });
        } else if (response.code === 422) {
          toast.update(loading, {
            render: response.title,
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        } else {
          toast.update(loading, {
            render: response.title,
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        }
      })
      .catch((error) => {
        toast.update(loading, {
          render: error.message ? error.message : error,
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      });
  }

  return (
    <div
      ref={contactRef}
      className="mx-auto my-16 overflow-hidden px-5 lg:my-[120px] lg:w-[90%]"
    >
      <h1 className="mb-10 text-clamp-3 font-semibold">
        Konsultasikan bisnis anda sekarang
      </h1>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-10">
          <p>
            Kami siap membantu Anda menciptakan website atau aplikasi yang
            sesuai dengan kebutuhan bisnis Anda. Jangan ragu untuk menghubungi
            kami!
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex w-80 items-center gap-2 rounded-xl bg-[#eeeeee] px-5 py-2 text-[#F27121]">
              <img src="/mail.svg" alt="" />
              pt.ictnusantara@gmail.com
            </div>
            <div className="flex w-80 items-center gap-2 rounded-xl bg-[#eeeeee] px-5 py-2 text-[#F27121]">
              <img src="/instagram.svg" alt="" /> @angkasadigital
            </div>
            <div className="flex w-80 items-center gap-2 rounded-xl bg-[#eeeeee] px-5 py-2 text-[#F27121]">
              <img src="/map-pin.svg" alt="" /> Jl. Km 16 Dago, Kota Bandung
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nama">Nama</label>
            <input
              id="nama"
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              onInvalid={(e) =>
                e.target.setCustomValidity("Silakan isi nama Anda!")
              }
              required
              placeholder="Monkey D Luffy"
              className="mb-4 block w-full rounded-lg border p-2"
            />
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Masukkan email yang valid!")
                  }
                  required
                  placeholder="monkeydluffy@gmail.com"
                  className="block w-full rounded-lg border p-2"
                />
              </div>
              <div>
                <label htmlFor="notel">No Telepon</label>
                <input
                  id="notel"
                  name="notel"
                  type="number"
                  value={formData.notel}
                  onChange={handleChange}
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Nomor telepon tidak boleh kosong!",
                    )
                  }
                  required
                  placeholder="085687652345"
                  className="block w-full rounded-lg border p-2"
                />
              </div>
              <div>
                <label htmlFor="lokasi">Lokasi</label>
                <input
                  id="lokasi"
                  type="text"
                  name="lokasi"
                  value={formData.lokasi}
                  onChange={handleChange}
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Lokasi wajib diisi!")
                  }
                  required
                  placeholder="Jakarta"
                  className="block w-full rounded-lg border p-2"
                />
              </div>
              <div>
                <label htmlFor="budget">Estimasi Budget</label>
                <select
                  name="estimasiBudget"
                  id="budget"
                  value={formData.estimasiBudget}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-lg border p-2"
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
              value={formData.pesan}
              onChange={handleChange}
              onInvalid={(e) =>
                e.target.setCustomValidity("Pesan tidak boleh kosong!")
              }
              required
              placeholder="Tulis apa yang ingin kamu tanyakan ....."
              className="mb-4 block w-full rounded-lg border p-2"
              rows={5}
            ></textarea>
            <Button variant="primary" width="w-full">
              Kirim Pesan
            </Button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Konsultasi;

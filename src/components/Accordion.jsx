import { useState } from "react";

const items = [
  {
    title: "Berapa lama waktu yang dibutuhkan untuk membuat website?",
    content:
      "Waktu pembuatan bergantung pada kompleksitas website. Biasanya, untuk website UMKM, prosesnya memakan waktu sekitar 2–4 minggu.",
  },
  {
    title: "Apakah biaya pembuatan website sudah termasuk hosting dan domain?",
    content:
      "Biaya pembuatan website biasanya tidak termasuk biaya hosting dan domain. Hosting dan domain merupakan dua biaya tambahan yang perlu dibayar secara terpisah.",
  },
  {
    title:
      "Apakah saya bisa melakukan perubahan di website setelah selesai dibuat?",
    content:
      "Tentu saja, kamu bisa melakukan perubahan di website setelah selesai dibuat. Setelah website selesai dibangun dan diluncurkan, kamu memiliki beberapa opsi untuk memperbarui atau mengubahnya, tergantung pada platform atau sistem yang digunakan.",
  },
  {
    title: "Apakah website yang dibuat responsif untuk perangkat mobile?",
    content:
      "Website bisa responsif di perangkat mobile jika dirancang dengan prinsip responsive web design (RWD), yang memastikan tampilan dan fungsi website tetap optimal di berbagai perangkat, termasuk ponsel, tablet, dan desktop.",
  },
  {
    title: "Apakah Anda menyediakan layanan maintenance website?",
    content:
      "Ya, kami menyediakan layanan maintenance website untuk memastikan website Anda tetap berjalan dengan lancar dan terupdate.",
  },
  {
    title: "Apakah saya bisa meminta desain custom untuk website saya?",
    content:
      "Ya, kami menyediakan layanan desain custom untuk website Anda. Kami memahami bahwa setiap bisnis dan proyek memiliki kebutuhan dan identitas yang unik, sehingga desain yang disesuaikan sangat penting untuk menciptakan pengalaman yang tepat bagi pengunjung website Anda.",
  },
];

function Accordion({ faqRef }) {
  const [selectIdx, setSelectIdx] = useState(null);

  function handleExpanded(id) {
    setSelectIdx((cur) => (cur === id ? null : id));
  }

  return (
    <div
      ref={faqRef}
      className="mx-auto my-16 grid px-5 md:grid-cols-[200px,1fr] lg:my-[120px] lg:w-[90%] lg:grid-cols-[400px,1fr]"
    >
      <h1 className="mb-10 text-clamp-3 font-semibold">FAQ</h1>
      <div>
        {items.map((item, index) => (
          <div key={index} className="mb-5 border-b pb-4">
            <div
              className="flex cursor-pointer items-center justify-between font-semibold"
              onClick={() => handleExpanded(index)}
            >
              <h2>{item.title}</h2>
              <img
                src={
                  index === selectIdx ? "chevron-up.svg" : "chevron-down.svg"
                }
                alt="dropdown icon"
              />
            </div>
            <div
              className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${
                index === selectIdx ? "mt-2 max-h-[500px]" : ""
              }`}
            >
              <p className="max-w-[700px]">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;

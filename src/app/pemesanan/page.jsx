'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';


export default function KatalogPemesanan() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [tourPackages, setTourPackages] = useState([]);

  // Fetch tour packages from API
  useEffect(() => {
    const fetchTourPackages = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/packages");
        const data = await response.json();
        setTourPackages(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching tour packages:", error);
      }
    };
    fetchTourPackages();
  }, []);

  // const dataPaket = [
  //   {
  //     title: "PAKET 1",
  //     details: ["OFFROAD GROGOL", "SPOT FOTO OPAK", "MUSEUM MINI", "BATU ALIEN", "TRACK AIR"],
  //     image: "/images/jeep-merapi.jpg",
  //     price: "Rp 400.000",
  //   },
  //   {
  //     title: "PAKET 2",
  //     details: ["OFFROAD GROGOL", "SPOT FOTO OPAK", "MUSEUM MINI", "BATU ALIEN", "THE LOST WORLD PARK (TLWP)", "TRACK AIR"],
  //     image: "/images/goa-pindul.jpg",
  //     price: "Rp 450.000",
  //   },
  //   {
  //     title: "PAKET 3",
  //     details: ["PETILASAN MBAH MARIJAN", "SPOT FOTO OPAK", "BUNGKER KALI ADEM", "TRACK TEGONG/TEBING GENDOL", "TRACK AIR"],
  //     image: "/images/kaliurang.jpg",
  //     price: "Rp 450.000",
  //   },
  //   {
  //     title: "PAKET 4",
  //     details: ["OFFROAD GROGOL", "PETILASAN MBAH MARIJAN", "SPOT FOTO OPAK", "BUNGKER KALI ADEM", "BATU ALIEN/TLWP", "TRACK AIR"],
  //     image: "/images/lava-tour.jpg",
  //     price: "Rp 500.000",
  //   },
  //   {
  //     title: "PAKET 5",
  //     details: ["PETILASAN MBAH MARIJAN", "SPOT FOTO OPAK", "BUNKER KALI ADEM", "BATU ALIEN/TLWP", "MUSEUM MINI", "TRACK AIR"],
  //     image: "/images/city-tour.jpg",
  //     price: "Rp 550.000",
  //   },
  //   {
  //     title: "PAKET SUNRISE",
  //     details: ["BUNGKER KALI ADEM", "SPOT FOTO JEEP", "BATU ALIEN/TLWP", "MUSEUM MINI", "TRACK AIR"],
  //     image: "/images/parangtritis.jpg",
  //     price: "Rp 550.000",
  //   },
  // ];

  return (
    <main className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md sticky top-0 bg-white z-50">
        <div className="flex items-center space-x-3 pl-1 md:pl-0">
          <Image
            src="/images/image.png"
            alt="Logo"
            width={70}
            height={70}
            className="block"
          />
          <span className="font-semibold text-xl text-black tracking-wide whitespace-nowrap">
            Tlogo Putri Kaliurang
            </span>
        </div>
        <div className="flex space-x-3 px-4 font-semibold gap-3 pt-2 text-sm sm:text-base">
          {[
            { step: 1, label: "Pesan" },
            { step: 2, label: "Review" },
            { step: 3, label: "Bayar" },
            { step: 4, label: "E-Tiket" },
          ].map((item, idx, arr) => (
            <div key={item.step} className="flex items-center whitespace-nowrap">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ${
                  item.step === currentStep
                    ? "bg-[#3D6CB9] text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {item.step}
              </div>
              <span className="ml-2 mr-4 font-medium text-gray-800">{item.label}</span>
              {idx !== arr.length - 1 && <span className="text-gray-400">—</span>}
            </div>
          ))}
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden px-6 py-4 bg-white shadow-md">
          {["home", "paket", "fasilitas", "artikel", "about"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-700 hover:text-[#3D6CB9] transition font-medium capitalize"
            >
              {item}
            </a>
          ))}
        </nav>
      )}


      {/* Paket Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-gray-50 min-h-screen">
        <div className="px-6 pt-4">
          <Link href="/">
          <div className="flex items-center text-black hover:underline hover:text-blue-800 transition duration-200">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Kembali ke Beranda</span>
          </div>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 text-center">
            Paket Wisata Jeep Tlogo Putri
          </h2>
          <div className="flex flex-wrap gap-7 justify-center mx-5">
  {tourPackages.length === 0 ? (
    // Loading cards placeholder
    Array.from({ length: 6 }).map((_, idx) => (
      <div
        key={idx}
        className="bg-gray-200 h-100 md:w-sm animate-pulse rounded-xl shadow-md overflow-hidden flex flex-col"
      >
        <div className="w-full h-48 sm:h-56 bg-gray-300" />
        <div className="p-6 flex flex-col flex-grow space-y-4">
          <div className="h-6 bg-gray-300 rounded w-3/4" />
          <ul className="space-y-3">
            <li className="h-4 bg-gray-300 rounded w-full" />
            <li className="h-4 bg-gray-300 rounded w-5/6" />
            <li className="h-4 bg-gray-300 rounded w-3/4" />
          </ul>
          <div className="flex items-center justify-between mt-auto pt-4">
            <div className="h-5 w-1/4 bg-gray-300 rounded" />
            <div className="h-10 w-24 bg-gray-300 rounded" />
          </div>
        </div>
      </div>
    ))
  ) : (
    // Card list setelah data muncul
    tourPackages.map((paket, idx) => (
      <div
        key={idx}
        className="bg-white h-110 md:w-sm rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
      >   
         <div className="relative w-full h-48 sm:h-56">
          <Image
            src={`/images/paket/${paket.image.toLowerCase().replace(/\s+/g, "-")}.jpg`}
            alt={paket.package_name}
            width={400}
            height={250}
            className="w-full h-56 object-cover rounded-t-xl"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow space-y-4">
          <h3 className="text-xl font-bold text-gray-800 text-left">
            {paket.package_name}
          </h3>
          <span className='text-gray-600 text-sm list-disc list-inside space-y-2 flex-grow'>
            <p className='capitalize'>{paket.destination}</p>
          </span>
          {/* <ul className="text-gray-600 text-sm list-disc list-inside space-y-2 flex-grow">
          </ul> */}
          <div className="flex items-center justify-between mt-auto pt-4">
            <span className="text-[#3d6cb9] font-semibold text-lg">
              Rp.
              {paket.price}
            </span>
            <Link
              href={`/pemesanan/form?paket=${encodeURIComponent(paket.slug)}`}
              className="bg-[#3D6CB9] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Pesan Sekarang
            </Link>
          </div>
        </div>
      </div>
    ))
  )}
</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D6CB9] text-gray-100 py-10 mt-10">
        <div className="mx-auto px-[200px] grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Deskripsi */}
          <div>
            <div className="flex items-center mb-3">
              <Image
              src="/images/image.png"
              alt="Logo"
              width={70}
              height={70}
              className="block"
              />
              <h1 className="text-xl font-bold text-white">Tlogo Putri</h1>
            </div>
            <p className="text-sm text-white">
              Wisata alam terbaik dengan pelayanan profesional dan pengalaman
              yang berkesan.
            </p>
          </div>

          {/* Kontak & Sosial Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Mari terhubung dengan kami
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:tlogoputri@gmail.com"
                  className="hover:text-white transition"
                >
                  tlogoputri@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium">Instagram:</span>{" "}
                <a href="#" className="hover:text-white transition">
                  @jeeptlogoputri_adv
                </a>
              </li>
              <li>
                <span className="font-medium">WhatsApp:</span>{" "}
                <a
                  href="https://wa.me/6285174232247"
                  className="hover:text-white transition"
                >
                  0851-7423-2247
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              {/* Instagram */}
              <a href="#" className="hover:text-pink-400 transition">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                  />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="#" className="hover:text-green-400 transition">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.72 13.06c-.27-.13-1.6-.79-1.84-.88-.24-.09-.41-.13-.58.13s-.67.88-.82 1.06c-.15.18-.3.2-.56.07-.27-.13-1.15-.42-2.2-1.35-.81-.72-1.36-1.6-1.52-1.87-.16-.27-.02-.41.12-.54.12-.12.27-.3.4-.45.13-.15.18-.27.27-.45.09-.18.05-.34-.02-.48s-.58-1.39-.8-1.9c-.21-.5-.43-.43-.58-.44-.15-.01-.33-.01-.51-.01s-.48.07-.73.34c-.25.27-.96.94-.96 2.3s.98 2.67 1.12 2.85c.13.18 1.93 3 4.68 4.2.65.28 1.16.45 1.56.58.65.2 1.24.17 1.7.1.52-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.17-1.28-.06-.11-.24-.17-.51-.3z"
                  />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="hover:text-blue-400 transition">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Alamat */}
          <div>
            <h3 className="text-white font-semibold mb-4">Alamat</h3>
            <p className="text-sm text-white leading-relaxed">
              Kaliurang Timur, RT.06/RW15,
              <br />
              Kaliurang, Hargobinangun,
              <br />
              Kec. Pakem, Yogyakarta,
              <br />
              Daerah Istimewa Yogyakarta 55582
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-black-500 px-[200px]">
          <p>
            © 2024 Tlogo Putri. All rights reserved. | Created by{" "}
            <span className="text-white font-medium">YourName</span>
          </p>
        </div>
      </footer>
    </main>
  );
}

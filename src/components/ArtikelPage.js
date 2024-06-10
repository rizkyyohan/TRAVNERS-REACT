// ArtikelPage.js
import React from "react";
import Navbar from "./Navbar";
import MainArtikel from "./MainArtikel";
import CommonArtikel from "./CommonArtikel";
import "./ArtikelPage.css"; // Import file CSS untuk halaman artikel

const ArtikelPage = () => {
  return (
    <div>
      <Navbar /> {/* Menggunakan Navbar */}
      <div className="artikel-page">
        <div className="main-artikels">
          <h1>Travners Artikel</h1>
          <MainArtikel imageSrc="img/artikelmain1.png" category="Rekomendasi" title="Mau liburan ke Jakarta? Sambangi wisata terkenalnya" />
          <MainArtikel imageSrc="img/artikelmain2.png" category="Tips" title="Tips Berwisata di Jakarta" />
        </div>

        <div className="common-artikels">
          <CommonArtikel
            imageSrc="img/artikelcommon1.png"
            title="Pesona Jakarta yang Tak Terlupakan"
            description="Jakarta, kota metropolitan yang selalu ramai dan dinamis, merupakan Ibu kota Indonesia yang menyimpan pesona unik dan tak terlupakan."
          />
          <CommonArtikel
            imageSrc="img/artikelcommon2.png"
            title="Menelusuri Jejak Sejarah"
            description="Bagi pecinta sejarah, Jakarta bagaikan surga tersendiri... Jelajahi Kota Tua, kawasan bersejarah peninggalan Belanda dengan arsitekturnya yang menawan."
          />
          <CommonArtikel imageSrc="img/artikelcommon3.png" title="Menikmati Keindahan Alam" description="Di tengah hiruk pikuk kota, Jakarta juga memiliki oase alam yang menyegarkan... Bersantai di Taman Suropati yang rindang." />
          <CommonArtikel
            imageSrc="img/artikelcommon4.png"
            title="Menjelajahi Budaya yang Beragam"
            description="Jakarta merupakan melting pot budaya dari berbagai daerah di Indonesia... Kunjungi Taman Mini Indonesia Indah untuk mengenali kekayaan budaya Nusantara."
          />
        </div>
      </div>
    </div>
  );
};

export default ArtikelPage;

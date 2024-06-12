import React, { useState } from "react";
import "./Travel.css";
import Card from "./Card";
import Data from "./Data";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Travel() {
  const [item, setItems] = useState(Data);

  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const redirectToPurchase = () => {
    window.location.href = "/pemesanan";
  };

  const filteredDestinations = Data.filter((Data) => selectedCategory === "Semua" || Data.category === selectedCategory);

  return (
    <div className="travel">
      <div className="navbar">
        <Navbar />
      </div>

      <section className="hero-travel">
        <div className="hero-travel-left">
          <h2>
            Nikmati perjalananmu
            <span className="yellow-text">menggunakan Travners</span>
          </h2>
        </div>
        <div className="hero-travel-right">
          <div className="circle-hero-travel">
            <img src="/images/img-travel.png" />
          </div>
        </div>
      </section>
      <section className="search-bar">
        <div className="search-info">
          <div class="search-item">
            <div class="search-label">Lokasi</div>
            <div class="search-value">Jakarta</div>
          </div>
          <div class="search-divider"></div>
          <div class="search-item">
            <div class="search-label">Tanggal</div>
            <div class="search-value">Sabtu, 1 Juni</div>
          </div>
          <div class="search-divider"></div>
          <div class="search-item">
            <div class="search-label">Harga</div>
            <div class="search-value">IDR 150.000</div>
          </div>
        </div>
        <a id="search-button-about" href="/pemesanan">
          Search
        </a>
      </section>
      <section className="travel-content">
        <div className="side-bar">
          <Sidebar />
        </div>
        <div className="items-container" onClick={redirectToPurchase}>
          <Card imageSrc="img/img-pantaiancol.png" title="Pantai Ancol, Jakarta Utara" location="Jakarta, Indonesia" price="RP 150.000" rating="4.4" />
          <Card imageSrc="img/img-pantaicarita.png" title="Pantai Carita, Jakarta Utara" location="Jakarta, Indonesia" price="RP 30.000" rating="4.3" />
          <Card imageSrc="img/img-museumnasional.png" title="Museum Nasional, Jakarta Pusat" location="Jakarta, Indonesia" price="RP 50.000" rating="4.6" />
          <Card imageSrc="img/img-museumsejarah.png" title="Museum Sejarah, Jakarta Pusat" location="Jakarta, Indonesia" price="RP 15.000" rating="4.6" />
          <Card imageSrc="img/img-museumBI.png" title="Museum BI, Jakarta Barat" location="Jakarta, Indonesia" price="RP 5.000" rating="4.7" />
          <Card imageSrc="img/img-pulaupari.png" title="Pulau Pari, Kepulauan Seribu" location="Jakarta, Indonesia" price="RP 350.000" rating="4.7" />
          <Card imageSrc="img/img-kotatua.png" title="Kota Tua, Jakarta Pusat" location="Jakarta, Indonesia" price="RP 0" rating="4.8" />
          <Card imageSrc="img/img-ancol.png" title="Ancol, Jakarta Utara" location="Jakarta, Indonesia" price="RP 150.000" rating="4.8" />
          <Card imageSrc="img/img-ragunan.png" title="Ragunan, Jakarta Selatan" location="Jakarta, Indonesia" price="RP 10.000" rating="4.8" />
          <Card imageSrc="img/img-skyworld.png" title="Sky World, Jakarta Timur" location="Jakarta, Indonesia" price="RP 150.000" rating="4.4" />
          <Card imageSrc="img/img-museumtransport.png" title="Museum Transport, Jakarta Timur" location="Jakarta, Indonesia" price="RP 10.000" rating="4.5" />
          <Card imageSrc="img/img-duniafantasi.png" title="Dunia Fantasi, Jakarta Utara" location="Jakarta, Indonesia" price="RP 310.000" rating="4.8" />
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-contact">
            <h2>Contact Us</h2>
            <p>Email: powerpioneers@gmail.com</p>
            <p>Hotline: 123-456-7890</p>
          </div>
          <div className="footer-social-media">
            <img src="img/LOGOPP.png" alt="" />
            <h2>Social Media</h2>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 Power Pioners. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Travel;

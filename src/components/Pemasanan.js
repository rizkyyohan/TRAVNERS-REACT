import React, { useState } from "react";
import CardDestinasi from "./CardDestinasi";
import TanggalPemesanan from "./TanggalPemesanan";
import QuantityPaket from "./QuantityPaket";
import TotalHarga from "./TotalHarga";
import Navbar from "./Navbar";
import "./Pemesanan.css";
import PopupDetail from "./PopupDetail";

const Pemesanan = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const price = 350000;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const totalPrice = quantity * price;

  const handleDetailClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container-pemesanan">
      <div className="pemesanan">
        <Navbar />
        <div className="card-kiri">
          <CardDestinasi image="./img/Gambarpemesanan.png" title="Tiket open trip Pulau Pari" onDetailClick={handleDetailClick} />
        </div>
        <div className="pemesanan-kanan">
          <TanggalPemesanan selectedDate={selectedDate} onSelectDate={setSelectedDate} />
          <QuantityPaket quantity={quantity} onIncrease={handleIncrease} onDecrease={handleDecrease} price={`RP. ${price.toLocaleString()}`} />
          <TotalHarga totalPrice={`RP. ${totalPrice.toLocaleString()}`} />
        </div>
      </div>
      {showPopup && <PopupDetail onClose={closePopup} />}
    </div>
  );
};

export default Pemesanan;

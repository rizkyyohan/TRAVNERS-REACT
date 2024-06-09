import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Pemesanan from "./components/Pemasanan";
import DetailPemesanan from "./components/DetailPemesanan";
import Pembayaran from "./components/Pembayaran";
import KonfirmasiPembayaran from "./components/KonfirmasiPembayaran";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pemesanan" element={<Pemesanan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail" element={<DetailPemesanan />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
          <Route path="/konfirmasi" element={<KonfirmasiPembayaran />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import "./Register.css";

const Register = () => {
  const redirectToLogin = () => {
    window.location.href = "/login";
  };
  return (
    <div className="container">
      <div className="login">
        <form action="#">
          <h1>Daftar Akun Anda</h1>
          <img src="img/LOGOPP.png" alt="Logo" />
          <label htmlFor="namdep">Nama Depan</label>
          <input type="text" id="namdep" name="namdep" />

          <label htmlFor="nambel">Nama Belakang</label>
          <input type="text" id="nambel" name="nambel" />

          <label htmlFor="password">Kata Sandi:</label>
          <input type="password" id="password" name="password" />

          <label htmlFor="ulangipassword">Ulangi Kata Sandi:</label>
          <input type="password" id="ulangipassword" name="ulangipassword" />

          <button type="submit" onClick={redirectToLogin}>
            Daftar
          </button>

          <p>
            <a href="/login">Sudah punya akun?</a>
          </p>
        </form>
      </div>

      <div className="right">
        <img src="img/background-loginPage.png" alt="Gambar Register" />
      </div>
    </div>
  );
};

export default Register;

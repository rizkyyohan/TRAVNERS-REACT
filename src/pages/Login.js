import React from "react";
import "../css/Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <form action="#">
          <h1>Login Akun Anda</h1>
          <img src="img/LOGOPP.png" alt="Logo" />
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />

          <label htmlFor="password">Kata Sandi:</label>
          <input type="password" id="password" name="password" />

          <a className="tombolmasuk" href="/home">
            Masuk
          </a>

          <p>
            <a href="/register">Belum punya akun?</a>
          </p>
        </form>
      </div>

      <div className="right">
        <img src="img/background-loginPage.png" alt="Gambar Login" />
      </div>
    </div>
  );
};

export default Login;

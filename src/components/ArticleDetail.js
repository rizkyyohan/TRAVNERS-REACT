import React from "react";
import { useParams } from "react-router-dom";
import articles from "../components/DataArticles";
import "./ArticleDetail.css";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  const renderContent = (articleId) => {
    switch (articleId) {
      case 1:
        return (
          <>
            <p>
              Jakarta, ibukota Indonesia, merupakan kota metropolitan yang penuh dengan gemerlap dan kesibukan. Namun, di balik hiruk pikuknya, Jakarta juga menyimpan pesona wisata yang tak kalah menarik. Bagi kamu yang ingin berlibur ke
              Jakarta, berikut beberapa wisata terkenal yang wajib kamu kunjungi:
            </p>
            <p>Wisata Bersejarah dan Budaya:</p>
            <p>Monumen Nasional (Monas): Ikon kota Jakarta yang menjulang tinggi ini menjadi simbol perjuangan bangsa Indonesia. Di puncak Monas, kamu dapat menikmati pemandangan kota Jakarta yang indah.</p>
            <p>Kota Tua: Jelajahi kawasan bersejarah peninggalan Belanda ini dengan arsitekturnya yang unik. Kunjungi Museum Fatahillah, Museum Wayang, Cafe Batavia, dan spot-spot foto instagramable lainnya.</p>
            <p>Taman Mini Indonesia Indah (TMII):Kenali kekayaan budaya Indonesia dari berbagai daerah di taman wisata budaya ini. Saksikan rumah adat, tarian tradisional, dan pertunjukan budaya lainnya</p>
            <p>Semoga informasi ini membantu kamu dalam merencanakan liburan ke Jakarta!.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </>
        );
      case 2:
        return (
          <>
            <p>Ini adalah konten panjang dari Artikel 2. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.</p>
            <p>In condimentum facilisis porta. Sed nec diam eu diam mattis viverra nulla.</p>
          </>
        );
      case 3:
        return (
          <>
            <p>Ini adalah konten panjang dari Artikel 3. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </>
        );
      case 4:
        return (
          <>
            <p>Ini adalah konten panjang dari Artikel 4. Proin ac odio tempor orci dapibus ultrices in iaculis nunc.</p>
            <p>Quis lectus nulla at volutpat diam ut venenatis tellus in metus.</p>
          </>
        );
      case 5:
        return (
          <>
            <p>Ini adalah konten panjang dari Artikel 5. Quisque non tellus orci ac auctor augue mauris augue neque.</p>
            <p>Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.</p>
          </>
        );
      case 6:
        return (
          <>
            <p>Ini adalah konten panjang dari Artikel 6. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus.</p>
            <p>Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique.</p>
          </>
        );
      default:
    }
  };

  return (
    <div className="detailsContainer">
      <h2>
        <span className="yellow-text">Travners</span> Artikel
      </h2>
      <div className="ArtikelDetails">
        <img src={article.image} alt={article.title} />
        <h1>{article.title}</h1>
        <div className="ArtikelDetails-content">{renderContent(article.id)}</div>
      </div>
    </div>
  );
};

export default ArticleDetail;

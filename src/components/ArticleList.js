import React from "react";
import { Link } from "react-router-dom";
import "./ArticleList.css";
import articles from "./DataArticles";

const ArticleList = () => {
  const rekomendasiArticles = articles.filter((article) => article.tag === "Rekomendasi" || article.tag === "Tips");
  const artikelArticles = articles.filter((article) => article.tag === "Artikel");

  const ArticleItem = ({ article }) => {
    const tagClassName = article.tag ? article.tag.toLowerCase() : "";

    return (
      <div className="article-item">
        <img src={article.image} alt={article.title} className="article-image" />
        <span className={`tag ${tagClassName}`}>{article.tag}</span>
        <Link to={`/articles/${article.id}`}>
          <h2>{article.title}</h2>
        </Link>
      </div>
    );
  };

  return (
    <div className="article-list">
      <div className="article-list-container">
        <div className="left-container">
          {rekomendasiArticles.map((article) => (
            <ArticleItem key={article.id} article={article} />
          ))}
        </div>
        <div className="right-container">
          <div className="left-article-content">
            {artikelArticles.map((article) => (
              <div key={article.id} className="article-details">
                <img src={article.image} alt={article.title} className="article-image" />
                <span className={`tag ${article.tag.toLowerCase()}`}>{article.tag}</span>
                <div className="artikel-detail-content">
                  <Link to={`/articles/${article.id}`}>
                    <h2>{article.title}</h2>
                  </Link>
                  {artikelArticles.includes(article) && <p>{article.excerpt}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;

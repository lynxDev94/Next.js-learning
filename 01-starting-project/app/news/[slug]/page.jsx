import React from "react";
import { DUMMY_NEWS } from "../../../dummy-news.js";

function NewsDetailPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);
  console.log(newsItem);
  return (
    <article className="news-article">
      <header>
        <img src={`images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}

export default NewsDetailPage;

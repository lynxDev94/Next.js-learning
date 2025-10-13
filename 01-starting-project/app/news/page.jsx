import React from "react";
// import { DUMMY_NEWS } from "../../dummy-news.js";
import NewsList from "../components/news-list.jsx";
import { getAllNews } from "../lib/news.js";

async function NewsPage() {

  const news = await getAllNews();
  return (
    <nav>
      <h1>News</h1>
      <NewsList news={news} />
    </nav>
  );
}

export default NewsPage;

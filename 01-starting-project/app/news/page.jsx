import React from "react";
// import { DUMMY_NEWS } from "../../dummy-news.js";
import NewsList from "../components/news-list.jsx";

async function NewsPage() {
  const response = await fetch("http://localhost:8080/news");
  

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }
  const data = await response.json();

  return (
    <nav>
      <h1>News</h1>
      <NewsList news={data} />
    </nav>
  );
}

export default NewsPage;

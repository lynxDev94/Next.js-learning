"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { DUMMY_NEWS } from "../../dummy-news.js";
import NewsList from "../components/news-list.jsx";
import { useState, useEffect } from "react";

function NewsPage() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState();

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("Failed to fetch news");
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      console.log(data);
      setIsLoading(false);
      setNews(data);
    }
    fetchNews();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <nav>
      <h1>News</h1>
      {newsContent}
    </nav>
  );
}

export default NewsPage;

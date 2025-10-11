import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DUMMY_NEWS } from "../../dummy-news.js";
import NewsList from "../components/news-list.jsx";

function NewsPage() {
  return (
    <nav>
      <h1>News</h1>
    <NewsList news={DUMMY_NEWS} />
    </nav>
  );
}

export default NewsPage;

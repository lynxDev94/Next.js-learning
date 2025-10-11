import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DUMMY_NEWS } from "../../dummy-news.js";

function NewsPage() {
  return (
    <nav>
      <h1>News</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
               <img src={`/images/news/${news.image}`} alt={news.title} />
              <span>{news.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NewsPage;

"use client";

import React from "react";
import { DUMMY_NEWS } from "../../../../../dummy-news.js";
import { notFound, useRouter } from "next/navigation";

function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemSlug);
  const router = useRouter();

  if (!newsItem) {
    notFound();
  }

  return (
    <>
    <div className="modal-backdrop" onClick={router.back}/>
    <dialog className="modal" open>
      <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </div>
      </dialog>
    </>
  );
}

export default InterceptedImagePage;

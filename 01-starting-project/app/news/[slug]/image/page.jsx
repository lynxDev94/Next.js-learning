import React from 'react'
import { DUMMY_NEWS } from '../../../../dummy-news.js';
import { notFound } from 'next/navigation';

function ImagePage({params}) {
    const newsItemSlug = params.slug;
    const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemSlug);

    if(!newsItem) {
        notFound();
    }

  return (
    <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  )
}

export default ImagePage
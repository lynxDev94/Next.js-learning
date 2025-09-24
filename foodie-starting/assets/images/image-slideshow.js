"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

import IMAGE_PATHS from './image-paths';
import classes from './image-slideshow.module.css';

const images = [
  { image: IMAGE_PATHS.burger, alt: 'A delicious, juicy burger' },
  { image: IMAGE_PATHS.curry, alt: 'A delicious, spicy curry' },
  { image: IMAGE_PATHS.dumplings, alt: 'Steamed dumplings' },
  { image: IMAGE_PATHS.macncheese, alt: 'Mac and cheese' },
  { image: IMAGE_PATHS.pizza, alt: 'A delicious pizza' },
  { image: IMAGE_PATHS.schnitzel, alt: 'A delicious schnitzel' },
  { image: IMAGE_PATHS.tomatoSalad, alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
          width={500}
          height={300}
        />
      ))}
    </div>
  );
}
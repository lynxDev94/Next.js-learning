"use client";

import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

function ImagePicker({ label, name }) {
  const [pickImage, setPickImage] = useState(null);
  const ref = useRef();
  const handlePickClicker = () => {
    ref.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickImage && <p>No image selected yet</p>}
          {pickImage && <Image src={pickImage} alt="the image" fill/>}
        </div>
        <input
          ref={ref}
          className={classes.input}
          required
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClicker}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;

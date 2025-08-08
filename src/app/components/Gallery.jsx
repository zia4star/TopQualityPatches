"use client";

import Image from "next/image";
import db from "@/app/db/gallery.json";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [imgPop, setImgPop] = useState(false);

  const swipeImg = (moveType) => {
    if (moveType === "prv") {
      setSelectedImg((prev) => (prev === 0 ? db.gallery.length - 1 : prev - 1));
    } else if (moveType === "nxt") {
      setSelectedImg((prev) => (prev === db.gallery.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="gallery py-3">
    <div className=" container items-center text-center text-primary">
    <h2>Patches Gallery Styles</h2>
    <p>We design patches in a wide variety, along with a few other fashionable and customizable items. Such things consist of:</p>
    </div>
      <div className=" container d-flex flex-wrap align-items-center justify-content-center">
        {db.gallery.map((loc, i) => (
          <a
            onClick={() => {
              setSelectedImg(i);
              setImgPop(true);
            }}
            key={i}
            className="gallery-item"
          >
            <Image
              src={`/gallery/${loc.img}`}
              alt={loc.location}
              width={200}
              height={200}
              className="gallery-img"
            />
          </a>
        ))}
      </div>

      {/* {imgPop && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-85 z-50 flex justify-between items-center gap-3">
          <a
            onClick={() => setImgPop(false)}
            className="absolute top-[7rem] bg-white right-2 cursor-pointer"
          >
            <RxCrossCircled className="bg-black text-3xl hover:text-red-700"/>
          </a>

          <a
            onClick={() => swipeImg("prv")}
            className="bg-green rounded-full ml-2 hover:translate-x-2 transition-all ease-linear cursor-pointer"
          >
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 md:w-16 md:h-16 fill-white"
            >
              <path
                clipRule="evenodd"
                d="M15.0303 6.46967C15.3232 6.76256 15.3232 7.23744 15.0303 7.53033L10.5607 12L15.0303 16.4697C15.3232 16.7626 15.3232 17.2374 15.0303 17.5303C14.7374 17.8232 14.2626 17.8232 13.9697 17.5303L8.96967 12.5303C8.82902 12.3897 8.75 12.1989 8.75 12C8.75 11.8011 8.82902 11.6103 8.96967 11.4697L13.9697 6.46967C14.2626 6.17678 14.7374 6.17678 15.0303 6.46967Z"
                fillRule="evenodd"
              />
            </svg>
          </a>

          <div>
            <Image
              src={`/gallery/${db.gallery[selectedImg].img}`}
              alt={db.gallery[selectedImg].location}
              width={650}
              height={500}
              className="w-full max-w-[650px] h-auto"
            />
            <h3 className="text-center text-white font-bold uppercase text-3xl mt-3">
              {db.gallery[selectedImg].location}
            </h3>
          </div>

          <a
            onClick={() => swipeImg("nxt")}
            className="bg-green rounded-full mr-2 hover:-translate-x-2 transition-all ease-linear cursor-pointer"
          >
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 md:w-16 md:h-16 fill-white"
            >
              <path
                clipRule="evenodd"
                d="M8.96967 17.5303C8.67678 17.2374 8.67678 16.7626 8.96967 16.4697L13.4393 12L8.96967 7.53033C8.67678 7.23744 8.67678 6.76256 8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967L15.0303 11.4697C15.171 11.6103 15.25 11.8011 15.25 12C15.25 12.1989 15.171 12.3897 15.0303 12.5303L10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303Z"
                fillRule="evenodd"
              />
            </svg>
          </a>

          <nav className="absolute hidden left-0 right-0 bottom-5 lg:flex justify-center gap-3 px-4">
            {db.gallery.map((loc, i) => (
              <a
                onClick={() => setSelectedImg(i)}
                className={`hover:-translate-y-2 transition-all ease-linear cursor-pointer ${
                  selectedImg === i ? "-translate-y-2" : ""
                }`}
                key={i}
              >
                <Image
                  src={`/gallery/${loc.img}`}
                  alt={loc.location}
                  width={80}
                  height={80}
                />
              </a>
            ))}
          </nav>
        </div>
      )} */}
      {imgPop && (
        <div className="img-popup-overlay">
          <a onClick={() => setImgPop(false)} className="img-popup-close-btn">
            <RxCrossCircled className="close-icon" />
          </a>

          <a onClick={() => swipeImg("prv")} className="img-popup-nav img-popup-nav-left">
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="nav-arrow-icon"
            >
              <path
                clipRule="evenodd"
                d="M15.0303 6.46967C15.3232 6.76256 15.3232 7.23744 15.0303 7.53033L10.5607 12L15.0303 16.4697C15.3232 16.7626 15.3232 17.2374 15.0303 17.5303C14.7374 17.8232 14.2626 17.8232 13.9697 17.5303L8.96967 12.5303C8.82902 12.3897 8.75 12.1989 8.75 12C8.75 11.8011 8.82902 11.6103 8.96967 11.4697L13.9697 6.46967C14.2626 6.17678 14.7374 6.17678 15.0303 6.46967Z"
                fillRule="evenodd"
              />
            </svg>
          </a>

          <div className="text-center">
            <Image
              src={`/gallery/${db.gallery[selectedImg].img}`}
              alt={db.gallery[selectedImg].location}
              width={650}
              height={500}
              className="img-fluid"
            />
            <h3 className="img-popup-title">
              {db.gallery[selectedImg].location}
            </h3>
          </div>

          <a onClick={() => swipeImg("nxt")} className="img-popup-nav img-popup-nav-right">
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="nav-arrow-icon"
            >
              <path
                clipRule="evenodd"
                d="M8.96967 17.5303C8.67678 17.2374 8.67678 16.7626 8.96967 16.4697L13.4393 12L8.96967 7.53033C8.67678 7.23744 8.67678 6.76256 8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967L15.0303 11.4697C15.171 11.6103 15.25 11.8011 15.25 12C15.25 12.1989 15.171 12.3897 15.0303 12.5303L10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303Z"
                fillRule="evenodd"
              />
            </svg>
          </a>

          <nav className="img-popup-nav-thumbs d-none d-lg-flex">
            {db.gallery.map((loc, i) => (
              <a
                onClick={() => setSelectedImg(i)}
                className={`img-popup-thumb ${selectedImg === i ? 'active' : ''}`}
                key={i}
              >
                <Image
                  src={`/gallery/${loc.img}`}
                  alt={loc.location}
                  width={80}
                  height={80}
                />
              </a>
            ))}
          </nav>
        </div>
      )}

    </div>
  );
};

export default Gallery;

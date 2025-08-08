"use client";
import db from "@/app/db/gallery.json";
import { RxCrossCircled } from "react-icons/rx";
import Image from "next/image";
import { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";

export default function TabsGallery() {
  return (
    <Container fluid className="gallery_tabs py-4">
      <Tabs defaultActiveKey="digitizing" id="custom-tabs" className=" border-0 mb-3">
        <Tab eventKey="digitizing" title="Digitizing">
          <GalleryTabContent gallery={db.digiGallery} />
        </Tab>
        <Tab eventKey="vector" title="Vector">
          <GalleryTabContent gallery={db.vectorGallery} />
        </Tab>
        <Tab eventKey="patches" title="Patches">
          <GalleryTabContent gallery={db.patchesGallery} />
        </Tab>
      </Tabs>
    </Container>
  );
}

// Reusable component for each gallery tab
function GalleryTabContent({ gallery }) {
  const [selectedImg, setSelectedImg] = useState(0);
  const [imgPop, setImgPop] = useState(false);

  const swipeImg = (direction) => {
    if (direction === "prv") {
      setSelectedImg((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
    } else {
      setSelectedImg((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <>
      <div className="container d-flex flex-wrap align-items-center justify-content-center">
        {gallery?.map((loc, i) => (
          <a
            onClick={() => {
              setSelectedImg(i);
              setImgPop(true);
            }}
            key={i}
            className="gallery-item"
          >
            <Image
              src={`/portfolio/${loc.img}`}
              alt={loc.location}
              width={200}
              height={200}
              className="gallery-img"
            />
          </a>
        ))}
      </div>

      {imgPop && (
        <div className="img-popup-overlay">
          <a onClick={() => setImgPop(false)} className="img-popup-close-btn">
            <RxCrossCircled className="close-icon" />
          </a>

          <a onClick={() => swipeImg("prv")} className="img-popup-nav img-popup-nav-left">
            <svg fill="none" height="24" width="24" viewBox="0 0 24 24" className="nav-arrow-icon">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.03 6.47a.75.75 0 0 1 0 1.06L10.56 12l4.47 4.47a.75.75 0 0 1-1.06 1.06L8.97 12.53a.75.75 0 0 1 0-1.06l4.47-4.47a.75.75 0 0 1 1.06 0Z"
              />
            </svg>
          </a>

          <div className="text-center">
            <Image
              src={`/portfolio/${gallery[selectedImg].img}`}
              alt={gallery[selectedImg].location}
              width={650}
              height={500}
              className="img-fluid"
            />
            <h3 className="img-popup-title">{gallery[selectedImg].location}</h3>
          </div>

          <a onClick={() => swipeImg("nxt")} className="img-popup-nav img-popup-nav-right">
            <svg fill="none" height="24" width="24" viewBox="0 0 24 24" className="nav-arrow-icon">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.97 17.53a.75.75 0 0 1 0-1.06L13.44 12 8.97 7.53a.75.75 0 0 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0Z"
              />
            </svg>
          </a>

          <nav className="img-popup-nav-thumbs d-none d-lg-flex">
            {gallery.map((loc, i) => (
              <a
                onClick={() => setSelectedImg(i)}
                className={`img-popup-thumb ${selectedImg === i ? "active" : ""}`}
                key={i}
              >
                <Image src={`/portfolio/${loc.img}`} alt={loc.location} width={80} height={80} />
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

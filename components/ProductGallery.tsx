"use client";

import { useState } from "react";
import Image from "next/image";

type ProductGalleryProps = {
  images: string[];
  name: string;
};

export default function ProductGallery({
  images,
  name,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "520px",
          borderRadius: "16px",
          overflow: "hidden",
          background: "#181818",
        }}
      >
        <Image
          src={selectedImage}
          alt={name}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {images.map((image) => (
          <button
            key={image}
            onClick={() => setSelectedImage(image)}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "90px",
                height: "90px",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <Image
                src={image}
                alt={name}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </button>
        ))}
      </div>

    </div>
  );
}

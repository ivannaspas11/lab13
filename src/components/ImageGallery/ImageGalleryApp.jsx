import { useState } from "react";
import GalleryControls from "./GalleryControls";

const IMAGES = [
  "https://picsum.photos/id/1039/400/300",
  "https://picsum.photos/id/1043/400/300",
  "https://picsum.photos/id/1044/400/300",
];

export default function ImageGalleryApp() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => setCurrentIndex((prev) => prev - 1);
  const goNext = () => setCurrentIndex((prev) => prev + 1);

  return (
    <div className="task-card">
      <h2>5. Галерея зображень</h2>
      <div>
        <img
          src={IMAGES[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          style={{
            width: "400px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>
      <GalleryControls
        onPrev={goPrev}
        onNext={goNext}
        isPrevDisabled={currentIndex === 0}
        isNextDisabled={currentIndex === IMAGES.length - 1}
      />
      <p>
        Фото {currentIndex + 1} з {IMAGES.length}
      </p>
    </div>
  );
}

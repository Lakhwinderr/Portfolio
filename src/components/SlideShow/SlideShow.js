import React, { useEffect, useState } from "react";
import "./SlideShow.css";

export default function SlideShow({ item, onClose }) {
  const images =
    item && item.array && item.array.length > 0
      ? item.array
      : item && item.img
        ? [item.img]
        : [];
  const [current, setCurrent] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const hasGallery = images.length > 1;

  useEffect(() => {
    setCurrent(0);
    setZoomed(false);
  }, [item]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = zoomed ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [zoomed]);

  const showPrevious = () => {
    setCurrent((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const showNext = () => {
    setCurrent((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        if (zoomed) {
          setZoomed(false);
          return;
        }
        onClose();
        return;
      }
      if (!hasGallery) {
        return;
      }
      if (event.key === "ArrowLeft") {
        showPrevious();
      }
      if (event.key === "ArrowRight") {
        showNext();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [hasGallery, onClose, zoomed]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className={zoomed ? "projectViewer isZoomed" : "projectViewer"}>
      {zoomed ? (
        <button
          type="button"
          className="projectViewerExitZoom"
          onClick={() => setZoomed(false)}
        >
          Exit zoom
        </button>
      ) : null}
      <button
        type="button"
        className="projectViewerClose"
        aria-label="Close project"
        onClick={onClose}
      >
        <span aria-hidden="true" />
      </button>
      <div className="projectViewerStage">
        <div className="projectViewerFrame">
          <img
            src={images[current]}
            alt={item.title ? `${item.title} design` : ""}
          />
          {zoomed ? null : (
            <button
              type="button"
              className="projectViewerZoom"
              onClick={() => setZoomed(true)}
            >
              Click to zoom
            </button>
          )}
        </div>
        {hasGallery ? (
          <>
            <button
              type="button"
              className="projectViewerNav projectViewerNavPrev"
              aria-label="Previous image"
              onClick={showPrevious}
            />
            <button
              type="button"
              className="projectViewerNav projectViewerNavNext"
              aria-label="Next image"
              onClick={showNext}
            />
            <button
              type="button"
              className="projectViewerArrow projectViewerArrowPrev"
              aria-label="Previous image"
              onClick={showPrevious}
            />
            <button
              type="button"
              className="projectViewerArrow projectViewerArrowNext"
              aria-label="Next image"
              onClick={showNext}
            />
            <div className="projectViewerDots" aria-hidden="true">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={
                    index === current
                      ? "projectViewerDot isActive"
                      : "projectViewerDot"
                  }
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

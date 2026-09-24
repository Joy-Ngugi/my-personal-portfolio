import { useEffect, useState, useCallback } from "react";
import "../styles/styles.css";

const Lightbox = ({ project, onClose }) => {
  const [index, setIndex] = useState(0);
  const images = project?.images ?? [];

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard nav + Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [next, prev, onClose]);

  if (!project) return null;

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close gallery"
      >
        ✕
      </button>

      {images.length > 1 && (
        <>
          <button
            className="lightbox-nav prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            className="lightbox-nav next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >
            ›
          </button>
        </>
      )}

      <figure
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`${project.title} — view ${index + 1}`}
          className="lightbox-image"
        />
        <figcaption className="lightbox-caption">
          <span className="lightbox-title">{project.title}</span>
          <span className="lightbox-counter">
            {index + 1} / {images.length}
          </span>
        </figcaption>
      </figure>

      {images.length > 1 && (
        <div className="lightbox-thumbs" onClick={(e) => e.stopPropagation()}>
          {images.map((img, i) => (
            <button
              key={i}
              className={`lightbox-thumb ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`View image ${i + 1}`}
            >
              <img src={img} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Lightbox;
import React, { useState } from "react";
import "./Card.css";
import gitHub from "../../assets/2.svg";

function githubUrlFromPages(link) {
  if (!link) {
    return null;
  }
  const match = link.match(
    /^https:\/\/lakhwinderr\.github\.io\/([^/]+)\/?$/i
  );
  if (!match) {
    return null;
  }
  return `https://github.com/Lakhwinderr/${match[1]}`;
}

export default function Card({ item, onViewProject }) {
  const images =
    item.cardArray && item.cardArray.length > 0
      ? item.cardArray
      : item.array && item.array.length > 0
        ? item.array
        : [item.img];
  const [current, setCurrent] = useState(0);
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const githubUrl = githubUrlFromPages(item.link);
  const hasGallery = images.length > 1;
  const hasLiveLink = Boolean(item.link);
  const descriptionId = `${item.title.replace(/\s+/g, "-").toLowerCase()}-description`;

  const showPrevious = (event) => {
    event.stopPropagation();
    setCurrent((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const showNext = (event) => {
    event.stopPropagation();
    setCurrent((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  const openViewer = () => {
    if (onViewProject) {
      onViewProject(item);
    }
  };

  return (
    <article className="projectCard">
      <div className="projectCardMedia">
        <img
          src={images[current]}
          alt=""
          loading="lazy"
          decoding="async"
        />
        {hasGallery ? (
          <>
            <button
              type="button"
              className="projectCardNav projectCardNavPrev"
              aria-label={`Previous ${item.title} image`}
              onClick={showPrevious}
            />
            <button
              type="button"
              className="projectCardNav projectCardNavNext"
              aria-label={`Next ${item.title} image`}
              onClick={showNext}
            />
            <div className="projectCardDots" aria-hidden="true">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={
                    index === current
                      ? "projectCardDot isActive"
                      : "projectCardDot"
                  }
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className="projectCardBody">
        {item.category ? (
          <p className="projectCardCategory">{item.category}</p>
        ) : null}
        <h3 className="projectCardTitle">{item.title}</h3>
        {item.description ? (
          <>
            <p
              id={descriptionId}
              className="projectCardDescription"
              hidden={!descriptionOpen}
            >
              {item.description}
            </p>
            <button
              type="button"
              className="projectCardDescriptionToggle"
              aria-expanded={descriptionOpen}
              aria-controls={descriptionId}
              onClick={() => setDescriptionOpen((open) => !open)}
            >
              {descriptionOpen ? "Hide Description" : "View Description"}
            </button>
          </>
        ) : null}
        <div className="projectCardActions">
          {hasLiveLink ? (
            <a
              className="projectCardCta"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          ) : (
            <button
              type="button"
              className="projectCardCta"
              onClick={openViewer}
            >
              View Project →
            </button>
          )}
          {githubUrl ? (
            <a
              className="projectCardGithub"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHub} alt="" />
              <span className="visuallyHidden">
                {item.title} on GitHub
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

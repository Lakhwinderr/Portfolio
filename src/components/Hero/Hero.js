import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="heroInner">
        <h1 id="hero-heading" className="heroTitle">
          I’m Lakhwinder — a software developer, builder and maker.
        </h1>
        <p className="heroLead">
          I build practical software and technology projects, and I like turning
          ideas into things people can use.
        </p>
        <HashLink smooth to="/Portfolio/#work" className="heroCta">
          View my work
        </HashLink>
      </div>
    </section>
  );
}

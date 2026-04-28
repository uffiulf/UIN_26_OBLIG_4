import "./Lucas.css";
import { useState } from "react";

export default function Lucas() {
  return (
    <section className="lucas">
      <article className="lucas__profile">
        <header>
          <h2 className="lucas__name">Lucas Kjær</h2>
        </header>

        <p>
          Mail:{" "}
          <a href="mailto:lakjaer@hiof.no">
            lakjaer@hiof.no
          </a>
        </p>

        <p>Studie: Digitale Medier og Design</p>
      </article>

      <figure className="lucas__image">
        <img src="/UntitledArtwork.jpg" alt="Illustrasjon av Lucas" />
      </figure>

    </section>
  );
}
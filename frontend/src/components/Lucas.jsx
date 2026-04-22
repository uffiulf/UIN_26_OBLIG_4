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
        <img src="/placeholder.png" alt="Illustrasjon av Lucas" />
      </figure>

      <section className="lucas__assignments">
        <article>
          <h3>Arbeidskrav 1</h3>
          <p>Beskrivelse</p>
        </article>

        <article>
          <h3>Arbeidskrav 2</h3>
          <p>Beskrivelse</p>
        </article>

        <article>
          <h3>Arbeidskrav 3</h3>
          <p>Beskrivelse</p>
        </article>

        <article>
          <h3>Arbeidskrav 4</h3>
          <p>Beskrivelse</p>
        </article>
      </section>
    </section>
  );
}
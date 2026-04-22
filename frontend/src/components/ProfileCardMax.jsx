import { useState } from 'react'
import '../styling/CardDesignMax.css'

export default function ProfileCardMax() {

    return (
        <section className="profile-card-max" onClick={() => setClickedBoolean(!clickedBoolean)}>
            <h2>Max Oliver</h2>
            <img src="/kalle.jpeg" alt="Kalle Kanin" />
            <a href="mailto:maxos@hiof.no">maxos@hiof.no</a>

            <p>Studerer Informatikk - design og utvikling av IT-systemer</p>
            
        </section>
    )
}
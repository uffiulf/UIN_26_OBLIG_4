import { useState } from 'react'
import '../styling/CardDesignMax.css'

export default function ProfileCardMax() {
    const [clickedBoolean, setClickedBoolean] = useState(false)

    return (
        <section className="profile-card-max" onClick={() => setClickedBoolean(!clickedBoolean)}>
            <h2>Max Oliver</h2>
            <a href="mailto:maxos@hiof.no">maxos@hiof.no</a>
            {clickedBoolean && <img src="https://placehold.co/400x600/png" alt="Placeholder" />}
            
            <p>Studerer Informatikk - design og utvikling av IT-systemer</p>
        </section>
    )
}
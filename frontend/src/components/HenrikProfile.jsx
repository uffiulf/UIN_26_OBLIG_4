import "../styling/henrik-profile-design.css"

export default function HenrikProfile(){

    return(
        <article className="henrik-profile">
            <h2>Henrik Antonsen</h2>
            <img className="henrik-image" src="/villager.png" alt="Henrik profilbilde" />
            <p className="henrik-profile-category">E-post:</p>
            <a className="henrik-profile-info" href="mailto:henriant@hiof.no">henriant@hiof.no</a>
            <p className="henrik-profile-category">Studie:</p>
            <a className="henrik-profile-info" href="https://www.hiof.no/studier/programmer/itbdes-bachelorstudium-i-informatikk-design-og-utvikling-av-itsystemer/">Design og utvikling av IT-systemer</a>
        </article>

    )
}
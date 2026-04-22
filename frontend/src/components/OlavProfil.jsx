import '../styling/olavprofilstyling.css'
import AssignmentCard from './AssignmentCard'
import Assignments from './Assignments'


export default function OlavProfil(){
    
    return(
    <article className="olav-profil">
        <img className='profil-bilde-olav' src="/furt.png" alt="Olav" />
        <h2>Olav Liljeberg</h2>
        <a href="mailto:omliljeb@hiof.no">omliljeb@hiof.no</a>
        <p>Studium: Bachelor i informasjonssystemer</p>
        </article>
    )
}
{/*
    Samme formål som ProductCard.jsx fra LEGOdudes
    - Mottaker en arbeidskrav via props
    - Presenterer tittel og beskrivelse
*/}

export default function AssignmentCard({assignment}){
    return(
        <article className="assignment-card">
            <h3>{assignment.title}</h3>
            <p>{assignment.description}</p>
        </article>
    )
}


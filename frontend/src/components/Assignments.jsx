import { useEffect, useState } from "react";
import client from "../helpers/client";
import AssignmentCard from "./AssignmentCard";

{/*
    Samme formål som Products.jsx fra LEGOdudes
    - Henter alle arbeidskrav fra Sanity databasen
    - Bruker map() for å vise hver arbeidskrav med AssignmentCard
*/}

export default function Assignments(){
    const [assignments, setAssignments] = useState(null)

    useEffect(() => {
        async function fetchAssignments(){
            const data = await client.fetch("*[_type == 'assignment']")
            setAssignments(data)
        }
        fetchAssignments()
    },[])

    return(
        <section>
            <h2>Arbeidskrav</h2>
            {assignments?.map(a => <AssignmentCard key={a._id} assignment={a} />)}
        </section>
    )
}
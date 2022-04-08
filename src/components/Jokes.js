import React from "react";

export default function Jokes({setup, punchline}) {
    return (
        <>
            <p>{setup}<br /><em>{punchline}</em></p>
        </>
    )
}
import React from "react";

export default function Jokes({setup, punchline}) {
    if (!punchline) {
        return (
            <p>{setup}<br /><em>LOL</em></p>
        )
    } else {
        return (
        <>
            <p>{setup}<br /><em>{punchline}</em></p>
        </>
        )
    }
    
}
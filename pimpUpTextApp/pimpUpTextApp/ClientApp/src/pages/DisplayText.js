import React, { useContext } from "react"
import {Context} from "../Context"
import alterText from "../utils/alterText"

export default function DisplayText() {
    const {textData, mostUsedWord} = useContext(Context)
    //here display the altered text
    //create alterText component where it alters the text
    const updatedText = alterText(textData, mostUsedWord)
    return (
        <div>
            {updatedText}
        </div>
    )
}



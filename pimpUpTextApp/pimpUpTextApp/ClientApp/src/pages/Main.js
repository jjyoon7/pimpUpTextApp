import React, { useContext } from "react"
import Upload from "./Upload"
import DisplayText from "./DisplayText"
import {Context} from "../Context"
import { FetchData } from '../components/FetchData'

export default function Main() {
    const {textData} = useContext(Context)
    //const hasTextData = textData.length > 0

    return (
        <>
            <FetchData/>
            <Upload/>
            {/* //{ hasTextData ? <DisplayText/> : ""} */}
        </>
    )
}
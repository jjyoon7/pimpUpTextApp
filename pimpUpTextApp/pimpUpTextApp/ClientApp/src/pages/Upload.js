import React, { useContext, useState } from "react"
import {Context} from "../Context"
import axios from 'axios';

export default function Upload() {
    const {setTextData} = useContext(Context)
    const [selectedFile, setSelectedFile] = useState(null)

    const onChangeHandler = (event) => {
        const chosenFile = event.target.files[0]
        setSelectedFile(chosenFile)
        const data = new FormData() 
        data.append('file', selectedFile)
    }

    // function UploadFile(e) {
    //     const file = e.target.files[0];
    //     const formData = new FormData();
    //     formData.append("file", file);
    //     formData.append("__RequestVerificationToken", "@Context.GetAntiforgeryToken()")
    //     console.log(formData);
    //     axios.post("/FileUpload/SingleFile", formData);
    // }

    return (
        <form>
            <input type="file" onChange={e => onChangeHandler(e)}></input>
            <button type="submit">upload</button>
        </form>
    )
}
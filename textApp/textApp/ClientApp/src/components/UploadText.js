import React, { useState } from "react"
import axios from 'axios';

export default function UploadText() {
    const [hasSelectedFile, setHasSelectedFile] = useState(false)
    const [fileName, setFileName] = useState("")


    const onChangeHandler = (event) => {
        const chosenFile = event.target.files[0]
        const hasProperty = chosenFile.name !== ""
        if (hasProperty) {
            setHasSelectedFile(true)
            setFileName(chosenFile.name)
        }
    }

    const onClickHandler = (event) => {
        const file = event.target.files[0];
        console.log(file);
        const formData = new FormData();
        console.log(axios)
        //formData.append("file", file);
        //formData.append("__RequestVerificationToken", "@Context.GetAntiforgeryToken()")

        //axios.post("/FileUpload/SingleFile", formData);
    }

    return (
        <div className="file-upload-display">
            <form className="file-upload-display-form" method="post" encType="multipart/form-data" asp-controller="Home" asp-action="Index">
                <label className="file-upload-display-label btn-file-upload-display-label btn">
                    <input asp-controller="File" type="file" name="files" multiple onChange={onChangeHandler} />
                    <span className="file-upload-display-btn-text">{hasSelectedFile ? fileName : "Select a file"}</span>
                </label>
                <input className="file-upload-display-upload btn-file-upload-display-upload btn" type="submit" value="Upload" onClick={onClickHandler} />
            </form>
        </div>
    )
}
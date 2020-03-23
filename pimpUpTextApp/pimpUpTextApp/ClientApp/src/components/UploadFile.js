import React, { Fragment, useState } from 'react';

function UploadFile() {
    const [files, setFiles] = useState([]);
    const [result, setResult] = useState();


    function handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        let formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }

        let url = event.target.value === 'Use Binding' ? '/api/files/binding' : '/api/files/streaming';

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(r => r.json())
            .then(result => setResult(result));
        return false;
    }

    function handleFileChange(event) {
        const newFiles = event.target.files;
        setFiles(newFiles);
    }


    return (
            <Fragment>
                <form>
                    <div><input type="file" multiple={true} name="pic" onChange={handleFileChange} /></div>
                    <br />
                    <div><input type="submit" value="Use Binding" onClick={handleSubmit} /></div>
                    <br />
                    <div><input type="submit" value="Use Streaming" onClick={handleSubmit} /></div>
                </form>
                <div>
                    {result && result.split("\r\n").map(x => <p>{x}</p>)}
                </div>
            </Fragment>
    );
    
}

export default UploadFile;

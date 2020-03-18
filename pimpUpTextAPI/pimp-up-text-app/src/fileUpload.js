import {useState} from 'react';    
import { post } from 'axios';    

function Fileupload() {    
    const [file, setFile] = useState('')
    async function submit(e) {    
            e.preventDefault();    
            const url = `http://localhost:61331/api/Uploadfiles/Uploadfile`;    
            const formData = new FormData();    
            formData.append('body', file);    
            const config = {    
                    headers: {    
                            'content-type': 'multipart/form-data',    
                    },    
            };    
            return post(url, formData, config);    
    }    
    
    return (    
            <div className="container-fluid">    
                    <form onSubmit={e => this.submit(e)}>    
                            <div className="col-sm-12 btn btn-primary">    
                                    File Upload    
                    </div>    
                            <h1>File Upload</h1>    
                            <input type="file" onChange={e => setFile(e.target.files[0])} />    
                            <button className="btn btn-primary" type="submit">Upload</button>    
                    </form>    
            </div>    
    )      
}    

export default Fileupload    
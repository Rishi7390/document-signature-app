import {useState} from "react";
import API from "../api/api";

function Upload(){

    const[file,setFile]=useState(null);

    const upload=async()=>{

        const formData=new FormData();

        formData.append(
            "file",
            file
        );

        await API.post(
            "/api/docs/upload",
            formData
        );

        alert("Uploaded");

    };

    return(

        <div>

            <input
            type="file"
            onChange={(e)=>setFile(e.target.files[0])}
            />

            <button onClick={upload}>
                Upload
            </button>

        </div>

    );

}

export default Upload;
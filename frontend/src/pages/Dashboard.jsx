import {useEffect,useState} from "react";
import API from "../api/api";

function Dashboard(){

    const [documents,setDocuments]=useState([]);

    useEffect(()=>{

        fetchDocs();

    },[]);

    async function fetchDocs(){

        const res=await API.get("/api/docs");

        setDocuments(res.data);

    }

    return(

        <div>

            <h2>My Documents</h2>

            {

                documents.map((doc)=>(

                    <div key={doc.id}>

                        {doc.filename}

                    </div>

                ))

            }

        </div>

    );

}

export default Dashboard;
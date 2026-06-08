import { useEffect, useState } from "react";
import API from "../api/documentApi";

function DocumentList() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await API.get("/api/docs");

      setDocuments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>My Documents</h2>

      {documents.map((doc) => (
        <div key={doc.id}>
          {doc.filename}
        </div>
      ))}
    </div>
  );
}

export default DocumentList;
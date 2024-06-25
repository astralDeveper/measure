import React from "react";
import FileUploadBtn from "../../components/FileUploadBtn";

export default function Form6({ data, setData }) {
  return (
    <>
      <div className="main">
        <div className="form-container">
          <div className="step1Heading">
            <h2>Step 6: Existing Cabinet Layout <span style={{ color: '#06bd37'}}>(Import design)</span></h2>
          </div>
          
          <div className="step1Heading">
            <h2>Upload photo or file</h2>
          </div>

          <FileUploadBtn name="stp6_img" setData={setData} data={data} />

          <div className="textArea">
            <p>Notes</p>
            <textarea name="Notes" cols="30" rows="10" value={data.stp6_notes} onChange={(e)=> setData((s) => ({...s, stp6_notes: e.target.value}))} />
          </div>
        </div>
      </div>
    </>
  );
}

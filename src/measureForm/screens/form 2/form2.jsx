import React from "react";
import SKTable from "../../components/SKTable";
import FileUploadBtn from "../../components/FileUploadBtn";
import img1 from "../../assets/form2 1.png";
import img2 from "../../assets/form2 2.png";

export default function Form2({ data, setData }) {
  return (
    <>
      <div className="main">
        <div className="form-container">
          <div className="step1Heading">
            <h2>Step 2: Existing Soffit Construction</h2>
          </div>

          <div className="table2 tableCollapse">
            <SKTable name="stp2_1" data={data} setData={setData} />
          </div>

          <div className="img2-main">
            <img src={img1} alt="" className="w100" />
          </div>

          <FileUploadBtn name="stp2_img" setData={setData} data={data} />

          <div className="step1Heading my50">
            <h2>Step 2: Existing HVAC Register Fans</h2>
          </div>

          <div className="table2 tableCollapse">
            <SKTable name="stp2" data={data} setData={setData} />
          </div>

          <div className="img2-main">
            <img src={img2} alt="" className="w100" />
          </div>

          <FileUploadBtn name="stp2C_img" setData={setData} data={data} />

          <div className="textArea">
            <p>Additional notes</p>
            <textarea name="Notes" cols="30" rows="10" value={data.stp2_notes} onChange={(e) => setData((s) => ({ ...s, stp2_notes: e.target.value }))} />
          </div>
        </div>
      </div>
    </>
  );
}

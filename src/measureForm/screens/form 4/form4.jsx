import React from "react";
import SKTable from "../../components/SKTable";
import FileUploadBtn from "../../components/FileUploadBtn";
import img1 from "../../assets/form4 1.png";
import img2 from "../../assets/form4 2.png";

export default function Form4({ data, setData }) {
  return (
    <>
      <div className="main">
        <div className="form-container">
          <div className="step1Heading">
            <h2>Step 4: Windows</h2>
          </div>
          
          <div className="table2 tableCollapse">
            <SKTable name="stp4_1" data={data} setData={setData} singleSelect={{row: 'F', opt: ['A', 'B', 'C', 'D']}} />
          </div>

          <div className="img2-main">
            <img src={img1} alt="" className="w100" />
          </div>

          <FileUploadBtn name="stp4_img" setData={setData} data={data} />

          <div className="step1Heading my50">
            <h2>Step 4: Doors</h2>
          </div>
          
          <div className="table2 tableCollapse">
            <SKTable name="stp4_2" data={data} setData={setData} singleSelect={{row: 'F', opt: ['A', 'B', 'C', 'D']}} />
          </div>
          
          <div className="img2-main">
            <img src={img2} alt="" className="w100" />
          </div>

          <FileUploadBtn name="stp4C_img" setData={setData} data={data} />

          <div className="textArea">
            <p>Additional notes</p>
            <textarea name="Notes" cols="30" rows="10" value={data.stp4_notes} onChange={(e)=> setData((s) => ({...s, stp4_notes: e.target.value}))} />
          </div>
        </div>
      </div>
    </>
  );
}

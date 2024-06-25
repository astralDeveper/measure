import React from "react";
import img1 from "../../assets/form3 1.png";
import img2 from "../../assets/form3 2.png";
import SKSelect from "../../components/Select";
import SKTable from "../../components/SKTable";
import FileUploadBtn from "../../components/FileUploadBtn";

export default function Form3({ data, setData }) {
  return (
    <>
      <div className="main">
        <div className="form-container">
          <div className="step1Heading">
            <h2>Step 3: Existing Gas Line Location</h2>
          </div>

          <div className="table2 tableCollapse">
            <SKTable name="stp3_1" data={data} setData={setData} />
          </div>

          <div className="img2-main my50">
            <img src={img1} alt="" className="w100" />
          </div>

          <FileUploadBtn name="stp3_img" setData={setData} data={data} />

          <div className="step1Heading my50">
            <h2>Step 3: Existing Plumbing Supply & Drain Lines</h2>
          </div>
          <div className="inputs my50">
            <SKSelect label="Location" options={selectOptions.location} value={data.location} onChange={(e)=> setData((s) => ({ ...s, location: e.target.value}))} />
            <SKSelect label="Water supply type" options={selectOptions.waterSupplyType} value={data.waterSupplyType} onChange={(e)=> setData((s) => ({ ...s, waterSupplyType: e.target.value}))} />
            <SKSelect label="Water supply size" options={selectOptions.waterSupplySize} value={data.waterSupplySize} onChange={(e)=> setData((s) => ({ ...s, waterSupplySize: e.target.value}))} />
            <SKSelect label="Drain type" options={selectOptions.drainType} value={data.drainType} onChange={(e)=> setData((s) => ({ ...s, drainType: e.target.value}))} />
            <SKSelect label="Drain size" options={selectOptions.drainSize} value={data.drainSize} onChange={(e)=> setData((s) => ({ ...s, drainSize: e.target.value}))} />
            <SKSelect label="Sink depth" options={selectOptions.sinkDepth} value={data.sinkDepth} onChange={(e)=> setData((s) => ({ ...s, sinkDepth: e.target.value}))} />
            <SKSelect label="Sink Base Width" options={selectOptions.sinkBaseWidth} value={data.sinkBaseWidth} onChange={(e)=> setData((s) => ({ ...s, sinkBaseWidth: e.target.value}))} />
            <SKSelect label="Max Undermount Depth" options={selectOptions.maxUndermountDepth} value={data.maxUndermountDepth} onChange={(e)=> setData((s) => ({ ...s, maxUndermountDepth: e.target.value}))} />
            <SKSelect label="Existing Disposal" options={selectOptions.existingDisposal} value={data.existingDisposal} onChange={(e)=> setData((s) => ({ ...s, existingDisposal: e.target.value}))} />
          </div>

          <FileUploadBtn name="stp3C1_img" setData={setData} data={data} />

          <div className="table2 tableCollapse">
            <SKTable name="stp3_2" data={data} setData={setData} />
          </div>

          <div className="img2-main my50">
            <img src={img2} alt="" className="w100" />
          </div>

          <FileUploadBtn name="stp3C2_img" setData={setData} data={data} />

          <div className="textArea">
            <p>Additional notes</p>
            <textarea name="Notes" cols="30" rows="10" value={data.stp3_notes} onChange={(e)=> setData((s) => ({...s, stp3_notes: e.target.value}))} />
          </div>
        </div>
      </div>
    </>
  );
}

const selectOptions = {
  location: [
    {label: 'Main sink', value: 'Main sink'},
    {label: 'Bar sink', value: 'Bar sink'},
    {label: 'Pot filler', value: 'Pot filler'},
    {label: 'Sink 2', value: 'Sink 2'},
    {label: 'Sink 3', value: 'Sink 3'},
    {label: 'Other', value: 'Other'},
  ],
  waterSupplyType: [
    {label: 'Copper', value: 'Copper'},
    {label: 'CPVC', value: 'CPVC'},
    {label: 'Galvanized', value: 'Galvanized'},
    {label: 'PEX', value: 'PEX'},
    {label: 'Polyethylene', value: 'Polyethylene'},
    {label: 'Other', value: 'Other'},
  ],
  waterSupplySize: [
    {label: '1/2"', value: '1/2"'},
    {label: '3/4"', value: '3/4"'},
    {label: 'Other', value: 'Other'},
  ],
  drainType: [
    {label: 'ABS (black)', value: 'ABS (black)'},
    {label: 'Cast iron', value: 'Cast iron'},
    {label: 'Copper', value: 'Copper'},
    {label: 'Galvanized', value: 'Galvanized'},
    {label: 'Drain Waste Vent (DWV)', value: 'Drain Waste Vent (DWV)'},
    {label: 'Schedule 40', value: 'Schedule 40'},
    {label: 'Other', value: 'Other'},
  ],
  drainSize: [
    {label: '1-1/4"', value: '1-1/4"'},
    {label: '1-1/2"', value: '1-1/2"'},
    {label: '3"', value: '3"'},
    {label: '4"', value: '4"'},
    {label: 'Other', value: 'Other'},
  ],
  sinkDepth: [
    {label: '6"', value: '6"'},
    {label: '8"', value: '8"'},
    {label: '10"', value: '10"'},
    {label: '12"', value: '12"'},
    {label: 'Other', value: 'Other'},
  ],
  sinkBaseWidth: [
    {label: '12"', value: '12"'},
    {label: '18"', value: '18"'},
    {label: '24"', value: '24"'},
    {label: '30"', value: '30"'},
    {label: '33"', value: '33"'},
    {label: '36"', value: '36"'},
    {label: '48"', value: '48"'},
    {label: 'Other', value: 'Other'},
  ],
  maxUndermountDepth: [
    {label: '6"', value: '6"'},
    {label: '8"', value: '8"'},
    {label: '10"', value: '10"'},
    {label: '12"', value: '12"'},
    {label: 'Other', value: 'Other'},
  ],
  existingDisposal: [
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
    {label: 'Other', value: 'Other'},
  ],
}
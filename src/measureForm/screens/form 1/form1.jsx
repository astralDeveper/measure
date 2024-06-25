import React from "react";
import FileUploadBtn from "../../components/FileUploadBtn";
import SKSelect from "../../components/Select";

export default function Form1({ data, setData }) {
  return (
    <>
      <div className="main">
        <div className="form-container">
          <div className="step1Heading">
            <h2>Step 1: Project Details</h2>
          </div>
          <div className="inputs my50">
            <SKSelect label="Structure" options={selectOptions.structure} value={data.structure} onChange={(e)=> setData((s) => ({ ...s, structure: e.target.value}))} />
            <SKSelect label="Year build" options={selectOptions.yearbuild} value={data.yearbuild} onChange={(e)=> setData((s) => ({ ...s, yearbuild: e.target.value}))} />
            <SKSelect label="Foundation" options={selectOptions.foundation} value={data.foundation} onChange={(e)=> setData((s) => ({ ...s, foundation: e.target.value}))} />
            <SKSelect label="Exterior Wall Material" options={selectOptions.exteriorWallMaterial} value={data.exteriorWallMaterial} onChange={(e)=> setData((s) => ({ ...s, exteriorWallMaterial: e.target.value}))}/>
            <SKSelect label="Roofing Material" options={selectOptions.roofingMaterial} value={data.roofingMaterial} onChange={(e)=> setData((s) => ({ ...s, roofingMaterial: e.target.value}))}/>
            <SKSelect label="Electric Panel Location" options={selectOptions.electricPanelLocation} value={data.electricPanelLocation} onChange={(e)=> setData((s) => ({ ...s, electricPanelLocation: e.target.value}))}/>
            <SKSelect label="Electric Panel Amperage" options={selectOptions.electricPanelAmperage} value={data.electricPanelAmperage} onChange={(e)=> setData((s) => ({ ...s, electricPanelAmperage: e.target.value}))}/>
          </div>

          <FileUploadBtn name="stp1_img" setData={setData} data={data} />

          <div className="step1Heading">
            <h2>Step 1: Kitchen Area Details</h2>
          </div>
          <div className="inputs my50">
            <SKSelect label="Interior Wall Construction" options={selectOptions.interiorWallConstruction} value={data.interiorWallConstruction} onChange={(e)=> setData((s) => ({ ...s, interiorWallConstruction: e.target.value}))}/>
            <SKSelect label="Interior Wall Covering" options={selectOptions.interiorWallCovering} value={data.interiorWallCovering} onChange={(e)=> setData((s) => ({ ...s, interiorWallCovering: e.target.value}))}/>
            <SKSelect label="Existing Floor Material" options={selectOptions.existingFloorMaterial} value={data.existingFloorMaterial} onChange={(e)=> setData((s) => ({ ...s, existingFloorMaterial: e.target.value}))}/>
            <SKSelect label="Existing Base Cabinet Depth" options={selectOptions.existingBaseCabinetDepth} value={data.existingBaseCabinetDepth} onChange={(e)=> setData((s) => ({ ...s, existingBaseCabinetDepth: e.target.value}))}/>
            <SKSelect label="Existing Base Cabinet Toe Kick" options={selectOptions.existingBaseCabinetToeKick} value={data.existingBaseCabinetToeKick} onChange={(e)=> setData((s) => ({ ...s, existingBaseCabinetToeKick: e.target.value}))}/>
            <SKSelect label="Floor Level" options={selectOptions.floorLevel} value={data.floorLevel} onChange={(e)=> setData((s) => ({ ...s, floorLevel: e.target.value}))}/>
            <SKSelect label="Ceiling Level" options={selectOptions.ceilingLevel} value={data.ceilingLevel} onChange={(e)=> setData((s) => ({ ...s, ceilingLevel: e.target.value}))}/>
            <SKSelect label="Walls Plumb" options={selectOptions.wallsPlumb} value={data.wallsPlumb} onChange={(e)=> setData((s) => ({ ...s, wallsPlumb: e.target.value}))}/>
            <SKSelect label="Walls Square" options={selectOptions.wallsSquare} value={data.wallsSquare} onChange={(e)=> setData((s) => ({ ...s, wallsSquare: e.target.value}))}/>
          </div>

          <FileUploadBtn name="stp1C_img" setData={setData} data={data} />

          <div className="textArea">
            <p>Additional notes</p>
            <textarea name="Notes" cols="30" rows="10" value={data.stp1_notes} onChange={(e)=> setData((s) => ({...s, stp1_notes: e.target.value}))} />
          </div>
        </div>
      </div>
    </>
  );
}

const generateYears = () => {
  const yearsArray = [];
  for (let i = 1850; i <= 2100; i++) {
    yearsArray.push({label: i, value: i});
  }
  return yearsArray;
}

const selectOptions = {
  structure: [
    {label: 'New', value: 'New'},
    {label: 'Existing', value: 'Existing'},
    {label: 'Other', value: 'Other'},
  ],
  yearbuild: generateYears(),
  foundation: [
    {label: 'Basement', value: 'Basement'},
    {label: 'Crawl space', value: 'Crawl space'},
    {label: 'Slab', value: 'Slab'},
    {label: 'Raised', value: 'Raised'},
    {label: 'Other', value: 'Other'},
  ],
  exteriorWallMaterial:[
    {label: 'Wood', value: 'Wood'},
    {label: 'Vinyl', value: 'Vinyl'},
    {label: 'Brick', value: 'Brick'},
    {label: 'Stone', value: 'Stone'},
    {label: 'Hard plank', value: 'Hard plank'},
    {label: 'Stucco', value: 'Stucco'},
    {label: 'Other', value: 'Other'},
  ],
  roofingMaterial: [
    {label: 'Composition', value: 'Composition'},
    {label: 'Wood', value: 'Wood' },
    {label: 'Tile', value: 'Tile' },
    {label: 'Flat', value: 'Flat' },
  ],
  electricPanelLocation: [
    {label: 'Basement', value: 'Basement'},
    {label: 'Garage', value: 'Garage'},
    {label: 'Closet', value: 'Closet'},
    {label: 'Other', value: 'Other'},
  ],
  electricPanelAmperage: [
    {label: '225', value: '225'},
    {label: '200', value: '200'},
    {label: '150', value: '150'},
    {label: '125', value: '125'},
    {label: '100', value: '100'},
    {label: '60', value: '60'},
    {label: 'Other', value: 'Other'},
  ],
  interiorWallConstruction: [
    {label: 'Drywall', value: 'Drywall'},
    {label: 'Plaster', value: 'Plaster'},
    {label: 'Other', value: 'Other'},
  ],
  interiorWallCovering: [
    {label: 'Paint', value: 'Paint'},
    {label: 'Wallpaper', value: 'Wallpaper'},
    {label: 'Paneling', value: 'Paneling'},
    {label: 'Other', value: 'Other'},
  ],
  existingFloorMaterial: [
    {label: 'Wood', value: 'Wood'},
    {label: 'Ceramic', value: 'Ceramic'},
    {label: 'Vinyl sheet', value: 'Vinyl sheet'},
    {label: 'VCT', value: 'VCT'},
    {label: 'Vinyl plank', value: 'Vinyl plank'},
    {label: 'Laminate', value: 'Laminate'},
    {label: 'Other', value: 'Other'},
  ],
  existingBaseCabinetDepth: [
    {label: '24"', value: '24"'},
    {label: '18"', value: '18"'},
    {label: '15"', value: '15"'},
    {label: '12"', value: '12"'},
    {label: 'Other', value: 'Other'},
  ],
  existingBaseCabinetToeKick: [
    {label: '3" d x 3.5-4" h', value: '3" d x 3.5-4" h'},
    {label: 'None', value: 'None'},
    {label: 'Other', value: 'Other'},
  ],
  floorLevel: [
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
    {label: 'Other', value: 'Other'},
  ],
  ceilingLevel: [
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
    {label: 'Other', value: 'Other'},
  ],
  wallsPlumb: [
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
    {label: 'Other', value: 'Other'},
  ],
  wallsSquare: [
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
    {label: 'Other', value: 'Other'},
  ],
}

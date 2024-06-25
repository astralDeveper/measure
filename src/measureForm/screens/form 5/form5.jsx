import React from "react";
import FileUploadBtn from "../../components/FileUploadBtn";
import SKSelect from "../../components/Select";

export default function Form5({ data, setData }) {
  return (
    <>
      <div className="main">
        <div className="form-container">
          <div className="step1Heading">
            <h2>Step 5: Existing Appliances (If Keeping) or New Appliances</h2>
          </div>

          <div className="step1Heading my50">
            <h2>Fridge</h2>
          </div>
          <div className="inputs my50">
            <SKSelect label="Fridge type" options={selectOptions.fridgeType} value={data.fridgeType} onChange={(e) => setData((s) => ({ ...s, fridgeType: e.target.value }))} />
            <SKSelect label="Fridge width" options={selectOptions.fridgeSize.width} value={data.fridgeSize.width} onChange={(e) => setData((s) => ({ ...s, fridgeSize: { ...s.fridgeSize, width: e.target.value } }))} />
            <SKSelect label="Fridge height" options={selectOptions.fridgeSize.height} value={data.fridgeSize.height} onChange={(e) => setData((s) => ({ ...s, fridgeSize: { ...s.fridgeSize, height: e.target.value } }))} />
            <SKSelect label="Fridge depth" options={selectOptions.fridgeSize.depth} value={data.fridgeSize.depth} onChange={(e) => setData((s) => ({ ...s, fridgeSize: { ...s.fridgeSize, depth: e.target.value } }))} />
            <SKSelect label="Fridge water line" options={selectOptions.fridgeWaterLine} value={data.fridgeWaterLine} onChange={(e) => setData((s) => ({ ...s, fridgeWaterLine: e.target.value }))} />
            <SKSelect label="Fridge brand" options={selectOptions.fridgeBrand} value={data.fridgeBrand} onChange={(e) => setData((s) => ({ ...s, fridgeBrand: e.target.value }))} />
          </div>

          <div className="step1Heading my50">
            <h2>Range</h2>
          </div>
          <div className="inputs my50">
            <SKSelect label="Range type" options={selectOptions.rangeType} value={data.rangeType} onChange={(e) => setData((s) => ({ ...s, rangeType: e.target.value }))} />
            <SKSelect label="Range width" options={selectOptions.rangeSize.width} value={data.rangeSize.width} onChange={(e) => setData((s) => ({ ...s, rangeSize: { ...s.rangeSize, width: e.target.value } }))} />
            <SKSelect label="Range height" options={selectOptions.rangeSize.height} value={data.rangeSize.height} onChange={(e) => setData((s) => ({ ...s, rangeSize: { ...s.rangeSize, height: e.target.value } }))} />
            <SKSelect label="Range depth" options={selectOptions.rangeSize.depth} value={data.rangeSize.depth} onChange={(e) => setData((s) => ({ ...s, rangeSize: { ...s.rangeSize, depth: e.target.value } }))} />
            <SKSelect label="Range source" options={selectOptions.rangeSource} value={data.rangeSource} onChange={(e) => setData((s) => ({ ...s, rangeSource: e.target.value }))} />
            <SKSelect label="Range brand" options={selectOptions.rangeBrand} value={data.rangeBrand} onChange={(e) => setData((s) => ({ ...s, rangeBrand: e.target.value }))} />
          </div>

          <div className="step1Heading my50">
            <h2>Dishwasher</h2>
          </div>
          <div className="inputs my50">
            <SKSelect label="Dishwasher type" options={selectOptions.dishwasherType} value={data.dishwasherType} onChange={(e) => setData((s) => ({ ...s, dishwasherType: e.target.value }))} />
            <SKSelect label="Dishwasher width" options={selectOptions.dishwasherSize.width} value={data.dishwasherSize.width} onChange={(e) => setData((s) => ({ ...s, dishwasherSize: { ...s.dishwasherSize, width: e.target.value } }))} />
            <SKSelect label="Dishwasher height" options={selectOptions.dishwasherSize.height} value={data.dishwasherSize.height} onChange={(e) => setData((s) => ({ ...s, dishwasherSize: { ...s.dishwasherSize, height: e.target.value } }))} />
            <SKSelect label="Dishwasher depth" options={selectOptions.dishwasherSize.depth} value={data.dishwasherSize.depth} onChange={(e) => setData((s) => ({ ...s, dishwasherSize: { ...s.dishwasherSize, depth: e.target.value } }))} />
            <SKSelect label="Dishwasher brand" options={selectOptions.dishwasherBrand} value={data.dishwasherBrand} onChange={(e) => setData((s) => ({ ...s, dishwasherBrand: e.target.value }))} />
          </div>

          <div className="step1Heading my50">
            <h2>Microwave</h2>
          </div>
          <div className="inputs my50">
            <SKSelect label="Microwave type" options={selectOptions.microwaveType} value={data.microwaveType} onChange={(e) => setData((s) => ({ ...s, microwaveType: e.target.value }))} />
            <SKSelect label="Microwave width" options={selectOptions.microwaveSize.width} value={data.microwaveSize.width} onChange={(e) => setData((s) => ({ ...s, microwaveSize: { ...s.microwaveSize, width: e.target.value } }))} />
            <SKSelect label="Microwave height" options={selectOptions.microwaveSize.height} value={data.microwaveSize.height} onChange={(e) => setData((s) => ({ ...s, microwaveSize: { ...s.microwaveSize, height: e.target.value } }))} />
            <SKSelect label="Microwave depth" options={selectOptions.microwaveSize.depth} value={data.microwaveSize.depth} onChange={(e) => setData((s) => ({ ...s, microwaveSize: { ...s.microwaveSize, depth: e.target.value } }))} />
            <SKSelect label="Microwave brand" options={selectOptions.microwaveBrand} value={data.microwaveBrand} onChange={(e) => setData((s) => ({ ...s, microwaveBrand: e.target.value }))} />
          </div>

          <div className="step1Heading my50">
            <h2>Disposal</h2>
          </div>
          <div className="inputs my50">
            <SKSelect label="Disposal hp" options={selectOptions.disposalHp} value={data.disposalHp} onChange={(e) => setData((s) => ({ ...s, disposalHp: e.target.value }))} />
            <SKSelect label="Disposal electric" options={selectOptions.disposalElectric} value={data.disposalElectric} onChange={(e) => setData((s) => ({ ...s, disposalElectric: e.target.value }))} />
            <SKSelect label="Disposal brand" options={selectOptions.disposalBrand} value={data.disposalBrand} onChange={(e) => setData((s) => ({ ...s, disposalBrand: e.target.value }))} />
          </div>

          <div className="step1Heading my50">
            <h2>Exhaust</h2>
          </div>
          <div className="inputs my50">
            <SKSelect label="Exhaust type" options={selectOptions.exhaustType} value={data.exhaustType} onChange={(e) => setData((s) => ({ ...s, exhaustType: e.target.value }))} />
            <SKSelect label="Exhaust vent" options={selectOptions.exhaustVent} value={data.exhaustVent} onChange={(e) => setData((s) => ({ ...s, exhaustVent: e.target.value }))} />
            {/* <SKSelect label="Exhaust other" options={selectOptions.exhaustOther} value={data.exhaustOther} onChange={(e) => setData((s) => ({ ...s, exhaustOther: e.target.value }))} /> */}
          </div>

          <div className="step1Heading my50">
            <h2>Cooktop</h2>
          </div>
          <div className="inputs my50">
            <SKSelect label="Cooktop source" options={selectOptions.cooktopSource} value={data.cooktopSource} onChange={(e) => setData((s) => ({ ...s, cooktopSource: e.target.value }))} />
            <SKSelect label="Cooktop width" options={selectOptions.cooktopSize.width} value={data.cooktopSize.width} onChange={(e) => setData((s) => ({ ...s, cooktopSize: { ...s.cooktopSize, width: e.target.value } }))} />
            <SKSelect label="Cooktop downdraft" options={selectOptions.cooktopSize.builtInDowndraft} value={data.cooktopSize.builtInDowndraft} onChange={(e) => setData((s) => ({ ...s, cooktopSize: { ...s.cooktopSize, builtInDowndraft: e.target.value } }))} />
            <SKSelect label="Cooktop brand" options={selectOptions.cooktopBrand} value={data.cooktopBrand} onChange={(e) => setData((s) => ({ ...s, cooktopBrand: e.target.value }))} />
          </div>

          <div className="step1Heading my50">
            <h2>Wall oven</h2>
          </div>
          <div className="inputs my50">
            <SKSelect label="Wall oven source" options={selectOptions.wallOvenSource} value={data.wallOvenSource} onChange={(e) => setData((s) => ({ ...s, wallOvenSource: e.target.value }))} />
            <SKSelect label="Wall oven type" options={selectOptions.wallOvenType} value={data.wallOvenType} onChange={(e) => setData((s) => ({ ...s, wallOvenType: e.target.value }))} />
            <SKSelect label="Wall oven width" options={selectOptions.wallOvenSize.width} value={data.wallOvenSize.width} onChange={(e) => setData((s) => ({ ...s, wallOvenSize: { ...s.wallOvenSize, width: e.target.value } }))} />
            <SKSelect label="Wall oven height" options={selectOptions.wallOvenSize.height} value={data.wallOvenSize.height} onChange={(e) => setData((s) => ({ ...s, wallOvenSize: { ...s.wallOvenSize, height: e.target.value } }))} />
            <SKSelect label="Wall oven depth" options={selectOptions.wallOvenSize.depth} value={data.wallOvenSize.depth} onChange={(e) => setData((s) => ({ ...s, wallOvenSize: { ...s.wallOvenSize, depth: e.target.value } }))} />
            <SKSelect label="Wall oven brand" options={selectOptions.wallOvenBrand} value={data.wallOvenBrand} onChange={(e) => setData((s) => ({ ...s, wallOvenBrand: e.target.value }))} />
          </div>

          <div className="step1Heading my50">
            <h2>Compactor</h2>
          </div>
          <div className="inputs my50">
            <SKSelect label="Compactor type" options={selectOptions.compactorType} value={data.compactorType} onChange={(e) => setData((s) => ({ ...s, compactorType: e.target.value }))} />
            <SKSelect label="Compactor width" options={selectOptions.compactorSize.width} value={data.compactorSize.width} onChange={(e) => setData((s) => ({ ...s, compactorSize: { ...s.compactorSize, width: e.target.value } }))} />
            <SKSelect label="Compactor height" options={selectOptions.compactorSize.height} value={data.compactorSize.height} onChange={(e) => setData((s) => ({ ...s, compactorSize: { ...s.compactorSize, height: e.target.value } }))} />
            <SKSelect label="Compactor depth" options={selectOptions.compactorSize.depth} value={data.compactorSize.depth} onChange={(e) => setData((s) => ({ ...s, compactorSize: { ...s.compactorSize, depth: e.target.value } }))} />
            <SKSelect label="Compactor brand" options={selectOptions.compactorBrand} value={data.compactorBrand} onChange={(e) => setData((s) => ({ ...s, compactorBrand: e.target.value }))} />
          </div>

          <div className="step1Heading my50">
            <h2>Washer</h2>
          </div>
          <div className="inputs my50">
            <SKSelect label="Washer type" options={selectOptions.washerType} value={data.washerType} onChange={(e) => setData((s) => ({ ...s, washerType: e.target.value }))} />
            <SKSelect label="Washer width" options={selectOptions.washerSize.width} value={data.washerSize.width} onChange={(e) => setData((s) => ({ ...s, washerSize: { ...s.washerSize, width: e.target.value } }))} />
            <SKSelect label="Washer height" options={selectOptions.washerSize.height} value={data.washerSize.height} onChange={(e) => setData((s) => ({ ...s, washerSize: { ...s.washerSize, height: e.target.value } }))} />
            <SKSelect label="Washer depth" options={selectOptions.washerSize.depth} value={data.washerSize.depth} onChange={(e) => setData((s) => ({ ...s, washerSize: { ...s.washerSize, depth: e.target.value } }))} />
            <SKSelect label="Washer load" options={selectOptions.washerLoad} value={data.washerLoad} onChange={(e) => setData((s) => ({ ...s, washerLoad: e.target.value }))} />
            <SKSelect label="Washer brand" options={selectOptions.washerBrand} value={data.washerBrand} onChange={(e) => setData((s) => ({ ...s, washerBrand: e.target.value }))} />
          </div>

          <div className="step1Heading my50">
            <h2>Dryer</h2>
          </div>
          <div className="inputs my50">
            <SKSelect label="Dryer type" options={selectOptions.dryerType} value={data.dryerType} onChange={(e) => setData((s) => ({ ...s, dryerType: e.target.value }))} />
            <SKSelect label="Dryer width" options={selectOptions.dryerSize.width} value={data.dryerSize.width} onChange={(e) => setData((s) => ({ ...s, dryerSize: { ...s.dryerSize, width: e.target.value } }))} />
            <SKSelect label="Dryer height" options={selectOptions.dryerSize.height} value={data.dryerSize.height} onChange={(e) => setData((s) => ({ ...s, dryerSize: { ...s.dryerSize, height: e.target.value } }))} />
            <SKSelect label="Dryer depth" options={selectOptions.dryerSize.depth} value={data.dryerSize.depth} onChange={(e) => setData((s) => ({ ...s, dryerSize: { ...s.dryerSize, depth: e.target.value } }))} />
            <SKSelect label="Dryer source" options={selectOptions.dryerSource} value={data.dryerSource} onChange={(e) => setData((s) => ({ ...s, dryerSource: e.target.value }))} />
            <SKSelect label="Dryer brand" options={selectOptions.dryerBrand} value={data.dryerBrand} onChange={(e) => setData((s) => ({ ...s, dryerBrand: e.target.value }))} />
          </div>

          <FileUploadBtn name="stp5_img" setData={setData} data={data} />

          <div className="textArea">
            <p>Additional notes</p>
            <textarea name="Notes" cols="30" rows="10" value={data.stp5_notes} onChange={(e) => setData((s) => ({ ...s, stp5_notes: e.target.value }))} />
          </div>
        </div>
      </div>
    </>
  );
}

const selectOptions = {
  fridgeType: [
    { label: 'Left hand swing', value: 'Left hand swing' },
    { label: 'Right hand swing', value: 'Right hand swing' },
    { label: 'Double door', value: 'Double door' },
  ],
  fridgeSize: {
    width: [
      { label: '28"', value: '28"' },
      { label: '30"', value: '30"' },
      { label: '32"', value: '32"' },
      { label: '36"', value: '36"' },
      { label: '42"', value: '42"' },
      { label: '48"', value: '48"' },
      { label: '60"', value: '60"' },
      { label: '72"', value: '72"' },
      { label: 'Other', value: 'others' },
    ],
    height: [
      { label: '48"', value: '48"' },
      { label: '60"', value: '60"' },
      { label: '62"', value: '62"' },
      { label: '64"', value: '64"' },
      { label: '65"', value: '65"' },
      { label: '66"', value: '66"' },
      { label: '67"', value: '67"' },
      { label: '68"', value: '68"' },
      { label: '69"', value: '69"' },
      { label: '70"', value: '70"' },
      { label: '71"', value: '71"' },
      { label: '72"', value: '72"' },
      { label: 'Other', value: 'others' },
    ],
    depth: [
      { label: '22"', value: '22"' },
      { label: '24"', value: '24"' },
      { label: '26"', value: '26"' },
      { label: '28"', value: '28"' },
      { label: '30"', value: '30"' },
      { label: '32"', value: '32"' },
      { label: '34"', value: '34"' },
      { label: 'Other', value: 'others' },
    ],
  },
  fridgeWaterLine: [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' },
    { label: 'Other', value: 'others' },
  ],
  fridgeBrand: [
    { label: 'Bosch', value: 'Bosch' },
    { label: 'Frigidaire', value: 'Frigidaire' },
    { label: 'General Electric (GE)', value: 'General Electric (GE)' },
    { label: 'Hotpoint', value: 'Hotpoint' },
    { label: 'Kenmore', value: 'Kenmore' },
    { label: 'Kitchen Aid', value: 'Kitchen Aid' },
    { label: 'LG', value: 'LG' },
    { label: 'Maytag', value: 'Maytag' },
    { label: 'Samsung', value: 'Samsung' },
    { label: 'Sharp', value: 'Sharp' },
    { label: 'Sub-Zero', value: 'Sub-Zero' },
    { label: 'Viking', value: 'Viking' },
    { label: 'Whirlpool', value: 'Whirlpool' },
    { label: 'Other', value: 'others' },
  ],
  rangeType: [
    { label: 'Free standing', value: 'Free standing' },
    { label: 'Built-in', value: 'Built-in' },
    { label: 'Other', value: 'others' },
  ],
  rangeSize: {
    width: [
      { label: '24"', value: '24"' },
      { label: '30"', value: '30"' },
      { label: '36"', value: '36"' },
      { label: '60"', value: '60"' },
      { label: 'Other', value: 'others' },
    ],
    height: [
      { label: '36"', value: '36"' },
      { label: 'Other', value: 'others' },
    ],
    depth: [
      { label: '22"', value: '22"' },
      { label: '24"', value: '24"' },
      { label: '26"', value: '26"' },
      { label: '28"', value: '28"' },
      { label: '30"', value: '30"' },
      { label: '32"', value: '32"' },
      { label: '34"', value: '34"' },
      { label: 'Other', value: 'others' },
    ],
  },
  rangeSource: [
    { label: 'Electric', value: 'Electric' },
    { label: 'Gas', value: 'Gas' },
    { label: 'Propane', value: 'Propane' },
    { label: 'Other', value: 'Other' },
  ],
  rangeBrand: [
    { label: 'Bosch', value: 'Bosch' },
    { label: 'Frigidaire', value: 'Frigidaire' },
    { label: 'General Electric (GE)', value: 'General Electric (GE)' },
    { label: 'Hotpoint', value: 'Hotpoint' },
    { label: 'Kenmore', value: 'Kenmore' },
    { label: 'Kitchen Aid', value: 'Kitchen Aid' },
    { label: 'LG', value: 'LG' },
    { label: 'Maytag', value: 'Maytag' },
    { label: 'Samsung', value: 'Samsung' },
    { label: 'Sharp', value: 'Sharp' },
    { label: 'Sub-Zero', value: 'Sub-Zero' },
    { label: 'Viking', value: 'Viking' },
    { label: 'Whirlpool', value: 'Whirlpool' },
    { label: 'Other', value: 'others' },
  ],
  dishwasherType: [
    { label: 'Rolling', value: 'Rolling' },
    { label: 'Under Counter', value: 'Under Counter' },
    { label: 'Built-in', value: 'Built-in' },
    { label: 'Other', value: 'others' },
  ],
  dishwasherSize: {
    width: [
      { label: '18"', value: '18"' },
      { label: '24"', value: '24"' },
      { label: 'Other', value: 'others' },
    ],
    height: [
      { label: 'Standard', value: 'Standard' },
      { label: 'Other', value: 'others' },
    ],
    depth: [
      { label: 'Counter Depth', value: 'Counter Depth' },
      { label: 'Other', value: 'others' },
    ],
  },
  dishwasherBrand: [
    { label: 'Bosch', value: 'Bosch' },
    { label: 'Frigidaire', value: 'Frigidaire' },
    { label: 'General Electric (GE)', value: 'General Electric (GE)' },
    { label: 'Hotpoint', value: 'Hotpoint' },
    { label: 'Kenmore', value: 'Kenmore' },
    { label: 'Kitchen Aid', value: 'Kitchen Aid' },
    { label: 'LG', value: 'LG' },
    { label: 'Maytag', value: 'Maytag' },
    { label: 'Samsung', value: 'Samsung' },
    { label: 'Sharp', value: 'Sharp' },
    { label: 'Sub-Zero', value: 'Sub-Zero' },
    { label: 'Viking', value: 'Viking' },
    { label: 'Whirlpool', value: 'Whirlpool' },
    { label: 'Other', value: 'others' },
  ],
  microwaveType: [
    { label: 'Built-in', value: 'Built-in' },
    { label: 'Countertop', value: 'Countertop' },
    { label: 'Over the Range', value: 'Over the Range' },
    { label: 'Other', value: 'others' },
  ],
  microwaveSize: {
    width: [
      { label: '15"', value: '15"' },
      { label: '16"', value: '16"' },
      { label: '17"', value: '17"' },
      { label: '18"', value: '18"' },
      { label: '19"', value: '19"' },
      { label: '20"', value: '20"' },
      { label: '21"', value: '21"' },
      { label: '22"', value: '22"' },
      { label: '24"', value: '24"' },
      { label: '25"', value: '25"' },
      { label: '26"', value: '26"' },
      { label: '27"', value: '27"' },
      { label: '28"', value: '28"' },
      { label: '29"', value: '29"' },
      { label: '30"', value: '30"' },
      { label: '31"', value: '31"' },
      { label: '32"', value: '32"' },
      { label: 'Other', value: 'others' },
    ],
    height: [
      { label: '10"', value: '10"' },
      { label: '11"', value: '11"' },
      { label: '12"', value: '12"' },
      { label: '13"', value: '13"' },
      { label: '14"', value: '14"' },
      { label: '15"', value: '15"' },
      { label: '16"', value: '16"' },
      { label: '17"', value: '17"' },
      { label: '18"', value: '18"' },
      { label: '19"', value: '19"' },
      { label: '20"', value: '20"' },
      { label: '21"', value: '21"' },
      { label: '22"', value: '22"' },
      { label: 'Other', value: 'others' },
    ],
    depth: [
      { label: '10"', value: '10"' },
      { label: '11"', value: '11"' },
      { label: '12"', value: '12"' },
      { label: '13"', value: '13"' },
      { label: '14"', value: '14"' },
      { label: '15"', value: '15"' },
      { label: '16"', value: '16"' },
      { label: '17"', value: '17"' },
      { label: '18"', value: '18"' },
      { label: '19"', value: '19"' },
      { label: '20"', value: '20"' },
      { label: '21"', value: '21"' },
      { label: '22"', value: '22"' },
      { label: '23"', value: '23"' },
      { label: '24"', value: '24"' },
      { label: '25"', value: '25"' },
      { label: 'Other', value: 'others' },
    ],
  },
  microwaveBrand: [
    { label: 'Bosch', value: 'Bosch' },
    { label: 'Frigidaire', value: 'Frigidaire' },
    { label: 'General Electric (GE)', value: 'General Electric (GE)' },
    { label: 'Hotpoint', value: 'Hotpoint' },
    { label: 'Kenmore', value: 'Kenmore' },
    { label: 'Kitchen Aid', value: 'Kitchen Aid' },
    { label: 'LG', value: 'LG' },
    { label: 'Maytag', value: 'Maytag' },
    { label: 'Samsung', value: 'Samsung' },
    { label: 'Sharp', value: 'Sharp' },
    { label: 'Sub-Zero', value: 'Sub-Zero' },
    { label: 'Viking', value: 'Viking' },
    { label: 'Whirlpool', value: 'Whirlpool' },
    { label: 'Other', value: 'others' },
  ],
  disposalHp: [
    { label: '1/4 hp', value: '1/4 hp' },
    { label: '1/3 hp', value: '1/3 hp' },
    { label: '1/2 hp', value: '1/2 hp' },
    { label: '3/4 hp', value: '3/4 hp' },
    { label: 'Other', value: 'others' },
  ],
  disposalElectric: [
    { label: 'Hardwire', value: 'Hardwire' },
    { label: 'Receptacle', value: 'Receptacle' },
    { label: 'Other', value: 'others' },
  ],
  disposalBrand: [
    { label: 'American Standard', value: 'American Standard' },
    { label: 'Bosch', value: 'Bosch' },
    { label: 'Evolution', value: 'Evolution' },
    { label: 'InSinkErator', value: 'InSinkErator' },
    { label: 'Kohler', value: 'Kohler' },
    { label: 'Kraus', value: 'Kraus' },
    { label: 'Moen', value: 'Moen' },
    { label: 'Waste Maid', value: 'Waste Maid' },
    { label: 'Waste King', value: 'Waste King' },
    { label: 'Other', value: 'others' },
  ],
  exhaustType: [
    { label: 'Hood', value: 'Hood' },
    { label: 'Microwave over the range', value: 'Microwave over the range' },
    { label: 'Down draft', value: 'Down draft' },
    { label: 'Other', value: 'others' },
  ],
  exhaustVent: [
    { label: 'Carbon filter', value: 'Carbon filter' },
    { label: 'Vented to exterior', value: 'Vented to exterior' },
    { label: 'Other', value: 'others' },
  ],
  // exhaustOther: ['Carbon filter', 'Vented to exterior', 'Other'],
  cooktopSource: [
    { label: 'Electric', value: 'Electric' },
    { label: 'Gas', value: 'Gas' },
    { label: 'Propane', value: 'Propane' },
    { label: 'Other', value: 'others' },
  ],
  cooktopSize: {
    width: [
      { label: '15"', value: '15"' },
      { label: '16"', value: '16"' },
      { label: '17"', value: '17"' },
      { label: '18"', value: '18"' },
      { label: '19"', value: '19"' },
      { label: '20"', value: '20"' },
      { label: '21"', value: '21"' },
      { label: '22"', value: '22"' },
      { label: '24"', value: '24"' },
      { label: '25"', value: '25"' },
      { label: '26"', value: '26"' },
      { label: '27"', value: '27"' },
      { label: '28"', value: '28"' },
      { label: '29"', value: '29"' },
      { label: '30"', value: '30"' },
      { label: '31"', value: '31"' },
      { label: '32"', value: '32"' },
      { label: '33"', value: '33"' },
      { label: '34"', value: '34"' },
      { label: '35"', value: '35"' },
      { label: '36"', value: '36"' },
      { label: 'Other', value: 'others' },
    ],
    builtInDowndraft: [
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
      { label: 'Other', value: 'others' },
    ],
  },
  cooktopBrand: [
    { label: 'Bosch', value: 'Bosch' },
    { label: 'Frigidaire', value: 'Frigidaire' },
    { label: 'General Electric (GE)', value: 'General Electric (GE)' },
    { label: 'Hotpoint', value: 'Hotpoint' },
    { label: 'Kenmore', value: 'Kenmore' },
    { label: 'Kitchen Aid', value: 'Kitchen Aid' },
    { label: 'LG', value: 'LG' },
    { label: 'Maytag', value: 'Maytag' },
    { label: 'Samsung', value: 'Samsung' },
    { label: 'Sharp', value: 'Sharp' },
    { label: 'Sub-Zero', value: 'Sub-Zero' },
    { label: 'Viking', value: 'Viking' },
    { label: 'Whirlpool', value: 'Whirlpool' },
    { label: 'Other', value: 'others' },
  ],
  wallOvenSource: [
    { label: 'Electric', value: 'Electric' },
    { label: 'Gas', value: 'Gas' },
    { label: 'Propane', value: 'Propane' },
    { label: 'Other', value: 'others' },
  ],
  wallOvenType: [
    { label: 'Single', value: 'Single' },
    { label: 'Double', value: 'Double' },
    { label: 'Micro wall oven combo', value: 'Micro wall oven combo' },
    { label: 'Smart wall oven', value: 'Smart wall oven' },
    { label: 'Other', value: 'others' },
  ],
  wallOvenSize: {
    width: [
      { label: '24"', value: '24"' },
      { label: '27"', value: '27"' },
      { label: '30"', value: '30"' },
      { label: 'Other', value: 'others' },
    ],
    height: [
      { label: '22-24"', value: '22-24"' },
      { label: '42-44"', value: '42-44"' },
      { label: '50-53"', value: '50-53"' },
      { label: 'Other', value: 'others' },
    ],
    depth: [
      { label: '22-27"', value: '22-27"' },
      { label: 'Other', value: 'others' },
    ],
  },
  wallOvenBrand: [
    { label: 'Bosch', value: 'Bosch' },
    { label: 'Frigidaire', value: 'Frigidaire' },
    { label: 'General Electric (GE)', value: 'General Electric (GE)' },
    { label: 'Hotpoint', value: 'Hotpoint' },
    { label: 'Kenmore', value: 'Kenmore' },
    { label: 'Kitchen Aid', value: 'Kitchen Aid' },
    { label: 'LG', value: 'LG' },
    { label: 'Maytag', value: 'Maytag' },
    { label: 'Samsung', value: 'Samsung' },
    { label: 'Sharp', value: 'Sharp' },
    { label: 'Sub-Zero', value: 'Sub-Zero' },
    { label: 'Viking', value: 'Viking' },
    { label: 'Whirlpool', value: 'Whirlpool' },
    { label: 'Other', value: 'others' },
  ],
  compactorType: [
    { label: 'Under cabinet', value: 'Under cabinet' },
    { label: 'Free standing', value: 'Free standing' },
    { label: 'Other', value: 'others' },
  ],
  compactorSize: {
    width: [
      { label: '12-15"', value: '12-15"' },
      { label: 'Other', value: 'others' },
    ],
    height: [
      { label: 'Under counter', value: 'Under counter' },
      { label: 'Other', value: 'others' },
    ],
    depth: [
      { label: '22-27"', value: '22-27"' },
      { label: 'Other', value: 'others' },
    ],
  },
  compactorBrand: [
    { label: 'Bosch', value: 'Bosch' },
    { label: 'Frigidaire', value: 'Frigidaire' },
    { label: 'General Electric (GE)', value: 'General Electric (GE)' },
    { label: 'Hotpoint', value: 'Hotpoint' },
    { label: 'Kenmore', value: 'Kenmore' },
    { label: 'Kitchen Aid', value: 'Kitchen Aid' },
    { label: 'LG', value: 'LG' },
    { label: 'Maytag', value: 'Maytag' },
    { label: 'Samsung', value: 'Samsung' },
    { label: 'Sharp', value: 'Sharp' },
    { label: 'Sub-Zero', value: 'Sub-Zero' },
    { label: 'Viking', value: 'Viking' },
    { label: 'Whirlpool', value: 'Whirlpool' },
    { label: 'Other', value: 'others' },
  ],
  washerType: [
    { label: 'Side by Side', value: 'Side by side' },
    { label: 'Stackable', value: 'Stackable' },
    { label: 'Other', value: 'other' },
  ],
  washerSize: {
    width: [
      { label: '27"', value: '27"' },
      { label: 'Other', value: 'other' },
    ],
    height: [
      { label: '39"', value: '39"' },
      { label: '42-44"', value: '42-44"' },
      { label: 'Other', value: 'other' },
    ],
    depth: [
      { label: '32-34"', value: '32-34"' },
      { label: 'Other', value: 'other' },
    ],
  },
  washerLoad: [
    { label: 'Top', value: 'Top' },
    { label: 'Side', value: 'Side' },
    { label: 'Other', value: 'other' },
  ],
  washerBrand: [
    { label: 'Bosch', value: 'Bosch' },
    { label: 'Frigidaire', value: 'Frigidaire' },
    { label: 'General Electric (GE)', value: 'General Electric (GE)' },
    { label: 'Hotpoint', value: 'Hotpoint' },
    { label: 'Kenmore', value: 'Kenmore' },
    { label: 'Kitchen Aid', value: 'Kitchen Aid' },
    { label: 'LG', value: 'LG' },
    { label: 'Maytag', value: 'Maytag' },
    { label: 'Samsung', value: 'Samsung' },
    { label: 'Sharp', value: 'Sharp' },
    { label: 'Sub-Zero', value: 'Sub-Zero' },
    { label: 'Viking', value: 'Viking' },
    { label: 'Whirlpool', value: 'Whirlpool' },
    { label: 'Other', value: 'others' },
  ],
  dryerType: [
    { label: 'Side by Side', value: 'Side by side' },
    { label: 'Stackable', value: 'Stackable' },
    { label: 'Other', value: 'other' },
  ],
  dryerSize: {
    width: [
      { label: '27"', value: '27"' },
      { label: 'Other', value: 'other' },
    ],
    height: [
      { label: '39"', value: '39"' },
      { label: '42-44"', value: '42-44"' },
      { label: 'Other', value: 'other' },
    ],
    depth: [
      { label: '32-34"', value: '32-34"' },
      { label: 'Other', value: 'other' },
    ],
  },
  dryerSource: [
    { label: 'Electric', value: 'Electric' },
    { label: 'Gas', value: 'Gas' },
    { label: 'Propane', value: 'Propane' },
    { label: 'Other', value: 'other' },
  ],
  dryerBrand: [
    { label: 'Bosch', value: 'Bosch' },
    { label: 'Frigidaire', value: 'Frigidaire' },
    { label: 'General Electric (GE)', value: 'General Electric (GE)' },
    { label: 'Hotpoint', value: 'Hotpoint' },
    { label: 'Kenmore', value: 'Kenmore' },
    { label: 'Kitchen Aid', value: 'Kitchen Aid' },
    { label: 'LG', value: 'LG' },
    { label: 'Maytag', value: 'Maytag' },
    { label: 'Samsung', value: 'Samsung' },
    { label: 'Sharp', value: 'Sharp' },
    { label: 'Sub-Zero', value: 'Sub-Zero' },
    { label: 'Viking', value: 'Viking' },
    { label: 'Whirlpool', value: 'Whirlpool' },
    { label: 'Other', value: 'others' },
  ],
}

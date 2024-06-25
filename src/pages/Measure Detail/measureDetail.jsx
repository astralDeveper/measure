import { useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import '../Measure Detail/measureDetail.css';
import MapComponent from "../../measureForm/components/Map";
import DynamicData from '../../components/showData'
import GridTable from "../../components/showDataTable";
import { db } from "../../firebase/firebase";
import { useState } from "react";

export default function MeasureDetail() {
  const { id } = useParams();
  const [dynamicData, setDynamicData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, `measurements/${id}`);
      const document = await getDoc(docRef);
      const data = document.data();
      setDynamicData(data);
    }

    getData();
  }, [])

  if (!dynamicData) return null;

  return (
    <>
    {id?
    <>
      <div>
        <h1 className="marleft">Client Details</h1>
      </div>
      <div className="_detail">
        <DynamicData title='Client Name' name={dynamicData.name} />
        <DynamicData title='Cell No' name={dynamicData.cell} />
        <DynamicData title='Email' name={dynamicData.email} />
      </div>
      <div className="marleft">
        <h1>Property Details</h1>
      </div>
      <div>
        <div className="_detail">
          <DynamicData title='Street Address 1' name={dynamicData.streetAddress} />
          <DynamicData title='Street Address 2' name={dynamicData.streetAddress2} />
          <DynamicData title='City' name={dynamicData.city} />
          <DynamicData title='State' name={dynamicData.state} />
        </div>
        <div style={{ marginTop: 50 }}>
          <MapComponent data={dynamicData.mapLocation} />
        </div>
        <section>
          <div className="marleft">
            <h1>Step 1: Project Details</h1>
          </div>
          <div className="_detail">
            <DynamicData title='Structure' name={dynamicData.structure} />
            <DynamicData title='Year Build' name={dynamicData.yearbuild} />
            <DynamicData title='Foundation' name={dynamicData.foundation} />
            <DynamicData title='Exterior Wall Material' name={dynamicData.exteriorWallMaterial} />
            <DynamicData title='Roofing Material' name={dynamicData.roofingMaterial} />
            <DynamicData title='Electric Panel Location ' name={dynamicData.electricPanelLocation} />
            <DynamicData title='Electric Panel Amperage' name={dynamicData.electricPanelAmperage} />
          </div>
          <div style={{ textAlign: "center", maxWidth: '500px', margin: '0 auto' }}>
            <img src={dynamicData.stp1_img} alt="" />
          </div>
        </section>
        <section>
          <div className="marleft">
            <h1>Step 1: Kitchen Area Details</h1>
          </div>
          <div className="_detail">
            <DynamicData title='Interior Wall Construction' name={dynamicData.interiorWallConstruction} />
            <DynamicData title='Interior Wall Covering' name={dynamicData.interiorWallCovering} />
            <DynamicData title='Existing Floor Material' name={dynamicData.existingFloorMaterial} />
            <DynamicData title='Existing Base Cabinet Depth' name={dynamicData.existingBaseCabinetDepth} />
            <DynamicData title='Existing Base Cabinet Toe Kick' name={dynamicData.existingBaseCabinetToeKick} />
            <DynamicData title='Floor Level ' name={dynamicData.floorLevel} />
            <DynamicData title='Ceiling Level' name={dynamicData.ceilingLevel} />
            <DynamicData title='Walls Plumb' name={dynamicData.wallsPlumb} />
            <DynamicData title='Walls Square' name={dynamicData.wallsSquare} />
            <DynamicData title='Additional Notes' name={dynamicData.stp1_notes} />
          </div>
        </section>
        <section>
          <div className="marleft">
            <h1>Step 2: Existing Soffit Construction</h1>
          </div>
          <div className="_detail marleft">
            <GridTable name="stp2_1" data={dynamicData} />
          </div>
          <div style={{ textAlign: "center", maxWidth: '500px', margin: '0 auto' }}>
            <img src={dynamicData.stp2_img} alt="" />
          </div>
        </section>
        <section>
          <div className="marleft">
            <h1>Step 2: Existing HVAC Register Fans</h1>
          </div>
          <div className="_detail marleft">
            <GridTable name="stp2" data={dynamicData} />
          </div>
          <div style={{ textAlign: "center", maxWidth: '500px', margin: '0 auto' }}>
            <img src={dynamicData.stp2C_img} alt="" />
          </div>
          <DynamicData title='Additional Notes' name={dynamicData.stp2_notes} />
        </section>
        <section>
          <div className="marleft">
            <h1>Step 3: Existing Gas Line Location</h1>
          </div>
          <div className="_detail marleft">
            <GridTable name="stp3_1" data={dynamicData} />
          </div>
          <div style={{ textAlign: "center", maxWidth: '500px', margin: '0 auto' }}>
            <img src={dynamicData.stp3_img} alt="" />
          </div>
          <h1 className="marleft">Step 3: Existing Plumbing Supply & Drain Lines</h1>
          <div className="_detail">
            <DynamicData title='Location' name={dynamicData.location} />
            <DynamicData title='Water Supply Type' name={dynamicData.waterSupplyType} />
            <DynamicData title='Water Supply Size' name={dynamicData.waterSupplySize} />
            <DynamicData title='Drain Type' name={dynamicData.drainType} />
            <DynamicData title='Drain Size' name={dynamicData.drainSize} />
            <DynamicData title='Sink Depth' name={dynamicData.sinkDepth} />
            <DynamicData title='Sink Base Width' name={dynamicData.sinkBaseWidth} />
            <DynamicData title='Max Undermount Depth' name={dynamicData.maxUndermountDepth} />
            <DynamicData title='Existing Disposal' name={dynamicData.existingDisposal} />
          </div>
          <div style={{ textAlign: "center", maxWidth: '500px', margin: '0 auto' }}>
            <img src={dynamicData.stp3C1_img} alt="" />
          </div>
          <div className="_detail marleft">
            <GridTable name="stp3_2" data={dynamicData} />
          </div>
          <div style={{ textAlign: "center", maxWidth: '500px', margin: '0 auto' }}>
            <img src={dynamicData.stp3C2_img} alt="" />
          </div>
          <DynamicData title='Additional Notes' name={dynamicData.stp3_notes} />
        </section>
        <section>
          <div className="marleft"><h1>Step 4: Windows</h1></div>
          <div className="_detail marleft">
            <GridTable name="stp4_1" data={dynamicData} singleSelect={{row: 'F', opt: ['A', 'B', 'C', 'D']}} />
          </div>
          <div style={{ textAlign: "center", maxWidth: '500px', margin: '0 auto' }}>
            <img src={dynamicData.stp4_img} alt="" />
          </div>
          <div className="marleft"><h1>Step 4: Doors</h1></div>
          <div className="_detail marleft">
            <GridTable name="stp4_2" data={dynamicData} singleSelect={{row: 'F', opt: ['A', 'B', 'C', 'D']}} />
          </div>
          <div style={{ textAlign: "center", maxWidth: '500px', margin: '0 auto' }}>
            <img src={dynamicData.stp4C_img} alt="" />
          </div>
          <DynamicData title='Additional Notes' name={dynamicData.stp4_notes} />
        </section>
        <section>
          <div className="marleft"><h1>Step 5: Existing Appliances (If Keeping) or New Appliances</h1></div>
          <div className="marleft"><h1>Fridge</h1></div>
          <div className="_detail">
            <DynamicData title='Fridge type' name={dynamicData.fridgeType} />
            <DynamicData title='Fridge width' name={dynamicData.fridgeSize.width} />
            <DynamicData title='Fridge height' name={dynamicData.fridgeSize.height} />
            <DynamicData title='Fridge depth' name={dynamicData.fridgeSize.depth} />
            <DynamicData title='Fridge water line' name={dynamicData.fridgeWaterLine} />
            <DynamicData title='Fridge brand' name={dynamicData.fridgeBrand} />
          </div>
          <div className="marleft"><h1>Range</h1></div>
          <div className="_detail">
            <DynamicData title='Range type' name={dynamicData.rangeType} />
            <DynamicData title='Range width' name={dynamicData.rangeSize.width} />
            <DynamicData title='Range height' name={dynamicData.rangeSize.height} />
            <DynamicData title='Range depth' name={dynamicData.rangeSize.depth} />
            <DynamicData title='Range source' name={dynamicData.rangeSource} />
            <DynamicData title='Range brand' name={dynamicData.rangeBrand} />
          </div>
          <div className="marleft"><h1>Dishwasher</h1></div>
          <div className="_detail">
            <DynamicData title='DW type' name={dynamicData.dishwasherType} />
            <DynamicData title='DW width' name={dynamicData.dishwasherSize.width} />
            <DynamicData title='DW height' name={dynamicData.dishwasherSize.height} />
            <DynamicData title='DW depth' name={dynamicData.dishwasherSize.depth} />
            <DynamicData title='DW brand' name={dynamicData.dishwasherBrand} />
          </div>
          <div className="marleft"><h1>Microwave</h1></div>
          <div className="_detail">
            <DynamicData title='Microwave type' name={dynamicData.microwaveType} />
            <DynamicData title='Microwave width' name={dynamicData.microwaveSize.width} />
            <DynamicData title='Microwave height' name={dynamicData.microwaveSize.height} />
            <DynamicData title='Microwave depth' name={dynamicData.microwaveSize.depth} />
            <DynamicData title='Microwave brand' name={dynamicData.microwaveBrand} />
          </div>
          <div className="marleft"><h1>Disposal</h1></div>
          <div className="_detail">
            <DynamicData title='Disposal hp' name={dynamicData.disposalHp} />
            <DynamicData title='Disposal electric' name={dynamicData.disposalBrand} />
            <DynamicData title='Disposal brand' name={dynamicData.disposalElectric} />
          </div>
          <div className="marleft"><h1>Exhaust</h1></div>
          <div className="_detail">
            <DynamicData title='Exhaust type' name={dynamicData.exhaustType} />
            <DynamicData title='Exhaust vent' name={dynamicData.exhaustVent} />
            {/* <DynamicData title='Exhaust other' name={dynamicData.exhaustOther} /> */}
          </div>
          <div className="marleft"><h1>Cooktop</h1></div>
          <div className="_detail">
            <DynamicData title='Cooktop source' name={dynamicData.cooktopSource} />
            <DynamicData title='Cooktop width' name={dynamicData.cooktopSize.width} />
            <DynamicData title='Cooktop downraft' name={dynamicData.cooktopSize.builtInDowndraft} />
            <DynamicData title='Cooktop brand' name={dynamicData.cooktopBrand} />
          </div>
          <div className="marleft"><h1>Wall oven</h1></div>
          <div className="_detail">
            <DynamicData title='Wall oven type' name={dynamicData.wallOvenType} />
            <DynamicData title='Wall oven width' name={dynamicData.wallOvenSize.width} />
            <DynamicData title='Wall oven height' name={dynamicData.wallOvenSize.height} />
            <DynamicData title='Wall oven depth' name={dynamicData.wallOvenSize.depth} />
            <DynamicData title='Wall oven source' name={dynamicData.wallOvenSource} />
            <DynamicData title='Wall oven brand' name={dynamicData.wallOvenBrand} />
          </div>
          <div className="marleft"><h1>Compactor</h1></div>
          <div className="_detail">
            <DynamicData title='Compactor type' name={dynamicData.compactorType} />
            <DynamicData title='Compactor width' name={dynamicData.compactorSize.width} />
            <DynamicData title='Compactor height' name={dynamicData.compactorSize.height} />
            <DynamicData title='Compactor depth' name={dynamicData.compactorSize.depth} />
            <DynamicData title='Compactor brand' name={dynamicData.compactorBrand} />
          </div>
          <div className="marleft"><h1>Washer</h1></div>
          <div className="_detail">
            <DynamicData title='Washer type' name={dynamicData.washerType} />
            <DynamicData title='Washer width' name={dynamicData.washerSize.width} />
            <DynamicData title='Washer height' name={dynamicData.washerSize.height} />
            <DynamicData title='Washer depth' name={dynamicData.washerSize.depth} />
            <DynamicData title='Washer load' name={dynamicData.washerLoad} />
            <DynamicData title='Washer brand' name={dynamicData.washerBrand} />
          </div>
          <div className="marleft"><h1>Dryer</h1></div>
          <div className="_detail">
            <DynamicData title='Dryer type' name={dynamicData.dryerType} />
            <DynamicData title='Dryer width' name={dynamicData.dryerSize.width} />
            <DynamicData title='Dryer height' name={dynamicData.dryerSize.height} />
            <DynamicData title='Dryer depth' name={dynamicData.dryerSize.depth} />
            <DynamicData title='Dryer source' name={dynamicData.dryerSource} />
            <DynamicData title='Dryer brand' name={dynamicData.dryerBrand} />
          </div>
          <div style={{ textAlign: "center", maxWidth: '500px', margin: '0 auto' }}>
            <img src={dynamicData.stp5_img} alt="" />
          </div>
          <DynamicData title='Additional Notes' name={dynamicData.stp5_notes} />
        </section>
        <section>
          <div className="marleft"><h1>Step 6: Existing Cabinet Layout (Import design)</h1></div>
          <div className="marleft"><h1>Upload Photo and file.</h1></div>
          <div style={{ textAlign: "center", maxWidth: '500px', margin: '0 auto' }}>
            <img src={dynamicData.stp6_img} alt="" />
          </div>
          <DynamicData title='Additional Notes' name={dynamicData.stp6_notes} />
        </section>
      </div>
    </>
    :
    <div>
      <h1>404 Page Not Found!</h1>
    </div>
    }
    </>
  )
}

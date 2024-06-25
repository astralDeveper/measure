import { useEffect, useState } from "react";
import { Stepper } from 'react-form-stepper';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, getId, storage } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import Form1 from "./screens/form 1/form1";
import Form2 from "./screens/form 2/form2";
import Form3 from "./screens/form 3/form3";
import Form4 from "./screens/form 4/form4";
import Form5 from "./screens/form 5/form5";
import Form6 from "./screens/form 6/form6";
import Main from "./screens/main/main";
import "../measureForm/measureForm.css"

const MIN_STEPS = 0;
const MAX_STEPS = 6;

async function uploadImage(image, id) {
  const storageRef = ref(storage, `/measurements/${id}/${Date.now()}-${image.name}`);

  const response = await uploadBytes(storageRef, image);
  const url = await getDownloadURL(response.ref);
  return url;
}

async function uploadImages(images, id) {
  const imagePromises = Array.from(images, (image) => uploadImage(image, id));

  const imageRes = await Promise.all(imagePromises);
  return imageRes; // list of url like ["https://..", ...]
}

export default function MeasureForm() {
  const { id, type } = getId()
  const [formPage, setFormPage] = useState(0);
  const [data, setData] = useState({
    // New Measure 
    name: '',
    cell: '',
    email: '',
    streetAddress: '',
    streetAddress2: '',
    city: '',
    state: '',
    postalCode: '',
    mapLocation: { lat: '', long: '' },

    // step # 1 [Project Detail]
    structure: '',
    yearbuild: '',
    foundation: '',
    exteriorWallMaterial: '',
    roofingMaterial: '',
    electricPanelLocation: '',
    electricPanelAmperage: '',
    stp1_notes: '',
    stp1_img: '',

    // step # 1 Cont [Project Detail]
    interiorWallConstruction: '',
    interiorWallCovering: '',
    existingFloorMaterial: '',
    existingBaseCabinetDepth: '',
    existingBaseCabinetToeKick: '',
    floorLevel: '',
    ceilingLevel: '',
    wallsPlumb: '',
    wallsSquare: '',
    stp1C_notes: '',
    stp1C_img: '',

    // step # 2 [Existing Soffit construction]
    // soffitDepth: '',
    // soffitHeight: '',
    // floorToSoffitClearance: '',
    // ceilingHeight: '',
    stp2_1: [
      { A: { ft: 'A1', in: 'A1' }, B: { ft: 'B1', in: 'B1' }, C: { ft: 'C1', in: 'C1' }, D: { ft: 'D1', in: 'D1' } },
    ],
    stp2_notes: '',
    stp2_img: '',

    // step # 2 Cont [Existing Soffit construction]
    stp2: [
      { A: { ft: 'A1', in: 'A1' }, B: { ft: 'B1', in: 'B1' }, C: { ft: 'C1', in: 'C1' }, D: { ft: 'D1', in: 'D1' }, E: { ft: 'E1', in: 'E1' }, F: { ft: 'F1', in: 'F1' }, G: { ft: 'G1', in: 'G1' } },
      { A: { ft: 'A2', in: 'A2' }, B: { ft: 'B2', in: 'B2' }, C: { ft: 'C2', in: 'C2' }, D: { ft: 'D2', in: 'D2' }, E: { ft: 'E2', in: 'E2' }, F: { ft: 'F2', in: 'F2' }, G: { ft: 'G2', in: 'G2' } },
      { A: { ft: 'A3', in: 'A3' }, B: { ft: 'B3', in: 'B3' }, C: { ft: 'C3', in: 'C3' }, D: { ft: 'D3', in: 'D3' }, E: { ft: 'E3', in: 'E3' }, F: { ft: 'F3', in: 'F3' }, G: { ft: 'G3', in: 'G3' } },
    ],

    stp2C_notes: '',
    stp2C_img: '',

    // step # 3 [Existing Gas Line Locations]
    stp3_1: [
      { A: { ft: 'A1', in: 'A1' }, B: { ft: 'B1', in: 'B1' }, C: { ft: 'C1', in: 'C1' }, D: { ft: 'D1', in: 'D1' } },
      { A: { ft: 'A2', in: 'A2' }, B: { ft: 'B2', in: 'B2' }, C: { ft: 'C2', in: 'C2' }, D: { ft: 'D2', in: 'D2' } },
      { A: { ft: 'A3', in: 'A3' }, B: { ft: 'B3', in: 'B3' }, C: { ft: 'C3', in: 'C3' }, D: { ft: 'D3', in: 'D3' } },
    ],
    stp3_notes: '',
    stp3_img: '',

    // step # 3 Cont-1 [Existing Plumbing Supply Lines]
    location: '',
    waterSupplyType: '',
    waterSupplySize: '',
    drainType: '',
    drainSize: '',
    sinkDepth: '',
    sinkBaseWidth: '',
    maxUndermountDepth: '',
    existingDisposal: '',
    stp3C1_notes: '',
    stp3C1_img: '',

    // step # 3 Cont-2 [Existing Plumbing Supply Lines]
    stp3_2: [
      { A: { ft: 'A1', in: 'A1' }, B: { ft: 'B1', in: 'B1' }, C: { ft: 'C1', in: 'C1' }, D: { ft: 'D1', in: 'D1' }, E: { ft: 'E1', in: 'E1' }, F: { ft: 'F1', in: 'F1' }, G: { ft: 'G1', in: 'G1' } },
      { A: { ft: 'A2', in: 'A2' }, B: { ft: 'B2', in: 'B2' }, C: { ft: 'C2', in: 'C2' }, D: { ft: 'D2', in: 'D2' }, E: { ft: 'E2', in: 'E2' }, F: { ft: 'F2', in: 'F2' }, G: { ft: 'G2', in: 'G2' } },
      { A: { ft: 'A3', in: 'A3' }, B: { ft: 'B3', in: 'B3' }, C: { ft: 'C3', in: 'C3' }, D: { ft: 'D3', in: 'D3' }, E: { ft: 'E3', in: 'E3' }, F: { ft: 'F3', in: 'F3' }, G: { ft: 'G3', in: 'G3' } },
    ],
    stp3C2_notes: '',
    stp3C2_img: '',

    // step # 4 [Existing Windows]
    stp4_1: [
      { A: { ft: 'A1', in: 'A1' }, B: { ft: 'B1', in: 'B1' }, C: { ft: 'C1', in: 'C1' }, D: { ft: 'D1', in: 'D1' }, E: { ft: 'E1', in: 'E1' }, F: '' },
      { A: { ft: 'A2', in: 'A2' }, B: { ft: 'B2', in: 'B2' }, C: { ft: 'C2', in: 'C2' }, D: { ft: 'D2', in: 'D2' }, E: { ft: 'E2', in: 'E2' }, F: '' },
      { A: { ft: 'A3', in: 'A3' }, B: { ft: 'B3', in: 'B3' }, C: { ft: 'C3', in: 'C3' }, D: { ft: 'D3', in: 'D3' }, E: { ft: 'E3', in: 'E3' }, F: '' },
      { A: { ft: 'A4', in: 'A4' }, B: { ft: 'B4', in: 'B4' }, C: { ft: 'C4', in: 'C4' }, D: { ft: 'D4', in: 'D4' }, E: { ft: 'E4', in: 'E4' }, F: '' },
    ],
    stp4_notes: '',
    stp4_img: '',

    // step # 4 Cont [Existing Windows]
    stp4_2: [
      { A: { ft: 'A1', in: 'A1' }, B: { ft: 'B1', in: 'B1' }, C: { ft: 'C1', in: 'C1' }, D: { ft: 'D1', in: 'D1' }, E: { ft: 'E1', in: 'E1' }, F: '' },
      { A: { ft: 'A2', in: 'A2' }, B: { ft: 'B2', in: 'B2' }, C: { ft: 'C2', in: 'C2' }, D: { ft: 'D2', in: 'D2' }, E: { ft: 'E2', in: 'E2' }, F: '' },
      { A: { ft: 'A3', in: 'A3' }, B: { ft: 'B3', in: 'B3' }, C: { ft: 'C3', in: 'C3' }, D: { ft: 'D3', in: 'D3' }, E: { ft: 'E3', in: 'E3' }, F: '' },
      { A: { ft: 'A4', in: 'A4' }, B: { ft: 'B4', in: 'B4' }, C: { ft: 'C4', in: 'C4' }, D: { ft: 'D4', in: 'D4' }, E: { ft: 'E4', in: 'E4' }, F: '' },
    ],
    stp4C_notes: '',
    stp4C_img: '',

    // step # 5 [Existing Appliances]

    // 5-a
    fridgeType: '',
    fridgeSize: { width: '', height: '', depth: '' },
    fridgeWaterLine: '',
    fridgeBrand: '',
    rangeType: '',
    rangeSize: { width: '', height: '', depth: '' },
    rangeSource: '',
    rangeBrand: '',

    // 5-b
    dishwasherType: '',
    dishwasherSize: { width: '', height: '', depth: '' },
    dishwasherBrand: '',
    microwaveType: '',
    microwaveSize: { width: '', height: '', depth: '' },
    microwaveBrand: '',

    // 5-c
    disposalHp: '',
    disposalBrand: '',
    disposalElectric: '',
    exhaustType: '',
    exhaustVent: '',
    exhaustOther: '',
    cooktopSource: '',
    cooktopSize: { width: '', builtInDowndraft: '' },
    cooktopBrand: '',

    // 5-d
    wallOvenType: '',
    wallOvenSize: { width: '', height: '', depth: '' },
    wallOvenSource: '',
    wallOvenBrand: '',

    compactorType: '',
    compactorSize: { width: '', height: '', depth: '' },
    compactorBrand: '',
    washerType: '',
    washerLoad: '',
    washerSize: { width: '', height: '', depth: '' },
    washerBrand: '',
    dryerType: '',
    dryerSource: '',
    dryerSize: { width: '', height: '', depth: '' },
    dryerBrand: '',
    stp5_notes: '',
    stp5_img: '',

    // step # 6 [Existing Cabinet Layout]
    stp6_notes: '',
    stp6_img: '',
    foreignKey: id,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  let form;
  switch (formPage) {
    case 0:
      form = <Main data={data} setData={setData} />
      break;
    case 1:
      form = <Form1 data={data} setData={setData} />
      break;
    case 2:
      form = <Form2 data={data} setData={setData} />
      break;
    case 3:
      form = <Form3 data={data} setData={setData} />
      break;
    case 4:
      form = <Form4 data={data} setData={setData} />
      break;
    case 5:
      form = <Form5 data={data} setData={setData} />
      break;
    case 6:
      form = <Form6 data={data} setData={setData} />
      break;
    default:
      break;
  }
  const navigate = useNavigate()
  const handleSubmit = async () => {
    const imageArray = []
    const imageNameArray = []

    try {
      for (const [key, value] of Object.entries(data)) {
        if (key.endsWith('_img') && value instanceof File) {
          imageArray.push(value)
          imageNameArray.push(key)
        }
      }
      const imgUrls = await uploadImages(imageArray, id);
      imageNameArray.forEach((img, i) => {
        setData((s) => ({
          ...s,
          [img]: imgUrls[i]
        }))
      })
      setFormSubmitted(true)

      // await addDoc(collection(db, "measurements"), {
      //   ...data,
      //   timestamp: serverTimestamp(),
      // });
      // navigate(`/project/${id}`)
    } catch (err) {
      console.log(err);
    }
  }

  const submitForm = async () => {
    try {
      await addDoc(collection(db, "measurements"), {
        ...data,
        timestamp: serverTimestamp(),
      });
      setModalOpen(true)
      
      setTimeout(() => navigate(`/project/${id}`), 3000);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (formSubmitted) submitForm()
  }, [formSubmitted])

  return (
    <>
    {
      formSubmitted &&
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title" className='dialog-header'>
          Measurements saved
        </DialogTitle>
      </Dialog>
      }
      {id ?
        <div>
          <div className="stepper-container">
            {
              formPage === MIN_STEPS ?
                <button disabled className="stepper-btn2">Back</button>
                :
                <button onClick={() => { setFormPage((s) => s !== MIN_STEPS ? s - 1 : s) }} className="stepper-btn2">Back</button>
            }
            <div>

              <Stepper
                activeStep={formPage}
                connectorStateColors
                className='stepper'
                stepClassName='stepper-btn'
                styleConfig={{
                  activeBgColor: '#06bd37',
                  completedBgColor: '#057c25',
                  fontWeight: 500
                }}
                connectorStyleConfig={{
                  activeColor: '#06bd37',
                  completedColor: '#057c25',
                  size: 2
                }}
                steps={[
                  { label: '' },
                  { label: '' },
                  { label: '' },
                  { label: '' },
                  { label: '' },
                  { label: '' },
                  { label: '' },
                ]}
              />
            </div>

            {
              formPage === MAX_STEPS ?
                <button onClick={handleSubmit} className="stepper-btn2">Submit</button>
                :
                <button onClick={() => { setFormPage((s) => s !== MAX_STEPS ? s + 1 : s) }} className="stepper-btn2">Next</button>
            }
          </div>
          {form}
        </div>
        :
        <div>
          <h1>404 Page Not Found!</h1>
        </div>
      }
    </>
  );
}

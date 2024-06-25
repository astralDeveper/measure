import MapComponent from "../../components/Map";
import SKInput from "../../components/SKInput";
import SKSelect from "../../components/Select";

export default function Main({ data, setData }) {
  return (
    <>
      <div className="main">
        <div className="form-container">
          <div className="step1Heading">
            <h2>Client Details</h2>
          </div>
          <div className="inputs my50">
            <SKInput label="Client Name" value={data.name} onChange={(e)=> setData((s) => ({ ...s, name: e.target.value}))} />
            <SKInput label="Cell No" value={data.cell} onChange={(e)=> setData((s) => ({ ...s, cell: e.target.value}))} />
            <SKInput label="Email" value={data.email} onChange={(e)=> setData((s) => ({ ...s, email: e.target.value}))} />
          </div>
          <div className="step1Heading">
            <h2>Property Details</h2>
          </div>
          <div className="inputs my50">
            <SKInput label="Street Address 1" value={data.streetAddress} onChange={(e)=> setData((s) => ({ ...s, streetAddress: e.target.value}))} />
            <SKInput label="Street Address 2" value={data.streetAddress2} onChange={(e)=> setData((s) => ({ ...s, streetAddress2: e.target.value}))} />
            <SKInput label="City" value={data.city} onChange={(e)=> setData((s) => ({ ...s, city: e.target.value}))} />
            <SKSelect label="State" options={selectOptions.state} value={data.state} onChange={(e)=> setData((s) => ({ ...s, state: e.target.value}))} />
            <SKInput label="Postal Code" value={data.postalCode} onChange={(e)=> setData((s) => ({ ...s, postalCode: e.target.value}))} />
          </div>
        </div>
        
        <MapComponent data={null} setData={setData} />
      </div>
    </>
  )
}

const selectOptions = {
  state: [
    {value: 'Alabama', label: 'Alabama'},
    {value: 'Alaska', label: 'Alaska'},
    {value: 'Arizona', label: 'Arizona'},
    {value: 'Arkansas', label: 'Arkansas'},
    {value: 'California', label: 'California'},
    {value: 'Colorado', label: 'Colorado'},
    {value: 'Connecticut', label: 'Connecticut'},
    {value: 'Delaware', label: 'Delaware'},
    {value: 'Florida', label: 'Florida'},
    {value: 'Georgia', label: 'Georgia'},
    {value: 'Hawaii', label: 'Hawaii'},
    {value: 'Idaho', label: 'Idaho'},
    {value: 'Illinois', label: 'Illinois'},
    {value: 'Indiana', label: 'Indiana'},
    {value: 'Iowa', label: 'Iowa'},
    {value: 'Kansas', label: 'Kansas'},
    {value: 'Kentucky', label: 'Kentucky'},
    {value: 'Louisiana', label: 'Louisiana'},
    {value: 'Maine', label: 'Maine'},
    {value: 'Maryland', label: 'Maryland'},
    {value: 'Massachusetts', label: 'Massachusetts'},
    {value: 'Michigan', label: 'Michigan'},
    {value: 'Minnesota', label: 'Minnesota'},
    {value: 'Mississippi', label: 'Mississippi'},
    {value: 'Missouri', label: 'Missouri'},
    {value: 'Montana', label: 'Montana'},
    {value: 'Nebraska', label: 'Nebraska'},
    {value: 'Nevada', label: 'Nevada'},
    {value: 'New Hampshire', label: 'New Hampshire'},
    {value: 'New Jersey', label: 'New Jersey'},
    {value: 'New Mexico', label: 'New Mexico'},
    {value: 'New York', label: 'New York'},
    {value: 'North Carolina', label: 'North Carolina'},
    {value: 'North Dakota', label: 'North Dakota'},
    {value: 'Ohio', label: 'Ohio'},
    {value: 'Oklahoma', label: 'Oklahoma'},
    {value: 'Oregon', label: 'Oregon'},
    {value: 'Pennsylvania', label: 'Pennsylvania'},
    {value: 'Rhode Island', label: 'Rhode Island'},
    {value: 'South Carolina', label: 'South Carolina'},
    {value: 'South Dakota', label: 'South Dakota'},
    {value: 'Tennessee', label: 'Tennessee'},
    {value: 'Texas', label: 'Texas'},
    {value: 'Utah', label: 'Utah'},
    {value: 'Vermont', label: 'Vermont'},
    {value: 'Virginia', label: 'Virginia'},
    {value: 'Washington', label: 'Washington'},
    {value: 'West Virginia', label: 'West Virginia'},
    {value: 'Wisconsin', label: 'Wisconsin'},
    {value: 'Wyoming', label: 'Wyoming'},
  ]
}

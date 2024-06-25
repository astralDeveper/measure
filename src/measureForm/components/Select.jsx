import { useState } from "react";
import SKInput from "./SKInput";

export default function SKSelect({ label, options, value, onChange,  }) {
  const [convertToInput, setConvertToInput] = useState(false)
  
  if (convertToInput) {
    return (
      <SKInput label={label} value={value} onChange={onChange} />
    )
  }

  const handleChange = (e) => {
    if (e.target.value === 'others') setConvertToInput(true);
    onChange(e);
  }

  return (
    <div className="select-box">
      <label>{label}</label>
      <select value={value} onChange={handleChange}>
        <option>-- Select --</option>
        {options.map((option => (<option key={option.value} value={option.value}>{option.label}</option>)))}
      </select>
    </div>
  );
}

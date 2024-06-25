import React from "react";

export default function SKInput({ label, placeholder, value, onChange }) {
  return (
    <div className="input">
      <p>{label}</p>
      <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

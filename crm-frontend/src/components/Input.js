import React from "react";

export default function Input({ label, value, onChange, type="text", placeholder, textarea=false }) {
  return (
    <div className="form-row">
      {label && <label>{label}</label>}
      {textarea ? (
        <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={3} />
      ) : (
        <input value={value} onChange={e => onChange(e.target.value)} type={type} placeholder={placeholder} />
      )}
    </div>
  );
}

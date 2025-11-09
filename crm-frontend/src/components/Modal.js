import React from "react";
export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div style={{
      position:"fixed", inset:0, display:"flex", alignItems:"center", justifyContent:"center",
      background:"rgba(2,6,23,0.6)", zIndex:60
    }}>
      <div style={{width:420, maxWidth:"95%"}} className="card">
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <strong>{title}</strong>
          <button onClick={onClose} className="btn secondary">Close</button>
        </div>
        <div style={{marginTop:10}}>{children}</div>
      </div>
    </div>
  );
}

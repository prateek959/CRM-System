import React from "react";

export default function Card({ title, children, footer }) {
  return (
    <div className="card">
      {title && <div style={{marginBottom:12}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h3 style={{margin:0}}>{title}</h3>
        </div>
      </div>}
      {children}
      {footer && <div style={{marginTop:12}}>{footer}</div>}
    </div>
  );
}

import React from "react";

export default function NavBar({ page, setPage, token, onLogout }) {
  return (
    <div className="header">
      <div className="brand">
        <div className="logo">CRM</div>
        <div>
          <div className="title">Simple CRM</div>
          <div className="subtitle">Leads • Activities • Dashboard</div>
        </div>
      </div>

      <div className="nav">
        {!token && <>
          <button className={page==="login"?"active":""} onClick={()=>setPage("login")}>Login</button>
          <button className={page==="register"?"active":""} onClick={()=>setPage("register")}>Register</button>
        </>}
        {token && <>
          <button className={page==="dashboard"?"active":""} onClick={()=>setPage("dashboard")}>Dashboard</button>
          <button className={page==="leads"?"active":""} onClick={()=>setPage("leads")}>Leads</button>
          <button className={page==="activities"?"active":""} onClick={()=>setPage("activities")}>Activities</button>
          <button className="logout" onClick={onLogout}>Logout</button>
        </>}
      </div>
    </div>
  );
}

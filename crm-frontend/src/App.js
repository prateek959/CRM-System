import React, { useState, useEffect } from "react";
import "./styles.css";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Leads from "./pages/Leads";
import Activities from "./pages/Activities";
import Dashboard from "./pages/Dashboard";

export default function App(){
  const [page, setPage] = useState("login"); // login | register | dashboard | leads | activities
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(()=> {
    if (token) localStorage.setItem("token", token);
    else localStorage.removeItem("token");
  }, [token]);

  const onLogout = () => { setToken(null); setPage("login"); };

  return (
    <div className="container">
      <NavBar page={page} setPage={setPage} token={token} onLogout={onLogout} />
      <div className="grid">
        <div>
          <div style={{marginBottom:18}}>
            {page==="register" && <Register onRegistered={()=>setPage("login")} />}
            {page==="login" && <Login onLogin={(t)=>{ setToken(t); setPage("dashboard"); }} />}
            {page==="dashboard" && <Dashboard token={token} />}
            {page==="leads" && <Leads token={token} />}
            {page==="activities" && <Activities token={token} />}
          </div>
        </div>

        <div>
          <div className="card">
            <h4 style={{marginTop:0}}>Quick Actions</h4>
            <p className="small">Use these shortcuts to add leads or view latest activities.</p>
            <div style={{marginTop:12}}>
              <button className="btn" onClick={()=>setPage("leads")}>Manage Leads</button>
              <button className="btn secondary" style={{marginLeft:8}} onClick={()=>setPage("activities")}>View Activities</button>
            </div>
          </div>
          <div style={{height:16}}/>
          <div className="card">
            <h4 style={{margin:0}}>Tips</h4>
            <p className="small" style={{marginTop:8}}>Keep passwords safe. This demo stores tokens in localStorage for simplicity.</p>
          </div>
        </div>
      </div>
      <div className="footer">Made with ❤️ — Simple CRM</div>
    </div>
  );
}

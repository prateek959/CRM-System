import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import { createLead, getLeads } from "../utils/api";

export default function Leads({ token }){
  const [leads,setLeads]=useState([]); const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [msg,setMsg]=useState(""); const [q,setQ]=useState("");

  const load = async ()=> {
    const res = await getLeads(token);
    if (Array.isArray(res)) setLeads(res.reverse());
    else setMsg("Error: " + JSON.stringify(res));
  };
  useEffect(()=>{ if(token) load(); },[token]);

  const add = async (e) => {
    e.preventDefault(); setMsg("Creating...");
    const res = await createLead({ name,email }, token);
    if (res?.message || res?.id) { setMsg("Lead added"); setName(""); setEmail(""); load(); }
    else setMsg("Error: "+JSON.stringify(res));
  };

  const filtered = leads.filter(l => l.name.toLowerCase().includes(q.toLowerCase()) || (l.email||"").toLowerCase().includes(q.toLowerCase()));

  return (
    <div>
      <Card title="Add new lead">
        <form onSubmit={add}>
          <Input label="Name" value={name} onChange={setName} placeholder="Lead name" />
          <Input label="Email" value={email} onChange={setEmail} placeholder="Lead email" />
          <div style={{display:"flex", gap:8}}>
            <button className="btn" type="submit">Add Lead</button>
            <button type="button" className="btn secondary" onClick={load}>Refresh</button>
          </div>
          <p className="small">{msg}</p>
        </form>
      </Card>

      <div style={{height:12}} />

      <Card title="Leads">
        <Input label="Search" value={q} onChange={setQ} placeholder="Search name or email" />
        <div className="lead-list" style={{marginTop:12}}>
          {filtered.length===0 && <div className="small">No leads yet</div>}
          {filtered.map(l => (
            <div className="lead-item" key={l.id}>
              <div className="lead-left">
                <div className="avatar">{(l.name||"U").slice(0,1).toUpperCase()}</div>
                <div className="lead-info">
                  <div className="lead-name">{l.name}</div>
                  <div className="lead-email">{l.email || "—"}</div>
                </div>
              </div>
              <div className="small">{l.status || "new"}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

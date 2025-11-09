import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import { addActivity, getActivities } from "../utils/api";

export default function Activities({ token }){
  const [note,setNote]=useState(""); const [msg,setMsg]=useState(""); const [activities,setActivities]=useState([]);

  const load = async () => {
    const res = await getActivities(token);
    if (Array.isArray(res)) setActivities(res.reverse());
    else setMsg("Error: " + JSON.stringify(res));
  };
  useEffect(()=>{ if(token) load(); },[token]);

  const submit = async (e) => {
    e.preventDefault(); setMsg("Adding...");
    const res = await addActivity({ note }, token);
    if (res?.id) { setMsg("Added"); setNote(""); load(); } else setMsg("Error:"+JSON.stringify(res));
  };

  return (
    <div>
      <Card title="Add Activity">
        <Input label="Note" textarea value={note} onChange={setNote} placeholder="Call notes, meeting summary..." />
        <div style={{display:"flex", gap:8}}>
          <button className="btn" onClick={submit}>Add</button>
          <button className="btn secondary" onClick={load}>Refresh</button>
        </div>
        <p className="small">{msg}</p>
      </Card>

      <div style={{height:12}}/>
      <Card title="Recent Activities">
        <div className="lead-list">
          {activities.length===0 && <div className="small">No activities yet</div>}
          {activities.map(a => (
            <div className="lead-item" key={a.id}>
              <div>
                <div style={{fontWeight:700}}>{a.note}</div>
                <div className="small">{new Date(a.date).toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

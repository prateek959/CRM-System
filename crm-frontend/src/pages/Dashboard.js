import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { getLeads, getActivities } from "../utils/api";

export default function Dashboard({ token }){
  const [leadsCount,setLeadsCount]=useState(0);
  const [activitiesCount,setActivitiesCount]=useState(0);

  useEffect(()=> {
    const load = async () => {
      const leads = await getLeads(token);
      const acts = await getActivities(token);
      setLeadsCount(Array.isArray(leads) ? leads.length : 0);
      setActivitiesCount(Array.isArray(acts) ? acts.length : 0);
    };
    if (token) load();
  }, [token]);

  return (
    <div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:12, marginBottom:12}}>
        <Card>
          <div style={{fontSize:22, fontWeight:800}}>{leadsCount}</div>
          <div className="small">Total Leads</div>
        </Card>
        <Card>
          <div style={{fontSize:22, fontWeight:800}}>{activitiesCount}</div>
          <div className="small">Activities</div>
        </Card>
      </div>

      <Card title="Welcome">
        <p className="small">Use the left section to add leads and activities. Data syncs with the backend.</p>
      </Card>
    </div>
  );
}

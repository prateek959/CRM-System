const API = process.env.REACT_APP_API || "http://localhost:3000"; // change to 5000 if backend uses 5000

async function request(path, method="GET", body=null, token=null){
  const headers = { "Content-Type":"application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const res = await fetch(`${API}${path}`, { method, headers, body: body ? JSON.stringify(body) : null });
  const text = await res.text();
  try { return JSON.parse(text); } catch { return text; }
}

export function registerUser(data){ return request("/auth/register","POST",data); }
export function loginUser(data){ return request("/auth/login","POST",data); }
export function createLead(data, token){ return request("/leads/create","POST",data,token); }
export function getLeads(token){ return request("/leads/get","GET",null,token); }
export function addActivity(data, token){ return request("/activities/add","POST",data,token); }
export function getActivities(token){ return request("/activities/get","GET",null,token); }

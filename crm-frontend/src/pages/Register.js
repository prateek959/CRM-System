import React, { useState } from "react";
import Input from "../components/Input";
import { registerUser } from "../utils/api";
import Card from "../components/Card";

export default function Register({ onRegistered }) {
  const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
  const [msg,setMsg]=useState("");

  const submit = async (e) => {
    e.preventDefault();
    setMsg("Registering...");
    const res = await registerUser({ name,email,password });
    if (res?.message) { setMsg(res.message); setName(""); setEmail(""); setPassword(""); setTimeout(()=> onRegistered && onRegistered(),800); }
    else setMsg("Error: " + JSON.stringify(res));
  };

  return (
    <Card title="Create an account">
      <form onSubmit={submit}>
        <Input label="Full name" value={name} onChange={setName} placeholder="Your name" />
        <Input label="Email" value={email} onChange={setEmail} placeholder="you@mail.com" type="email" />
        <Input label="Password" value={password} onChange={setPassword} placeholder="Choose a password" type="password" />
        <div style={{display:"flex", gap:8, marginTop:8}}>
          <button className="btn" type="submit">Register</button>
          <button type="button" className="btn secondary" onClick={()=>onRegistered && onRegistered()}>Back</button>
        </div>
      </form>
      <p className="small" style={{marginTop:8}}>{msg}</p>
    </Card>
  );
}

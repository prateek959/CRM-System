import React, { useState } from "react";
import Input from "../components/Input";
import Card from "../components/Card";
import { loginUser } from "../utils/api";

export default function Login({ onLogin }) {
  const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [msg,setMsg]=useState("");

  const submit = async (e) => {
    e.preventDefault();
    setMsg("Logging in...");
    const res = await loginUser({ email,password });
    if (res?.token) { setMsg("Login success"); onLogin(res.token); }
    else setMsg(res?.message || "Login failed");
  };

  return (
    <Card title="Welcome back">
      <form onSubmit={submit}>
        <Input label="Email" value={email} onChange={setEmail} type="email" />
        <Input label="Password" value={password} onChange={setPassword} type="password" />
        <div style={{display:"flex", gap:8, marginTop:8}}>
          <button className="btn" type="submit">Login</button>
        </div>
        <p className="small" style={{marginTop:6}}>Don't have an account? Click Register from top nav.</p>
      </form>
      <p className="small" style={{marginTop:8}}>{msg}</p>
    </Card>
  );
}

import { useState } from "react";
import API from "../api/api";

function Login() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const login=async()=>{

        const res=await API.post("/api/auth/login",{

            email,
            password

        });

        localStorage.setItem(
            "token",
            res.data.access_token
        );

        window.location="/dashboard";

    }

    return(

        <div>

            <h1>Login</h1>

            <input
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
            />

            <input
            type="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            />

            <button onClick={login}>
                Login
            </button>

        </div>

    );

}

export default Login;
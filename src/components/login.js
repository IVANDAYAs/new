import React,{useState} from "react";
import axios from "axios";
import "./login.css";
import landinglogo from "./images/logo.png";
import qs from 'qs';

export default function(){
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) 
        {
            e.preventDefault();
            axios.post('https://livecom-backend.herokuapp.com/login', qs.stringify({
                mail: email,
                password: password
            }), 
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})

                .then(function (response) {
                    if(response.data.token){
                        window.location.href = "/secret";
                    }
                    else{
                        setMessage(response.data.message);
                    }
                })
                .catch(function (response) {
                    window.alert("fail");
                  
               });
            
        }

    return(
        <div class="wrapper">
            <div class="logo"> 
                <img src={landinglogo} alt="" /> 
            </div>
            <div class="text-center mt-4 name"> Liveco </div>
            <form class="p-3 mt-3" onSubmit={handleSubmit}>
                <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span> <input type="text" name="mail" id="userName" value={email} placeholder="Email Id" onChange={(e) => setEmail(e.target.value) } required/> </div>
                <div class="form-field d-flex align-items-center"> <span class="fas fa-key"></span> <input type="password" name="password" id="pwd" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value) } required/> </div> <button class="btn mt-3">Login</button>
            </form>
            <div class="text-center fs-6"> <a href="#">Forget password?</a> or <a href="/register">Sign up</a> </div>
            <h5>{message}</h5>
        </div>
    );
}
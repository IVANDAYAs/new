import React,{useState} from "react";
import axios from "axios";
import "./register.css";
import qs from 'qs';
import landinglogo from "./images/logo.png";

export default function()
{
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    
        function handleSubmit(e) 
        {
            e.preventDefault();
            axios.post('https://livecom-backend.herokuapp.com/register', qs.stringify({
                name: name,
                phone:phone,
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
                    window.alert(response.data.err);
               });
            
        }
    


    return(
        <section class="login-block">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <form class="md-float-material form-material" onSubmit={handleSubmit}>
                            <div class="auth-box card">
                                <div class="card-block">
                                    <div class="logo"> 
                                        <img src={landinglogo} alt="" /> 
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h3 class="text-center heading">Create your Liveco account</h3>
                                        </div>
                                    </div>
                                        <div class="form-group form-primary"> <input type="text" class="form-control" name="name" placeholder="Name" id="first_name" value={name} onChange={(e) => setName(e.target.value) } required /> </div>
                                        <div class="form-group form-primary"> <input type="number" class="form-control" name="mobile" placeholder="Phone Number"  id="phonenumber" value={phone} onChange={(e) => setPhone(e.target.value)} required/> </div>
                                        <div class="form-group form-primary"> <input type="text" class="form-control" name="email"  placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/> </div>
                                        <div class="form-group form-primary"> <input type="password" class="form-control" name="password" placeholder="Create password"  id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/> </div>
                                        <div class="row">
                                            <div class="col-md-12"> <input type="submit" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20" name="submit" value="Signup Now" /> </div>
                                        </div>
                                    <div class="or-container">
                                        <div class="line-separator"></div>
                                        <div class="or-label">or</div>
                                        <div class="line-separator"></div>
                                    </div>
                                    {/* <div class="row">
                                        <div class="col-md-12"> <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png" /> Signup Using Google</a> </div>
                                    </div> <br /> */}
                                    <p class="text-inverse text-center">Already have an account? <a href="/login" data-abc="true">Login</a></p>
                                    <h5> {message} </h5>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
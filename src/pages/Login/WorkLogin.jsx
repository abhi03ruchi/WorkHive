import React, { useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import { GoogleButton } from 'react-google-button'
import './login.css';

import Login from './Login.png'





function WorkLogin() {
   


    return (
        <div>
            <div className="lcontainer glass">
                <div className="form left">
                    <Typography variant="h4" color={"white"} align="center">Hello! Welcome Back</Typography>
                    <img class="loginImg" src={Login} alt="" />



                    <TextField class="credentials" id="Email" type="email" fullWidth placeholder="Enter Email" ></TextField>
                    <TextField class="credentials" id="Password" type="password" fullWidth placeholder="Enter Password" ></TextField>
                    <Button variant="contained"
                        color="secondary"
                        sx={{ marginTop: "20px", width: "410px", backgroundColor: "#8152BD", height: "48px" }}
                        type="submit" > Sign In</Button>
                        <br/>
                    <p>~ Or ~</p>
                    <div className="Google-Button-cont">
                        <GoogleButton class="google-button" />
                    </div>

                    <Typography variant="h6" color="white" className="register-link">Don't have an account ? <a href="register">Create Account !</a></Typography>

                </div>
                <div >
                    <Typography variant="h1">Join Our Community</Typography>
                </div>

            </div>
        </div>
    );
}

export default WorkLogin;
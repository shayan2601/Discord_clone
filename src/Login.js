import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="Login">
      <div className="login_logo">
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/233px-Discord_logo.svg.png"
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;

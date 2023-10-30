import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import "./input/styles.css";
import Input from "./input/input";

const LoginForm = () => {
  // const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential;
        console.log("details:", user);
        alert("Login was successful!");
        setEmail("");
        setPassword("");
      })
      .catch((errors) => {
        const errorCode = errors.code;
        const errorMessage = errors.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert("Incorrect Email or Password!");
      });
  };

  return (
    <div className="formCard">
      <form onSubmit={handleSignup}>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;

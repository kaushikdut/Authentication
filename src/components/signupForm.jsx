import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import Input from "./input/input";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(auth, email, password);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        alert("Successfully added!");
      } else {
        alert("Passwords are not matching!");
      }
    } catch (error) {
      console.error("Errors:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleClick}>
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
        <Input
          type="password"
          placeholder="ConfirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <button type="submit">
          <h4>SignUp</h4>
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

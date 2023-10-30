import { useState } from "react";
import LoginForm from "./components/loginForm";
import SignupForm from "./components/signupForm";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="App">
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      {isLogin ? <LoginForm /> : <SignupForm />}
      <p>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span onClick={toggleForm} className="toggle-form-link">
          {isLogin ? "Sign up here." : "Log in here."}
        </span>
      </p>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Login from "./LoginForm/LoginForm.jsx";
import SignUp from "./SignUpForm/SignUpForm.jsx";
import './App.css';
import "./index.css"

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="app-container">
      {isLogin ? (
        <Login toggleForm={toggleForm} handleSubmit={handleSubmit} />
      ) : (
        <SignUp toggleForm={toggleForm} handleSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default App;

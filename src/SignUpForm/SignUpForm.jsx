import React, { useState } from "react";
import Image from "../assets/personImage.jpg";
import GoogleSvg from "../assets/icons8-google.svg";
import styles from "./SignUpForm.module.css";

const SignUp = ({ toggleForm, handleSubmit }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ username, email, password });
  };

  return (
    <div className={styles.signUpMain}>
      <div className={styles.signUpLeft}>
        <img src={Image} alt="" />
      </div>
      <div className={styles.signUpRight}>
        <div className={styles.signUpRightContainer}>
       
          <div className={styles.signUpCenter}>
            <h2>Create an account</h2>
            <p>Please enter your details</p>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={styles.passInputDiv}>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.signUpCenterButtons}>
                <button type="submit">Sign Up</button>
                <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Sign Up with Google
                </button>
              </div>
            </form>
          </div>
          <p className={styles.signUpBottomP}>
            Already have an account? <a href="#" onClick={toggleForm}>Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

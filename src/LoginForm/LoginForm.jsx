import React, { useState } from "react";
import Image from "../assets/personImage.jpg";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import styles from "./LoginForm.module.css";


const Login = ({ toggleForm, handleSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ email, password, rememberMe });
  };

  return (
    <div className={styles.loginMain}>
      <div className={styles.loginLeft}>
        <img src={Image} alt="" />
      </div>
      <div className={styles.loginRight}>
        <div className={styles.loginRightContainer}>
         
          <div className={styles.loginCenter}>
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form onSubmit={onSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={styles.passInputDiv}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
              <div className={styles.loginCenterOptions}>
                <div className={styles.rememberDiv}>
                  <input
                    type="checkbox"
                    id="remember-checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember-checkbox">Remember for 30 days</label>
                </div>
                <a href="#" className={styles.forgotPassLink}>Forgot password?</a>
              </div>
              <div className={styles.loginCenterButtons}>
                <button type="submit">Log In</button>
                <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>
          <p className={styles.loginBottomP}>
            Don't have an account? <a href="#" onClick={toggleForm}>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

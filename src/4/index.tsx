// Style
import { FunctionComponent, useState } from "react";
import Eye from "./eye.svg"
import EyeBlocked from "./eye-blocked.svg"
import "./index.scss";

const Task5: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [isEmailActive,setIsEmailActive] = useState(false);
  const [isPassActive, setIsPassActive] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword =()=> {
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }

  const onSubmit = () => {
    // If you want to do something with form submit

    alert(`Email: ${email} \nPassword: ${password}`);
  };

  const classnameforEmail = `form-Item ${isEmailActive ? 'active': ''}`
  const classnameforPass = `form-Item ${isPassActive ? 'active': ''}`
  // const icon = 
  return (
    <div id="task-5">
      <form onSubmit={onSubmit}>
        <div className={classnameforEmail}>
        <input
          className="email-input"
          name="email"
          onChange={(event) => setEmail(event.currentTarget.value)}
          value={email}
          placeholder="User Email"
          onFocus={() => setIsEmailActive(true)}
          onBlur={() => setIsEmailActive(false)}
          autoComplete="off"
        />
        <label>Email</label>
        </div>
        <div className={classnameforPass}>  
          <input
            className="password-input"
            name="password"
            placeholder="User Password"
            onChange={(event) => setPassword(event.currentTarget.value)}
            value={password}
            type={passwordType}
            onFocus={() => setIsPassActive(true)}
            onBlur={() => setIsPassActive(false)}
            autoComplete="off"
          />
          
          <label>Password</label>
          <img alt="show password" className="icon" src={passwordType === "password" ? EyeBlocked : Eye} onClick={() => togglePassword()} />
        </div>
        
        <button className="loginButton">Login</button>
      </form>
    </div>
  );
};

export default Task5;

import React, { useEffect, useState } from "react";
import { validate } from "../components/Validate/validate";
 
import styles from "./Login.module.css"

const Login = () => {
  const [data , setData] = useState({
    username:"",
    email : "" ,
    password : "" ,
    confirmPassword : "" ,
    isAccepted : false
  })

  const [errors , setErrors] = useState({})

  useEffect(() => {
    setErrors(validate(data))
    console.log(errors);
  } , [data])

  const changeHandler = (e) => {
    if (e.target.name === "isAccepted") {
      setData({...data , [e.target.name] : e.target.checked})
    }else{
      setData({...data , [e.target.name] : e.target.value})
    }
  }
  return (
    <div className={styles.container}>
        <form >
          <h2>Sign up</h2>
          <div>
            <label htmlFor="username">Username</label>
            <input 
            type="text" 
            name="username"
            value={data.username} 
            placeholder="Username..." 
            onChange={changeHandler}/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            name="email"
            value={data.email} 
            placeholder="email..." 
            onChange={changeHandler}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            name="password"
            value={data.password} 
            placeholder="Password" 
            onChange={changeHandler}/>
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
            type="password" 
            name="confirmPassword"
            value={data.confirmPassword} 
            placeholder="Confirm Password" 
            onChange={changeHandler}/>
          </div>
          <div>
            <label htmlFor="checkbox">I'm not a robbot</label>
            <input 
            type="checkbox" 
            name="isAccepted"
            value={data.isAccepted} 
            placeholder="Username..." 
            onChange={changeHandler}/>
          </div>
          <div>
            <button type="submit">Sign up</button>
            <span>Already have an account? Login <a href="/">here</a></span>
          </div>
        </form>
    </div>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "../components/Validate/validate";

import styles from "./Login.module.css";
import { notify } from "../components/toast";
import { Link } from "react-router-dom";

const LoginTwo = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data , "login"));
  }, [data, touched]);

  const changeHandler = (e) => {

      setData({ ...data, [e.target.name]: e.target.value });
    }
  

  const touchedHandler = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify("You sign in successfully", "success");
    } else {
      notify("Invalid data!", "error");
      setTouched({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.formcontainer} onSubmit={submitHandler}>
        <h2 className={styles.header}>Login</h2>

        <div className={styles.formfield}>
          <label htmlFor="email">Email</label>
          <input
            className={
              errors.email && touched.email
                ? styles.uncompleted
                : styles.forminput
            }
            type="email"
            name="email"
            value={data.email}
            placeholder="email..."
            onChange={changeHandler}
            onFocus={touchedHandler}
          />

          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>

        <div className={styles.formfield}>
          <label htmlFor="password">Password</label>
          <input
            className={
              errors.password && touched.password
                ? styles.uncompleted
                : styles.forminput
            }
            type="password"
            name="password"
            value={data.password}
            placeholder="Password"
            onChange={changeHandler}
            onFocus={touchedHandler}
          />

          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>


        <div className={styles.formButtons}>
          <button type="submit">Login</button>
          <span>
            Dont have an account? click <Link to="/SignUp">here</Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginTwo;

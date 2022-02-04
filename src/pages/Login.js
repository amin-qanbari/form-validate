import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "../components/Validate/validate";

import styles from "./Login.module.css";
import { notify } from "../components/toast";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data));
  }, [data, touched]);

  const changeHandler = (e) => {
    if (e.target.name === "isAccepted") {
      setData({ ...data, [e.target.name]: e.target.checked });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

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
        username: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.formcontainer} onSubmit={submitHandler}>
        <h2 className={styles.header}>Sign up</h2>

        <div className={styles.formfield}>
          <label htmlFor="username">Username</label>
          <input
            className={
              errors.username && touched.username
                ? styles.uncompleted
                : styles.forminput
            }
            type="text"
            name="username"
            value={data.username}
            placeholder="Username..."
            onChange={changeHandler}
            onFocus={touchedHandler}
          />

          {errors.username && touched.username && (
            <span>{errors.username}</span>
          )}
        </div>

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

        <div className={styles.formfield}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className={
              errors.confirmPassword && touched.confirmPassword
                ? styles.uncompleted
                : styles.forminput
            }
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            placeholder="Confirm Password"
            onChange={changeHandler}
            onFocus={touchedHandler}
          />

          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>

        <div className={styles.formfield}>
          <div className={styles.checkBoxContainer}>
          <label htmlFor="checkbox">I'm not a robbot</label>
          <input
            type="checkbox"
            name="isAccepted"
            value={data.isAccepted}
            placeholder="Username..."
            onChange={changeHandler}
            onFocus={touchedHandler}
          />
          </div>

          {errors.isAccepted && touched.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>

        <div className={styles.formButtons}>
          <button type="submit">Sign up</button>
          <span>
            Already have an account? Login <a href="/">here</a>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;

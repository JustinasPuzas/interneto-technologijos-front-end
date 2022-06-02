import { useState, useRef, Fragment } from "react";
import axios from "axios";
const api = "http://localhost:5000/api";

const LoginPage = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.includes("@")
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const enteredPasswordIsValid = enteredPassword.trim() !== ""; 
  const enteredPasswordIsInvalid = !enteredPasswordIsValid && enteredPasswordTouched;

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const passwordInputBlurHandler = (event) => {
    setEnteredPasswordTouched(true);
  };

  const formSubmissionHandler = async (event) => {
    event.preventDefault();

    setEnteredEmailTouched(true);

    if (!enteredEmailIsValid) {
      return;
    }
    //console.log(await axios.post(`${api}/auth/login`, {email: enteredEmail, password: enteredPassword}))
    //console.log(await loginUser({email: enteredEmail, password: enteredPassword}))
    window.location.href = `http://localhost:5000/api/auth/login`;
    console.log("SUB")
    setEnteredEmail("");
    setEnteredEmailTouched(false);

    setEnteredPassword("");
    setEnteredPasswordTouched(false);
  };

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const passwordInputClasses = enteredPasswordIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <Fragment>
      <form onSubmit={formSubmissionHandler}>
        <div className={emailInputClasses}>
          <label htmlFor="email">Your E-Mail</label>
          <input
            type="email"
            id="email"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
          />
          {emailInputIsInvalid && (
            <p className="error-text">Email isn't valid</p>
          )}
        </div>
        <div className={passwordInputClasses}>
          <label htmlFor="password">Your PassWord</label>
          <input
            type="password"
            id="password"
            onChange={passwordInputChangeHandler}
            onBlur={passwordInputBlurHandler}
            value={enteredPassword}
          />
          {enteredPasswordIsInvalid && (
            <p className="error-text">Password must not be empty.</p>
          )}
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </Fragment>
  );
};

export default LoginPage;

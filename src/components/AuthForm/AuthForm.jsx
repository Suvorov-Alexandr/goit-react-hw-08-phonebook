import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material/";
import toast from "react-hot-toast";
import {
  useRegisterUserMutation,
  useLogInUserMutation,
} from "redux/contactsApi";
import { setUserCredentials } from "redux/auth/authSlice";
import { errorChecking, formOptions } from "./AuthForm.styled";

function AuthForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const [registerUser] = useRegisterUserMutation();
  const [logInUser, { error: logInError }] = useLogInUserMutation();

  useEffect(() => {
    reset();
  }, [location]);

  const isEmailFormatValid = (email) => {
    const validEmailFormat =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validEmailFormat.test(String(email).toLowerCase());
  };

  const isEmailValid = (email) => {
    if (email === "") {
      setEmailError(errorChecking.emailRequired);
      return false;
    } else if (!isEmailFormatValid(email)) {
      setEmailError(errorChecking.emailInvalid);
      return false;
    }
    return true;
  };

  const isPasswordValid = (password) => {
    if (password === "") {
      setPasswordError(errorChecking.passwordRequired);
      return false;
    } else if (password.length < 8) {
      setPasswordError(errorChecking.passwordMinLength);
      return false;
    }
    return true;
  };

  const isNameValid = (name) => {
    if (name === "") {
      setNameError(errorChecking.nameRequired);
      return false;
    }
    return true;
  };

  const isLogInPage = () => {
    return location.pathname === "/login";
  };

  const isAuthFormValid = () => {
    const isLogInForm = isLogInPage();
    const emailValidationPassed = isEmailValid(email);
    const passwordValidationPassed = isPasswordValid(password);
    const nameValidationPassed = isLogInForm ? true : isNameValid(name);

    if (!emailValidationPassed || !passwordValidationPassed) {
      return false;
    }

    if (isLogInForm) {
      return true;
    }
    return nameValidationPassed;
  };

  // const handleNameInputChange = ({ target: { value } }) => {
  //   setName(value);
  //   setNameError(null);
  // };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case "name":
        setName(value);
        setNameError(null);
        break;

      case "email":
        setEmail(value);
        setEmailError(null);
        break;

      case "password":
        setPassword(value);
        setPasswordError(null);
        break;

      default:
        break;
    }
  };

  const handlerSubmit = (evt) => {
    evt.preventDefault();
    const verificationResult = isAuthFormValid();

    if (verificationResult) {
      logInUser({ email, password }).then(({ data }) =>
        data ? successLogInToast(email) : errorLogInToast()
      );
      reset();
    }
  };

  const successLogInToast = (email) =>
    toast.success(`Your user "${email}" has successfully logged in.`);

  const errorLogInToast = () =>
    toast.error(
      "Oops... You are entering an incorrect email address or password."
    );

  const submitRegistrationForm = (evt) => {
    evt.preventDefault();
    const verificationResult = isAuthFormValid();

    if (verificationResult) {
      registerUser({ email, password, name })
        .then(({ data }) => {
          dispatch(setUserCredentials(data));
          successRegisterToast(email);
        })
        .catch((error) =>
          error.name === "TypeError" ? errorRegisterToast(email) : null
        );
      reset();
    }
  };

  const successRegisterToast = (email) =>
    toast.success(`Your user "${email}" has been successfully registered.`);

  const errorRegisterToast = (email) =>
    toast.error(`This ${email} is already registered.`);

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setEmailError(null);
    setPasswordError(null);
  };

  return (
    <>
      <Typography component="h1" variant="h5" sx={{ mb: "15px" }}>
        {location.pathname === "/login"
          ? "Sign in to Phonebook"
          : "Registration"}
      </Typography>
      <Box
        component="form"
        noValidate
        onSubmit={
          location.pathname === "/login"
            ? handlerSubmit
            : submitRegistrationForm
        }
        sx={formOptions}
      >
        {location.pathname === "/registration" && (
          <TextField
            margin="normal"
            required
            id="name"
            label="Name"
            name="name"
            type="name"
            value={name}
            onChange={handleInputChange}
            error={nameError && true}
            helperText={nameError}
          />
        )}
        <TextField
          margin="normal"
          required
          id="email"
          label="Email Address"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={handleInputChange}
          error={emailError && true}
          helperText={emailError}
        />
        <TextField
          margin="normal"
          required
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={handleInputChange}
          error={passwordError && true}
          helperText={passwordError}
        />
        <Button variant="contained" type="submit" sx={{ mt: "10px" }}>
          {location.pathname === "/login" ? "Sign in" : "Submit"}
        </Button>
        {logInError?.status === 400 && (
          <Typography sx={{ color: "red", mt: "10px" }}>
            Oops... User not found or password incorect =(
          </Typography>
        )}
      </Box>
    </>
  );
}

export default AuthForm;

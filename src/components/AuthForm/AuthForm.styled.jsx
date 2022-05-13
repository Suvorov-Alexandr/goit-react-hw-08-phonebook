const errorChecking = {
  emailRequired: "Enter your email.",
  emailInvalid:
    "Invalid email address. Valid e-mail can contain only latin letters, numbers, @ and .",
  passwordRequired: "Enter your password.",
  passwordMinLength:
    "The password is too short, it must contain at least 8 characters.",
  nameRequired: "Enter your name.",
};

const formOptions = {
  display: "flex",
  flexWrap: "wrap",
  width: "320px",
  margin: "auto",
  padding: "15px",
  border: "2px solid #1565c0",
  borderRadius: "10px",
};

export { errorChecking, formOptions };

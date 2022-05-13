import { Route, Routes, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import AuthForm from "components/AuthForm";

function LoginView() {
  return (
    <Box>
      <Routes>
        <Route path="*" element={<Navigate to="login" />} />
        <Route path="login" element={<AuthForm />} />
        <Route path="registration" element={<AuthForm />} />
      </Routes>
    </Box>
  );
}

export default LoginView;

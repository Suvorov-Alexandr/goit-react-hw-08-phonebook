import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import NavUnlisted from "./AuthNavigation.styled";

function AuthNavigation() {
  return (
    <Box sx={{ display: "flex" }}>
      <NavUnlisted>
        <NavLink to="login" className="current">
          <Typography sx={{ color: "#fff" }}>
            <li>Log in</li>
          </Typography>
        </NavLink>
        <NavLink to="registration" className="current">
          <Typography sx={{ color: "#fff" }}>
            <li>Registration</li>
          </Typography>
        </NavLink>
      </NavUnlisted>
    </Box>
  );
}

export default AuthNavigation;

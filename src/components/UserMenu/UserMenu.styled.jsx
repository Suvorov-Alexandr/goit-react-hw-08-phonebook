import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#21db30",
    color: "#21db30",
    boxShadow: `0 0 0 3px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: -2,
      left: -2,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "2px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const paperPropsOptions = {
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};

const refreshButtonOptions = {
  bgcolor: "primary.light",
  color: "primary.contrastText",
  textTransform: "none",
  p: "3px",
  ml: "15px",
  transition: "transform 250ms linear",
  "&:hover": {
    bgcolor: "#148f1e",
    transform: "scale(1.1)",
  },
};

const logOutButtonOptions = {
  bgcolor: "primary.light",
  color: "primary.contrastText",
  textTransform: "none",
  borderRadius: "20px",
  padding: "3px 5px",
  transition: "transform 250ms linear",
  "&:hover": {
    bgcolor: "#ff4747",
    transform: "scale(1.1)",
  },
};

const boxAnimateOptions = {
  p: "0 30px",
  height: "90px",
  bgcolor: "primary.dark",
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "center",
  animation: "pulse 5s infinite",
  "@keyframes pulse": {
    "0% ": {
      bgcolor: "primary.dark",
    },
    "100%": {
      bgcolor: "#9c27b0",
    },
  },
};

const typographyOptions = {
  m: "auto 300px auto auto",
  display: { xs: "none", md: "flex" },
  fontWeight: 700,
  letterSpacing: ".1rem",
  color: "#fff",
};

const avatarOptions = {
  bgcolor: "#bf00e3",
  width: "50px",
  height: "50px",
};

const boxAccountOptions = {
  color: "black",
  textAlign: "left",
  mr: "20px",
};

const boxAvatarOptions = {
  display: "flex",
  alignItems: "center",
  color: "black",
  mb: "10px",
};

const logOutOptions = {
  transition: "transform 250ms linear",
  "&:hover": { transform: "scale(1.1)" },
};

export {
  StyledBadge,
  paperPropsOptions,
  refreshButtonOptions,
  logOutButtonOptions,
  boxAnimateOptions,
  typographyOptions,
  avatarOptions,
  boxAccountOptions,
  boxAvatarOptions,
  logOutOptions,
};

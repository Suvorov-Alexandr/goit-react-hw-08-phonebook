import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Box,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import RefreshIcon from "@mui/icons-material/Refresh";
import toast from "react-hot-toast";
import {
  useLogOutUserMutation,
  useFetchCurrentUserQuery,
} from "redux/contactsApi";
import { getIsLoggedIn, selectCurrentUser } from "redux/auth/authSelectors";
import AuthNavigation from "components/AuthNavigation";
import {
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
} from "./UserMenu.styled";
import { Link, onScroll } from "views/ContactsView";

function UserMenu() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(selectCurrentUser);
  const [logOut] = useLogOutUserMutation();
  const { isFetching } = useFetchCurrentUserQuery();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const successLogOutToast = () => {
    if (isLoggedIn === true) {
      return toast.success(
        `Your user "${user.name}" has successfully logged out.`
      );
    }
  };

  return (
    <Box sx={boxAnimateOptions}>
      {isFetching ? null : (
        <>
          {isLoggedIn ? null : <AuthNavigation />}
          {isLoggedIn && (
            <Box sx={{ display: "flex" }}>
              <Typography variant="h4" noWrap sx={typographyOptions}>
                Welcome to the Phonebook!
              </Typography>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar
                      alt={user.name}
                      src="https://i.ibb.co/bg80KKc/photo-2020-06-03-17-10-28.jpg"
                      sx={avatarOptions}
                    />
                  </StyledBadge>
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={paperPropsOptions}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem
                  sx={{
                    "&:hover": { bgcolor: "rgba(0, 0, 0, 0.1)" },
                  }}
                >
                  <Box sx={boxAccountOptions}>
                    <Box sx={boxAvatarOptions}>
                      <Avatar />
                      <Typography>
                        My account:
                        <IconButton
                          sx={refreshButtonOptions}
                          onClick={() => window.location.reload()}
                        >
                          <RefreshIcon />
                        </IconButton>
                      </Typography>
                    </Box>
                    <Typography>{user.name}</Typography>
                    <Typography>{user.email}</Typography>
                  </Box>
                </MenuItem>
                <Divider />
                <Link
                  to="anchor"
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => onScroll + handleClose()}
                >
                  <MenuItem
                    sx={{
                      "&:hover": { bgcolor: "rgba(0, 0, 0, 0.1)" },
                    }}
                  >
                    <Avatar /> My contacts
                  </MenuItem>
                </Link>
                <Divider />
                <MenuItem
                  sx={{
                    "&:hover": { bgcolor: "rgba(0, 0, 0, 0.1)" },
                  }}
                >
                  <ListItemIcon>
                    <Logout
                      onClick={() => {
                        logOut();
                        successLogOutToast();
                      }}
                      fontSize="small"
                      sx={logOutOptions}
                    />
                  </ListItemIcon>
                  {isLoggedIn ? (
                    <Button
                      sx={logOutButtonOptions}
                      onClick={() => {
                        logOut();
                        successLogOutToast();
                      }}
                    >
                      Log out
                    </Button>
                  ) : (
                    <AuthNavigation />
                  )}
                </MenuItem>
              </Menu>
            </Box>
          )}
        </>
      )}
    </Box>
  );
}

export default UserMenu;

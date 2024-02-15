import { AppBar, Toolbar } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <>
      <AppBar position="relative" color="secondary">
        <Toolbar>
          <NoteIcon />
          <Typography variant="h5">Learning</Typography>
          <Typography style={{ marginLeft: "auto" }}>Posts</Typography>
          <Typography
            style={{ marginLeft: "20px" }}
            component={Link}
            to="/about-us"
          >
            About
          </Typography>
          <Typography style={{ marginLeft: "20px" }}>Home</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

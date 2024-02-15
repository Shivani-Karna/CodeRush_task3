import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Grid,
  Container,
  Button,
} from "@mui/material";
import React from "react";
const HomePage1 = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color="secondary">
        <Toolbar>
          <Typography variant="h6">Posts</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Grid>
          <Container>
            <Typography variant="h3" align="center">
              Posts
            </Typography>
            <Typography variant="h6" color="textSecondary" align="center">
              Description Here
            </Typography>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                <Button variant="contained">Primary Button</Button>
              </Grid>

              <Grid item>
                <Button variant="contained">Secondary Button</Button>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </main>
    </React.Fragment>
  );
};

export default HomePage1;

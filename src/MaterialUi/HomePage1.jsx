import React from "react";
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Grid,
  Container,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

const HomePage1 = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color="secondary">
        <Toolbar>
          <Typography variant="h5">Learning</Typography>
          <Typography style={{ marginLeft: "auto" }}>Posts</Typography>
          <Typography style={{ marginLeft: "20px" }}>About</Typography>
          <Typography style={{ marginLeft: "20px" }}>Home</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Grid>
          <Container>
            <Typography variant="h3" align="center">
              Posts
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              Code Rush works as a gateway to the convergence of talent and
              opportunity. We create a seamless integration of talent into the
              tech landscape through tailored curation and skill cultivation.
              Our firm belief is that the heart of any company, irrespective of
              its size, lies in its talent. Capable and right talent creates a
              foundation through which any organization thrives. Thus, we help
              organizations expand beyond traditional recruitment, we act as a
              strategic partner in shaping and sustaining a workforce.
            </Typography>
          </Container>
          <Grid mt={3}>
            <Container>
              <Grid container spacing={4}>
                <Grid item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://source.unsplash.com/random"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://source.unsplash.com/random"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://source.unsplash.com/random"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </main>
      {/*Footer */}
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center">
          Something here to give the footer a purpose!!
        </Typography>
      </footer>
    </React.Fragment>
  );
};

export default HomePage1;

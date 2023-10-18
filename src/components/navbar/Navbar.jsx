import {
    Typography,
    AppBar,
    Grid,
    Container,
    TextField,
    Box,
  } from "@mui/material";
import Switch from "@mui/material/Switch";
import SearchIcon from "@mui/icons-material/Search";


const label = { inputProps: { "aria-label": "Switch demo" } };

function Navbar({handleSearchInput}) {
  return (
    <AppBar position="relative">
        <Container>
          <Grid
            container
            spacing={10}
            justifyContent="center"
            alignItems="center"
            padding={1}
          >
            <Grid item>
              <Typography variant="h4" fontFamily="pattaya">
                Image Gallery
              </Typography>
            </Grid>
            <Grid item display="flex" gap={4} padding={0}>
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent={"center"}
              >
                <SearchIcon fontSize="large" />
                <TextField
                  onChange={(e) => handleSearchInput(e)}
                  placeholder="Search image here"
                  sx={{ padding: "0" }}
                />
              </Box>
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent={"center"}
                gap={4}
              >
                <Typography sx={{ fontWeight: "bold" }}>Explore</Typography>
                <Typography sx={{ fontWeight: "bold" }}>Collection</Typography>
                <Typography sx={{ fontWeight: "bold" }}>Community</Typography>
              </Box>
            </Grid>
            <Grid
              item
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography sx={{ fontWeight: "bold" }}>Dark Mode</Typography>

              <Switch {...label} />
            </Grid>
          </Grid>
        </Container>
      </AppBar>
  )
}

export default Navbar
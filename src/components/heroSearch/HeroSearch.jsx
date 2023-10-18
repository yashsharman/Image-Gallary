import {
    Typography,
    Card,
    TextField,
    Box,
  } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import heroImg from "../../assets/images/heroImg.png";
function HeroSearch({handleSearchInput}) {
  return (
    <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent="center"
          gap={3}
          sx={{
            backgroundImage: `url(${heroImg})`,
            width: "100%",
            height: "40vh",
            backgroundSize: "cover",
          }}
        >
          <Typography variant="h3" color={"white"}>
            Download High Quality Images by creators
          </Typography>
          <Typography color={"#C4C4C4"}>
            Over 2.4 million+ stock Images by our talented community
          </Typography>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pl: ".5rem",
            }}
          >
            <SearchIcon fontSize="large" sx={{ color: "#808080" }} />
            <TextField
              onChange={(e) => handleSearchInput(e)}
              placeholder="Search high resolution Images, categories, wallpapers"
              sx={{
                padding: "0",
                width: {
                  sm: "20rem",
                  md: "40rem",
                  ":hover": { outline: "none", border: "none" },
                },
              }}
            />
          </Card>
        </Box>
  )
}

export default HeroSearch
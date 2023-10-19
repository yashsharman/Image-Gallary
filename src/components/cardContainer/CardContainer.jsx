import { Typography, Grid, Container } from "@mui/material";
import ImageCard from "../imageCard/ImageCard";

function CardContainer({ imgArry, handlePopup, searchKeyword }) {
  return (
    <Container sx={{ my: 10, cursor: "pointer" }}>
      {searchKeyword && (
        <Typography variant="h3" mb={4} color={"gray"}>
          Search results for "{searchKeyword}"
        </Typography>
      )}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        padding={1}
        display="flex"
        flexDirection={"row"}
      >
        {imgArry.map((img) => {
          return <ImageCard img={img} handlePopup={handlePopup} />;
        })}
      </Grid>
    </Container>
  );
}

export default CardContainer;

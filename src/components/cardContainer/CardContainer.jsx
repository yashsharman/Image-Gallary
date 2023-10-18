import {
    Typography,
    Card,
    Grid,
    Container,
    Box,
  } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

function CardContainer({imgArry, handlePopup}) {
  return (
    <Container sx={{ my: 10 }}>
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
              return (
                <Grid item>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 1,
                    }}
                  >
                    <img src={img.urls.thumb} alt="img" onClick={()=>{
                      handlePopup(img.id)
                    }} />
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      width={"100%"}
                      pt={1}
                    >
                      <Typography color={"black"} textAlign="left">
                        {img.user?.first_name} {img.user?.last_name}
                      </Typography>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        {img?.likes ? (
                          <>
                            <FavoriteIcon
                              fontSize="x-small"
                              sx={{ color: "gray", mx: ".25rem" }}
                            />
                            <Typography color={"black"}>
                              {img?.likes}
                            </Typography>
                          </>
                        ) : null}
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
  )
}

export default CardContainer
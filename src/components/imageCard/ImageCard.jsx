import { Typography, Card, Grid,Box } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

function ImageCard({img, handlePopup}) {
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
        <img
          src={img.urls.thumb}
          alt="img"
          onClick={() => {
            handlePopup(img.id);
          }}
        />
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
          pt={1}
          gap={2}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <img
              src={img.user?.profile_image.small}
              alt=""
              style={{ borderRadius: "100%", padding: "4px" }}
            />
            <Box>
              <Typography color={"black"} textAlign="left" fontSize={"small"}>
                {img.user?.first_name} {img.user?.last_name}
              </Typography>
              <Typography fontSize={"smaller"} textAlign="left" color={"gray"}>
                {img.user?.username && `@${img.user?.username}`}
              </Typography>
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {img?.likes ? (
              <>
                <ThumbUpOffAltIcon color="gray" fontSize="small" />

                <Typography color={"black"}>{img?.likes}</Typography>
              </>
            ) : null}
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}

export default ImageCard;

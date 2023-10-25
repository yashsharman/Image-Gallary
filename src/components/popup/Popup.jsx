import React from "react";
import { Box, Button, Card, Container, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import DownloadIcon from '@mui/icons-material/Download';
import TagContainer from "../tagContainer/TagContainer";

function Popup({ triggered, imgObj, setTriggerPopup, setSearchKeyword }) {
  const { likes, downloads, user, urls, tags } = imgObj;

  const handleDownload = (imageUrl) => {
    console.log(imageUrl)
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = true;
    link.click();
  };

  return triggered ? (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      position={"fixed"}
      top={0}
      left={0}
      width={"100vw"}
      height={"100vh"}
      bgcolor={"rgba(0, 0, 0, 0.25)"}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "fit-content",
            position: "relative",
            overflow: "visible",
            minWidth: "30rem",
            bgcolor: "black",
          }}
        >
          <Button onClick={()=>handleDownload(imgObj.links?.download)} variant="contained" color="success" startIcon={<DownloadIcon/>} sx={{position:"absolute", top:"1rem", left:"1rem"}}>Download</Button>

          <img
            src={urls.regular}
            alt="regularimage"
            style={{ height: "50vh" }}
          />
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
            p={1}
            bgcolor={"white"}
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <img
                src={user.profile_image.medium}
                alt="profile Pic"
                style={{ borderRadius: "100%", padding: "8px" }}
              />
              <Box>
                <Typography variant="h6">
                  {user.first_name} {user.last_name}
                </Typography>
                <Typography
                  fontSize={"small"}
                  color={"gray"}
                  textAlign={"left"}
                >
                  @{user.username}
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"row"} gap={2} py={1}>
              <Typography color={"gray"}>{downloads} Downloads</Typography>
              <Box display={"flex"} flexDirection={"row"} gap={1}>
                <ThumbUpOffAltIcon color={"gray"} />
                <Typography color={"gray"}> {likes}</Typography>
              </Box>
            </Box>
          </Box>
          <Box p={1} bgcolor={"white"} width={"100%"}>
            <Typography
              color="initial"
              variant="h6"
              fontWeight={"bold"}
              textAlign={"left"}
            >
              Related Tags
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"row"}
              flexWrap={"wrap"}
              gap={1}
              py={1}
              width={"100%"}
            >
              {tags.map((obj) => {
                return (
                  <TagContainer
                    tagName={obj.title}
                    setSearchKeyword={setSearchKeyword}
                    setTriggerPopup={setTriggerPopup}
                  />
                );
              })}
            </Box>
          </Box>
          <CancelIcon
            sx={{
              position: "absolute",
              top: "-.5rem",
              right: "-.5rem",
              zIndex: "2",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => setTriggerPopup(false)}
          />
        </Card>
      </Container>
    </Box>
  ) : (
    ""
  );
}

export default Popup;

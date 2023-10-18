import { Box } from "@mui/material"

function TagContainer({tagName}) {
  return (
    <Box bgcolor={"gainsboro"} py={1} px={1.5} width={"fit-content"} sx={{cursor:"pointer", borderRadius:".25rem"}}>{tagName}</Box>
  )
}

export default TagContainer
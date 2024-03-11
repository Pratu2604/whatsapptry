import { Box, Avatar, Typography, Grid, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VideocamIcon from "@mui/icons-material/Videocam";
import { useDispatch, useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { setSelectedState } from "../feature/counter/contactSlice";

function AppBarRight() {
  const contactState:any = useSelector((state:any) => state.contact.contactState);
  let params:any = useParams();
  const selectedContact:any = parseInt(params.id);
//   const dispatch = useDispatch();

  const Index:number = contactState.findIndex(
    (contact:any) => contact.id === selectedContact
  );
  return (
    <Box
      height="65px"
      sx={{ background: "#1f2c33", padding: "0px 20px" }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box display="flex">
        {/* <IconButton  onClick={()=>{console.log(dispatch(setSelectedState(null)));console.log("ok")}}>
          <ArrowBackIcon
            mr={2}
            mt={1}
            sx={{
              display: { lg: "none", md: "none", sm: "none", xs: "block" },
            }}
          />
        </IconButton> */}
        <Box>
          <Avatar />
        </Box>
        <Box display="flex" flexDirection="column" ml={2}>
          <Typography variant="body1" color="white">
            {contactState[Index].name}
          </Typography>
          <Typography variant="caption" color="white">
            online
          </Typography>
        </Box>
      </Box>
      <Box display="flex">
        <Box>
          <VideocamIcon sx={{ color: "white" }} />
        </Box>
        <Box ml={3}>
          <SearchIcon sx={{ color: "white" }} />
        </Box>
        <Box ml={3}>
          <MoreVertIcon sx={{ color: "white" }} />
        </Box>
      </Box>
    </Box>
  );
}
export default AppBarRight;
import { Box, Avatar, Typography, Grid, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VideocamIcon from "@mui/icons-material/Videocam";
import { useDispatch, useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { setSelectedState } from "../feature/counter/contactSlice";
import { Navigate } from "react-router-dom";
// import { ContactSupportOutlined } from "@mui/icons-material";

function AppBarRight() {
  const contactState = useSelector((state) => state.contact.contactState);
  const params = useParams();
  const selectedContact = parseInt(params.id);
  // console.log(selectedContact);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const Index = contactState.findIndex(
    (contact) => contact.id === selectedContact
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
        {/* <Link path="/"> */}
        <IconButton onClick={()=>{console.log(dispatch(setSelectedState(null)));console.log("ok")}}>
          <ArrowBackIcon
            color="white"
            mr={2}
            mt={1}
            sx={{
              display: { lg: "none", md: "none", sm: "none", xs: "block" },
            }}
          />
        </IconButton>
        {/* </Link> */}

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

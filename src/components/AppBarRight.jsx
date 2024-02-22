import { Box, Avatar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VideocamIcon from "@mui/icons-material/Videocam";
import { useSelector } from "react-redux";

function AppBarRight(props) {
  const selectedState=useSelector(state=>state.contact.selectedState)
  return (
    <Box
      height="65px"
      sx={{ background: "#1f2c33", padding: "0px 20px" }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box display="flex" alignItems="center">
        <Avatar />
        <Box display="flex" flexDirection="column" ml={2}>
          <Typography variant="body1" color="white">
            {selectedState.name}
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

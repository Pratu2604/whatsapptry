import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Box } from "@mui/material";

function HomePage() {
  
  return (
    <Box display="flex" flexDirection="row" height="100vh">
      <h1>dfdf</h1>
      <Box width="32%" sx={{ background: "#1f2c33" }}>
        <LeftSide />
      </Box>
      <Box sx={{ border: ".05px solid #2f3b44" }} />
      <Box width="68%" sx={{ background: "#1f2c33" }}>
        <RightSide />
      </Box>
    </Box>
  );
}

export default HomePage;

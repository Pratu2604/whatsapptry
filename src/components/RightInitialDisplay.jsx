import chatbg from "./WhatsAppFront.jpeg";
import { Box } from "@mui/material";

const styles2 = {
  backgroundImage: `url(${chatbg})`,
};
function RightInitialDisplay() {
  return (
    <Box height="100%" width="100%">
      <Box style={styles2} height="100%" width="100%"></Box>
    </Box>
  );
}
export default RightInitialDisplay;

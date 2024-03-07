import { Box, InputBase, IconButton } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";

function TextBarRight(props) {
  return (
    <Box
      height="60px"
      sx={{
        background: "#1f2c33",
        padding: "0px 20px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <AddIcon sx={{ mr: 0.5, color: "white" }} />
      <IconButton>
        <EmojiEmotionsOutlinedIcon sx={{ color: "white" }} />
      </IconButton>
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          color: "white",
          border: ".005px solid ",
          borderRadius: "10px",
        }}
        placeholder="   Type a message"
        value={props.input}
        onChange={props.handleSearchChange}
      />
      <IconButton onClick={props.handleSend}>
        <SendIcon style={{ color: "white" }} />
      </IconButton>
    </Box>
  );
}

export default TextBarRight;

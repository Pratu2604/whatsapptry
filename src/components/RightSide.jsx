import React, { useState } from "react";
import { Box, Paper, Divider } from "@mui/material";
import bg from "./chatbg.jpeg";
import chatbg from "./WhatsAppFront.jpeg";
import AppBarRight from "./AppBarRight";
import TextBarRight from "./TextBarRight";

function RightSide(props) {
  const [input, setInput] = useState("");
  let d = new Date();
  let time = d.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleSend = () => {
    setInput("");
    let newObj = {};
    newObj.text = input;
    newObj.time = time;
    console.log(newObj);
    props.onMsgSend(newObj);
  };
  const handleSearchChange = (e) => {
    setInput(e.target.value);
  };
  const styles1 = {
    backgroundImage: `url(${bg})`,
    height: "100vh",
  };
  const styles2 = {
    backgroundImage: `url(${chatbg})`,
  };

  if (props.selectedState !== null) {
    return (
      <Box
        display="flex"
        flexDirection="row"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="100vw" maxWidth="100%">
          <AppBarRight selectedState={props.selectedState} />
          <Box
            height="calc(100vh - 65px - 60px)"
            sx={{
              overflow: "scroll",
              scrollbarWidth: "none",
            }}
          >
            <Paper style={styles1}>
              {props.selectedState.message.map((messages, index) => (
                <Box display="flex" justifyContent={"flex-end"}>
                  <Box
                    key={index}
                    mt={1}
                    color="#E9EDEF"
                    maxWidth="70%"
                    px={2}
                    py={1}
                    borderRadius="10px"
                    mr={"20px"}
                    bgcolor={"#0b846d"}
                    boxShadow="0px 1px 2px rgba(0, 0, 0, 0.1)"
                  >
                    {messages.text} {messages.time}
                  </Box>
                </Box>
              ))}
            </Paper>
          </Box>
          <Divider />
          <TextBarRight
            input={input}
            handleSearchChange={handleSearchChange}
            handleSend={handleSend}
          />
        </Box>
      </Box>
    );
  } else {
    return (
      <Box height="100%" width="100%">
        <Box style={styles2} height="100%" width="100%"></Box>
      </Box>
    );
  }
}

export default RightSide;

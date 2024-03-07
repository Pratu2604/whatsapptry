import React, { useState } from "react";
import { Box, Paper, Divider, Typography } from "@mui/material";
import bg from "./chatbg.jpeg";
import AppBarRight from "./AppBarRight";
import TextBarRight from "./TextBarRight";
import { useDispatch, useSelector } from "react-redux";
import onMsgSend from "../actions/sendMsg";
import moment from "moment";
import { useParams } from "react-router-dom";
import { setSelectedState } from "../feature/counter/contactSlice";

function RightclickDisplay() {
  const [input, setInput] = useState("");
  const contactState = useSelector((state) => state.contact.contactState);
  const params = useParams();
  const selectedContact = parseInt(params.id);

  const dispatch = useDispatch();
  const Index = contactState.findIndex(
    (contact) => contact.id === selectedContact
  );

  //   useEffect(() => {
  const id = selectedContact;
  dispatch(setSelectedState(id));
  //   });

  let time = moment().format("LT");

  const handleSend = () => {
    if (input.trim()) {
      setInput("");
      let newObj = {};
      newObj.text = input;
      newObj.time = time;
      dispatch(onMsgSend(newObj));
    }
  };

  const handleSearchChange = (e) => {
    setInput(e.target.value);
  };

  const styles1 = {
    backgroundImage: `url(${bg})`,
    height: "fit-content",
    minHeight: "82vh",
  };

  return (
    <Box
      // display="flex"
      // flexDirection="row"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="100vw" maxWidth="100%">
        <AppBarRight />
        <Box
          height="calc(100vh - 65px - 60px)"
          sx={{
            overflow: "scroll",
            scrollbarWidth: "thin",
          }}
        >
          <Paper style={styles1}>
            {contactState[Index].message.map((messages, index) => (
              <Box display="flex" justifyContent={"flex-end"}>
                {console.log(messages)}
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
                  display="flex"
                  justifyContent="space-between"
                  gap="12px"
                >
                  <Typography variant="body1">{messages.text}</Typography>
                  <Typography variant="caption" mt={1.2}>
                    {messages.time}
                  </Typography>
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
}
export default RightclickDisplay;

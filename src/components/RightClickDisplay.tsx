import React, { useState } from "react";
import { Box, Paper, Divider, Typography } from "@mui/material";
import bg from "./chatbg.jpeg";
import AppBarRight from "./AppBarRight";
import TextBarRight from "./TextBarRight";
import { useDispatch, useSelector } from "react-redux";
import onMsgSend from "../actions/sendMsg.ts";
import moment from "moment";
import { useParams } from "react-router-dom";
import { setSelectedState } from "../feature/counter/contactSlice.ts";

function RightclickDisplay() {
  const [input, setInput]:any = useState("");
  // console.log(typeof input);
  const contactState:any = useSelector((state: any) => state.contact.contactState);
  let params: any = useParams();
  const selectedContact:any = parseInt(params.id);

  const dispatch:any = useDispatch();
  const Index:number = contactState.findIndex(
    (contact: any) => contact.id === selectedContact
  );

  //   useEffect(() => {
  const id:number = selectedContact;
  dispatch(setSelectedState(id));

  //   });

  let time: string = moment().format("LT");

  type msgObject = {
    text: string;
    time: string;
  };

  const handleSend = ():any => {
    if (input.trim()) {
      setInput("");
      let newObj: msgObject = {
        text: input,
        time: time,
      };
      dispatch(onMsgSend(newObj));
      // console.log(typeof onMsgSend);
    }
  };

  const handleSearchChange = (e: any) => {
    setInput(e.target.value);
  };

  const styles1 = {
    backgroundImage: `url(${bg})`,
    height: "fit-content",
    minHeight: "82vh",
  };

  return (
    <Box
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
            {contactState[Index].message.map((messages: any, index: any) => (
              <Box display="flex" justifyContent={"flex-end"}>
                {/* {console.log(messages)} */}
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

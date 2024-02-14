import { Box, Paper } from "@mui/material";

function Messagebox(props) {
    console.log(props.selectedState)
  return (
    <Paper style={props.styles1}>
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
            {messages.text}
            
            {messages.time}
          </Box>
        </Box>
      ))}
    </Paper>
  );
}
export default Messagebox;

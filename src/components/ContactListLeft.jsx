import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {
  Box,
  Typography,
  Avatar,
  ListItemAvatar,
  Grid,
  ListItemButton,
} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

function ContactListLeft(props) {

  return (
    <List sx={{ background: "#1f2c33" }}>
      {props.filteredContacts.map((contact, index) => (
        <Grid item >
          <ListItem alignItems="flex-start" key={index}>
            <ListItemButton
              onClick={() => {
                props.handleContactClick(contact);
              }}
              // sx={{backgroundColor:"grey"}}
            >
              <ListItemAvatar>
                <Avatar alt={contact.name} />
              </ListItemAvatar>
              <ListItemText
                primary={<Typography color= "white" variant="body1" ><Box display="flex" justifyContent="space-between"><Box>{contact.name}</Box><Box fontSize="12px" mt={.5}>{contact.message[contact.message.length-1].time}</Box></Box></Typography>}
                secondary={
                  <Typography
                    sx={{ display: "inline", color: "white" }}
                    component="span"
                    variant="caption"
                    color="text.primary"
                  ><Box display="flex">
                    <Box><CheckIcon sx={{height:"18px"}} mt={.07}/></Box>
                    <Box mt={.07}>{contact.message[contact.message.length-1].text}</Box>
                    </Box>
                  </Typography>  
                }
              />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
        </Grid>
      ))}
    </List>
  );
}

export default ContactListLeft;

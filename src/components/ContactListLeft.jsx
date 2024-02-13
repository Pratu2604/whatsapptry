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

  let d = new Date();
  let time =d.toLocaleTimeString(undefined, {
    hour:   '2-digit',
    minute: '2-digit',
});
  return (
    <List sx={{ background: "#1f2c33" }}>
      {props.filteredContacts.map((contact, index) => (
        <Grid item key={index}>
          <ListItem alignItems="flex-start">
            <ListItemButton
              onClick={() => {
                props.handleContactClick(contact);
              }}
            >
              <ListItemAvatar>
                <Avatar alt={contact.name} />
              </ListItemAvatar>
              <ListItemText
                primary={<Typography color= "white" variant="body1" ><Box display="flex" justifyContent="space-between"><Box>{contact.name}</Box><Box fontSize="12px" mt={.5}>{time}</Box></Box></Typography>}
                secondary={
                  <Typography
                    sx={{ display: "inline", color: "white" }}
                    component="span"
                    variant="caption"
                    color="text.primary"
                  ><Box display="flex">
                    <Box><CheckIcon sx={{height:"18px"}} mt={.07}/></Box>
                    <Box mt={.07}>{contact.massage[0]}</Box>
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

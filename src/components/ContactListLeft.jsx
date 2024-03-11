// import Divider from "@mui/material/Divider";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import {
//   Box,
//   Typography,
//   Avatar,
//   ListItemAvatar,
//   Grid,
//   ListItemButton,
// } from "@mui/material";
// import CheckIcon from "@mui/icons-material/Check";
// import { useSelector, useDispatch } from "react-redux";
// import { setSelectedState } from "../feature/counter/contactSlice";
// import { Link } from "react-router-dom";

// function ContactListLeft(props) {
//   const selectedState = useSelector((state) => state.contact.selectedState);
  
//   const dispatch=useDispatch()

//   const handleContactClick = (contact) => {
//     // console.log("&&&&&&&&&&",contact)
//     dispatch(setSelectedState(contact));
//   };

//   return (
    
//       <List sx={{ background: "#1f2c33" }}>
//         {props.filteredContacts.map((contact, index) => (
//           <Link to={`/${contact.id}`}>
//           <Grid item key={index}>
//             <ListItem alignItems="flex-start" key={index}>
//               <ListItemButton
//                 onClick={() => {
//                   console.log("##########", contact.id)
//                   handleContactClick(contact.id);
                  
//                 }}
//                 sx={{
//                   backgroundColor:
//                     selectedState && selectedState - 1 === index
//                       ? "grey"
//                       : "transparent",
//                 }}
//               >
//                 <ListItemAvatar>
//                   <Avatar alt={contact.name} />
//                 </ListItemAvatar>
//                 <ListItemText
//                   primary={
//                     <Typography color="white" variant="body1">
//                       <Box display="flex" justifyContent="space-between">
//                         <Box>{contact.name}</Box>
//                         <Box fontSize="12px" mt={0.5}>
//                           {contact.message[contact.message.length - 1].time}
//                         </Box>
//                       </Box>
//                     </Typography>
//                   }
//                   secondary={
//                     <Typography
//                       sx={{ display: "inline", color: "white" }}
//                       component="span"
//                       variant="caption"
//                       color="text.primary"
//                     >
//                       <Box display="flex">
//                         <Box>
//                           <CheckIcon sx={{ height: "18px" }} mt={0.07} />
//                         </Box>
//                         <Box mt={0.07}>
//                           {contact.message[contact.message.length - 1].text}
//                         </Box>
//                       </Box>
//                     </Typography>
//                   }
//                 />
//               </ListItemButton>
//             </ListItem>
//             <Divider variant="inset" component="li" />
//           </Grid>
//           </Link>
//         ))}
//       </List>
    
//   );
// }

// export default ContactListLeft;

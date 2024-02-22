import React, { useState } from "react";
import AppBarLeft from "./AppBarLeft";
import SearchBarLeft from "./SearchBarLeft";
import ContactListLeft from "./ContactListLeft";
import { Grid,Box } from "@mui/material";
import { useSelector,useDispatch} from 'react-redux';
import {  setSelectedState } from "../feature/counter/contactSlice";

function LeftSide(props) {
  
  const contactState = useSelector((state)=>state.contact.contactState)
  console.log(contactState)
  const dispatch=useDispatch();

  const cloneContactState = [...contactState];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = cloneContactState.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleContactClick = (contact) => {
    dispatch(setSelectedState(contact))
  };

  return (
    <Grid container sx={{ height: "90%" }}>
      <Box width="30%"><AppBarLeft /></Box>
      <Grid container direction="column" height="100%">
        <Grid item>
          <SearchBarLeft handleSearchChange={handleSearchChange} />
        </Grid>
        <Grid item sx={{ flex: 1, overflow: "scroll", scrollbarWidth: "none", width:"100%"}}>
          <ContactListLeft
            filteredContacts={filteredContacts}
            handleContactClick={handleContactClick}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LeftSide;
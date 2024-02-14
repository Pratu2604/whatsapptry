import React, { useState } from "react";
import AppBarLeft from "./AppBarLeft";
import SearchBarLeft from "./SearchBarLeft";
import ContactListLeft from "./ContactListLeft";
import { Grid,Box } from "@mui/material";

function LeftSide(props) {
  //   let d = new Date();
  //   let time =d.toLocaleTimeString(undefined, {
  //     hour:   '2-digit',
  //     minute: '2-digit',
  // });

  const cloneContactState = [...props.contactState];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = cloneContactState.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleContactClick = (contact) => {
    props.setSelectedState(contact);
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
            selectState={props.selectState}
            handleContactClick={handleContactClick}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LeftSide;

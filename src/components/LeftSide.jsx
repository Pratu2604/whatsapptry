import React, { useState } from "react";
import AppBarLeft from "./AppBarLeft";
import SearchBarLeft from "./SearchBarLeft";
import ContactListLeft from "./ContactListLeft";
import { Grid } from "@mui/material";

function LeftSide(props) {
  //   let d = new Date();
  //   let time =d.toLocaleTimeString(undefined, {
  //     hour:   '2-digit',
  //     minute: '2-digit',
  // });


  // const cloneContactState = [...props.contactState];
  let cloneContactState=JSON.parse(JSON.stringify(props.contactState))
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = cloneContactState.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleContactClick = (contact) => {
    // console.log(contact);
    props.setSelectedState(contact);
  };

  return (
    <Grid container sx={{ height: "90%" }}>
      <AppBarLeft />
      <Grid container direction="column" height="100%">
        <Grid item>
          <SearchBarLeft handleSearchChange={handleSearchChange} />
        </Grid>
        <Grid item sx={{ flex: 1, overflow: "scroll", scrollbarWidth: "none" }}>
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

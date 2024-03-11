import React, { useState } from "react";
import AppBarLeft from "./AppBarLeft";
import SearchBarLeft from "./SearchBarLeft";
import ContactListLeft from "./ContactListLeft";
import { Grid, Box } from "@mui/material";
import { useSelector } from "react-redux";

function LeftSide() {
  const contactState: any = useSelector(
    (state: any) => state.contact.contactState
  );

  const cloneContactState: any = [...contactState];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts: any = cloneContactState.filter((contact: any) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Grid container sx={{ height: "90%" }}>
      {/* <Box width="100%"><AppBarLeft/></Box>
      <Grid container direction="column" height="100%">
        <Grid item >
          <SearchBarLeft 
          handleSearchChange={handleSearchChange} 
          />
        </Grid>
        <Grid item sx={{ flex: 1, overflow: "scroll", scrollbarWidth: "none", width:"100%"}}>
          <ContactListLeft
            filteredContacts={filteredContacts}
          />
        </Grid>
      </Grid> */}
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <AppBarLeft />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <SearchBarLeft handleSearchChange={handleSearchChange} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} overflow="scroll" sx={{scrollbarWidth:"none"}} height="89%">
        <ContactListLeft filteredContacts={filteredContacts} />
      </Grid>
    </Grid>
  );
}

export default LeftSide;

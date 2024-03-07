import React, { useState } from "react";
import AppBarLeft from "./AppBarLeft";
import SearchBarLeft from "./SearchBarLeft";
import ContactListLeft from "./ContactListLeft";
import { Grid,Box } from "@mui/material";
import { useSelector} from 'react-redux';

function LeftSide() {
  const contactState = useSelector((state)=>state.contact.contactState)

  const cloneContactState = [...contactState];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = cloneContactState.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Grid container sx={{ height: "90%" }}>
      <Box width="100%"><AppBarLeft/></Box>
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
      </Grid>
    </Grid>
  );
}

export default LeftSide;
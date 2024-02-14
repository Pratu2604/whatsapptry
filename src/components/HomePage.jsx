import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Box } from "@mui/material";
import React, { useState } from "react";

function HomePage() {
  const [contactState ,setContactState]= useState([
    {id:1, name: "Pratiksha",contact_no:9785766685, message: [{text:"Hey Pratiksha",time:"10:10 am"}] },
    {id:2, name: "Pruthvi",contact_no:9785066685, message: [{text:"Hey Pruthvi",time:"10:11 am"}] },
    {id:3, name: "Pranjal",contact_no:9985766685, message: [{text:"Hey Pranjal",time:"10:12 am"}] },
    {id:4, name: "Trupti",contact_no:9885766685, message: [{text:"Hey Trupti",time:"10:13 am"}] },
    {id:5, name: "Prerana",contact_no:8785766685, message: [{text:"Hey Prerana",time:"10:14 am"}] },
    {id:6, name: "Abhinandan",contact_no:7785766685, message: [{text:"Hey Abhinandan",time:"10:15 am"}] },
    {id:7, name: "Abhishek",contact_no:7085766685, message: [{text:"Hey Abhishek",time:"10:16 am"}] },
    {id:8, name: "Mehvish",contact_no:8885766685, message: [{text:"Hey Mehvish",time:"10:17 am"}] },
    {id:9, name: "Nupur",contact_no:9785786685, message: [{text:"Hey Nupur",time:"10:18 am"}] },
    {id:10, name: "Shital",contact_no:8997857685, message: [{text:"Hey Shital",time:"10:19 am"}] },
    {id:11, name: "Shruti",contact_no:7785766995, message: [{text:"Hey Shruti",time:"10:20 am"}] },
  ]);

  const [selectedState, setSelectedState] = useState(null);
  // const [newmsg,setNewmsg]=useState([])

  function onMsgSend(msg){
    let temparr=JSON.parse(JSON.stringify(contactState));
    let msgarr=selectedState.message;
    msgarr.push(msg);
    let index=temparr.findIndex(contact=>contact.contact_no===selectedState.contact_no)
     temparr[index].message=msgarr;
    setContactState(temparr)
    // let index=contactState.findIndex(contact=>contact.contact_no===selectedState.contact_no)
    // contactState[index].message=msgarr;
  }

  return (
    <Box display="flex" flexDirection="row" height="100vh">
      <Box width="30%" sx={{ background: "#1f2c33" }}>
        <LeftSide
          contactState={contactState}
          setSelectedState={setSelectedState}
          selectedState={selectedState}
        />
      </Box>
      <Box sx={{ border: ".05px solid #2f3b44" }} />
      <Box width="70%" sx={{ background: "#1f2c33" }}>
        <RightSide selectedState={selectedState} onMsgSend={onMsgSend} contactState={contactState}/>
      </Box>
    </Box>
  );
}

export default HomePage;

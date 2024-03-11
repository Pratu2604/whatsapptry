import { useSelector } from "react-redux";
import RightSide from "./RightSide";
// import RightSide from "./RightSide";
import {Grid } from "@mui/material";
import LeftSide from "./LeftSide";

function HomePage() {
  const selectedState:number=useSelector((state:any)=>state.contact.selectedState)
  // console.log(typeof selectedState)
  return (
    <Grid container>
      <Grid item xs={12} sm={4} md={4} lg={4} sx={{display: {xs:(selectedState)? 'none':'block', sm:'block'},backgroundColor:"#1f2c33", height:"100vh"}}>
        <LeftSide/>
      </Grid>
      <Grid item sm={8} md={8} lg={8} sx={{ display: {xs:(selectedState)? 'block':'none', sm:'block'},backgroundColor:"#1f2c33",height:"100vh" }} >
        <RightSide/>
      </Grid>
    </Grid>
  );
}

export default HomePage;
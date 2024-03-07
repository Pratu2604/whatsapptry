import { useSelector } from "react-redux";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import {Grid } from "@mui/material";

function HomePage() {
  const selectedState=useSelector(state=>state.contact.selectedState)
  return (
    <Grid container>
      <Grid item xs={12} sm={4} md={4} lg={4} sx={{display: {xs:(selectedState)? 'none':'block', sm:'block'},backgroundColor:"purple", height:"100vh"}}>
        <LeftSide />
      </Grid>
      <Grid item sm={8} md={8} lg={8} sx={{ display: {xs:(selectedState)? 'block':'none', sm:'block'},backgroundColor:"green",height:"100vh" }} >
        <RightSide />
      </Grid>
    </Grid>
  );
}

export default HomePage;
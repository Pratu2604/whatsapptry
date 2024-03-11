import { useSelector } from "react-redux";
import RightSide from "./RightSide";
// import RightSide from "./RightSide";
import {Grid } from "@mui/material";
import LeftSide from "./LeftSide";
import { useMediaQuery,useTheme } from "@mui/material";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

function HomePage() {
  const theme=useTheme();
  const isMobile=useMediaQuery(theme.breakpoints.down('sm'));
  // const selectedState:number=useSelector((state:any)=>state.contact.selectedState)
  // console.log(typeof selectedState)
  return (
    <Grid container>
      {/* <Grid item xs={12} sm={4} md={4} lg={4} sx={{display: {xs:(selectedState)? 'none':'block', sm:'block'},backgroundColor:"#1f2c33", height:"100vh"}}>
        <LeftSide/>
      </Grid>
      <Grid item sm={8} md={8} lg={8} sx={{ display: {xs:(selectedState)? 'block':'none', sm:'block'},backgroundColor:"#1f2c33",height:"100vh" }} >
        <RightSide/>
      </Grid> */}
      {isMobile?(
        <Mobile/>
      ):
      (<Desktop/>)
      }


    </Grid>
  );
}

export default HomePage;
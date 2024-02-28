import { useSelector } from "react-redux";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Box,Grid } from "@mui/material";

function HomePage() {
  const selectedState=useSelector(state=>state.contact.selectedState)
  return (
    <Grid container >
      <Grid item xs={12} sm={4} md={4} lg={4} sx={{display: {xs:(selectedState)? 'none':'block', sm:'block'},backgroundColor:"purple", height:"100vh"}}>
        <LeftSide />
      </Grid>
      <Grid item sm={8} md={8} lg={8} sx={{ display: {xs:(selectedState)? 'block':'none', sm:'block'},backgroundColor:"green",height:"100vh" }} >
        <RightSide />
      </Grid>
    </Grid>
  );
   // const location = useLocation()
    // console.log(location)
    {/* <Grid item  sm={4} md={4} lg={3.5} xl={4} sx={{display:{xs:(sContact)? 'none':'block', sm:'block'}}}>
                <LeftComponent />
            </Grid>
         
            <Grid item sm={8} md={8} lg={8.5} xl={8} xs={12} sx={{display:{xs:(sContact)? 'block':'none', sm:'block'}}}>
                <RightComponent />
            </Grid> */}
}

export default HomePage;
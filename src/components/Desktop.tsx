import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Grid } from "@mui/material";

function Desktop():any{
    return(
        <Grid container>
      <Grid item xs={12} sm={4} md={4} lg={4} bgcolor="#1f2c33" height="100vh">
        <LeftSide/>
      </Grid>
      <Grid item sm={8} md={8} lg={8} bgcolor="#1f2c33" height="100vh" >
        <RightSide/>
      </Grid>
    </Grid>
    );
}
export default Desktop;
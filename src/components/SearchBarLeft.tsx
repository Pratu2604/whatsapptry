import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { Grid, Paper,Box } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";

function SearchBarLeft({handleSearchChange}:any) {
  return (
    <Grid container>
      <Grid item sm={12} md={12} lg={12} width="100%">
        <Box
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            background: "#1f2c33",
            borderBottom: "1px solid #2f3b44",
          }}
        //   position="Fixed"
        >
          <IconButton type="button" aria-label="search">
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, color: "white" }}
            placeholder="Search or start new chat"
            onChange={handleSearchChange}
          />
          <FilterListIcon sx={{ color: "white" }} />
        </Box>
      </Grid>
    </Grid>
  );
}
export default SearchBarLeft;

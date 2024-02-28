// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container>
      <Grid item sm={12} md={12} lg={12}>
        <HomePage />
      </Grid>
    </Grid>
  );
}

export default App;

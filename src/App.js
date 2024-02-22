import "./App.css";
import { store } from "./app/store";
import HomePage from "./components/HomePage";
import {  Grid } from "@mui/material";
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
    <Grid container>
      <Grid item sm={12} md={12} lg={12}>
      <HomePage />
      </Grid>
    </Grid>
  </Provider>
    
  );
}

export default App;

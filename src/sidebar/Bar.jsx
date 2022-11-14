// import "./App.css";
import MiniDrawer from "./components/Sidebar";
import React from "react";
import SignUp from "./components/SignUp";
//import Task from './task';
//import { Route, Router as Routes} from 'react-router-dom';
//import Calender from './components/calender';
// import "./App.css";
import SignIn from "./SignIn.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Conversation from "./components/Conversation";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          // background: "#85CEE9"
          // background: "#1C7493"
          background: "#1C7493"
        }
      }
    }
  }
});

function Bar() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <MiniDrawer />
        </ThemeProvider>
        <Routes>
          <Route path="/" element={<SignIn />}>
            {" "}
          </Route>
          <Route exact path="/home" element={<Home />}>
            {" "}
          </Route>
          <Route exact path="/conversation" element={<Conversation />}>
            {" "}
          </Route>
          <Route exact path="/signup" element={<SignUp />}>
            {" "}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default Bar;

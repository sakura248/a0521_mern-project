import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./context/UserContext";
import { FormProvider } from "./context/FormContext";

import "./index.css";
import App from "./App";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // light: "#757ce8",
      main: "#ffd803",
      // dark: "#002884",
      contrastText: "#272343",
    },
    secondary: {
      // light: "#e3f6f5",
      main: "#e3f6f5",
      // dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <FormProvider>
          <App />
        </FormProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

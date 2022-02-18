import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./context/UserContext";

import "./index.css";
import App from "./App";

// import { createTheme, ThemeProvider } from "@material-ui/core/styles";
// import purple from "@material-ui/core/colors/purple";

// const theme = createTheme({
//   palette: {
//     primary: purple,
//     secondary: {
//       main: "#e3f6f5",
//     },
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <UserProvider>
      <App />
    </UserProvider>
    {/* </ThemeProvider> */}
  </React.StrictMode>,

  document.getElementById("root")
);

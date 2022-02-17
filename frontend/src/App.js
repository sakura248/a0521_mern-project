import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
        </Routes>
        <Products />
      </Router>
    </>
  );
}

export default App;

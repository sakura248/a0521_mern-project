import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProductForm from "./components/ProductForm";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <PrivateRoute>
          <Navigation />
          <Routes>
            {/* <Route index element={<Welcome />} /> */}
            <Route path="/" element={<Welcome />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Products" element={<Products />} />
            {/* <Products /> */}
          </Routes>
        </PrivateRoute>
      </Router>
    </>
  );
}

export default App;

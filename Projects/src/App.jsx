import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import ProductDetails from "./components/pages/ProductDetails";
import Cart from "./components/pages/Cart";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Profile from "./components/pages/Profile";
import Services from "./components/pages/Services";
import Electronics from "./components/pages/Electronics";
import Fashion from "./components/pages/Fashion";
import Grocery from "./components/pages/Grocery";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/ :id"
          element={<ProductDetails />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/services"
          element={<Services />}
        >
          <Route
            path="electronics"
            element={<Electronics />}
          />

          <Route
            path="fashion"
            element={<Fashion />}
          />

          <Route
            path="grocery"
            element={<Grocery />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
import Navbar from "./components/organisms/NavbarOrganism/Navbar";
import Signup from "./components/templates/Signup/Signup";
import Signin from "./components/templates/Signin/Signin";
import Footer from "./components/organisms/FooterOrganism/FooterOrganism";
import Home from "./components/templates/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/templates/About/About";
import Contacts from "./components/templates/Contacts/Contacts";
import Books from "./components/templates/Books/Books";
import SingleBook from "./components/templates/SingleBook/SingleBook";
import Checkout from "./components/templates/Checkout/Checkout";
import Authenticated from "./Utils/Authenticated";
import "./App.scss";
import AdminNavBar from "../src/components/organisms/AdminNavBar/AdminNavBar";
import AdminAuth from "./Utils/AdminAuth";
import { useEffect } from "react";
import { useState } from "react";
import jwtDecode from "jwt-decode";
function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <div className="app-nav-container">
            <Navbar />
          </div>
          <div className="app-middle-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="/books" element={<Books />} />
              <Route path="/books/:id" element={<SingleBook />} />
              <Route element={<Authenticated />}>
                <Route path="/checkout" element={<Checkout />} />
              </Route>
              <Route element={<AdminAuth />}>
                <Route path="admin/books" element={<Books />} />
                <Route path="admin/users" element={<h1>Users</h1>} />
                <Route path="admin/orders" element={<h1>Orders</h1>} />
                <Route path="admin/discounts" element={<h1>Discounts</h1>} />
              </Route>
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
          </div>
          <div className="app-footer-container">
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

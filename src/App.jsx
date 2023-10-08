import Navbar from "./components/organisms/NavbarOrganism/Navbar";
import Signup from "./components/templates/Signup/Signup";
import Signin from "./components/templates/Signin/Signin";
import Footer from "./components/organisms/FooterOrganism/FooterOrganism";
import Home from "./components/templates/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/templates/About/About";
import Contacts from "./components/templates/Contacts/Contacts";
import Books from "./components/templates/Books/Books";
import Checkout from "./components/templates/Checkout/Checkout";
import Authenticated from "./Utils/Authenticated";
import "./App.scss";
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
              <Route element={<Authenticated />}>
                <Route path="/checkout" element={<Checkout />} />
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

import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Books from "./components/Books/Books";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contacts/>} />
          <Route path="/books" element={<Books/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;

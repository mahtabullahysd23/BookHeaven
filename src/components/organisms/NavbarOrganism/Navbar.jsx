import "./Navbar.style.scss"
import { SlBasket } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar_logo">
            <h2>BookHeaven</h2>
        </div>
        <div className="navbar_links">
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/books">BOOKS</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </div>
        <div className="nav_icons">
            <ul>
            <li><Link to="/signin">SIGN IN</Link></li>
            <li><Link to="/signup">SIGN UP</Link></li>
            <li><Link to="/search"><SlMagnifier/></Link></li>
            <li><Link to="/wishlist"><SlHeart/></Link></li>
            <li><Link to="/cart"><SlBasket/></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;

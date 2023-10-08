import "./Navbar.style.scss";
import { SlBasket } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../../Store/Slices/modalSlice";
import SideModal from "../../atoms/SideModal/SideModal";
import CartItemOrganism from "../CartItemOrganism/CartItemOrganism";

const Navbar = () => {
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const isSideModalOpen = useSelector((state) => state.modal.cartModal);
  const handleClickOpenModal = () => {
    dispatch(openModal("cartModal"));
  }
  const closeSideModal = () => {
    dispatch(closeModal("cartModal"));
  }
  return (
  <>
   <div className="navbar">
      <div className="navbar_logo">
        {/* <img style={{
                height: '50px',
            }} src ="../../../../public/logo.png"></img> */}
        <h1>BookHeaven</h1>
      </div>
      <div className="navbar_links">
        <ul>
          <li>
            <NavLink activeclassname="active" to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/books">
              BOOKS
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/about">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/contact">
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav_icons">
        <ul>
          {!token ? (
            <>
              <li>
                <NavLink activeclassname="active" to="/signin">
                  SIGN IN
                </NavLink>
              </li>
              <li>
                <NavLink activeclassname="active" to="/signup">
                  SIGN UP
                </NavLink>
              </li>
            </>
          ) : (
            <></>
          )}
          <li>
          <div className="nav-icon-div" onClick={handleClickOpenModal}>
              <SlHeart />
            </div>
          </li>
          <li>
            <div className="nav-icon-div" onClick={handleClickOpenModal}>
              <SlBasket />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <SideModal isOpen={isSideModalOpen} onClose={closeSideModal}>
    <CartItemOrganism />
  </SideModal>
  </>
  );
};

export default Navbar;

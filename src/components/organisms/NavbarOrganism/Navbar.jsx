import "./Navbar.style.scss";
import { SlBasket } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../../Store/Slices/modalSlice";
import SideModal from "../../atoms/SideModal/SideModal";
import CartItemOrganism from "../CartItemOrganism/CartItemOrganism";
import { useEffect, useState } from "react";
import ProfileName from "../../molecules/ProfileNameMolecule/ProfileNameMolecule";
import jwtDecode from "jwt-decode";
import RedDot from "../../atoms/CountDot/CountDot";

const Navbar = () => {
  const email = useSelector((state) => state.user.email);
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [itemCount, setItemCount] = useState(0);

  const numOfbooks = useSelector((state) => state.cart.numberOfItems);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(jwtDecode(localStorage.getItem("token")));
      setToken(localStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, [email]);

  const dispatch = useDispatch();
  const isSideModalOpen = useSelector((state) => state.modal.cartModal);
  const handleClickOpenModal = () => {
    dispatch(openModal("cartModal"));
  };
  const closeSideModal = () => {
    dispatch(closeModal("cartModal"));
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar_logo">
          <img
            style={{
              height: "71px",
            }}
            src="../../../../public/logo.png"
          ></img>
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
                <div className="sign-in-up">
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
                </div>
              </>
            ) : (
              <>
                <div>
                  <ProfileName
                    username={user ? user.data.user.name.split(" ")[0] : ""}
                    profileImage={"/public/myimg.png"}
                  />
                </div>
                <li>
                  <div className="nav-icon-div" onClick={handleClickOpenModal}>
                    <SlHeart />
                  </div>
                </li>
                <li>
                  <div className="nav-icon-div" onClick={handleClickOpenModal}>
                    <div className="cart-icon">
                      <SlBasket />
                      <RedDot count={numOfbooks} />
                    </div>
                  </div>
                </li>
              </>
            )}
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

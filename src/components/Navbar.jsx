import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/doggies.jpg";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          {/* <img src={Logo} alt="" /> */}
          <h1>The Pets Blog</h1>
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=dogs">
            <h6>DOGS</h6>
          </Link>
          <Link className="link" to="/?cat=cats">
            <h6>CATS</h6>
          </Link>
          <Link className="link" to="/?cat=birds">
            <h6>BIRDS</h6>
          </Link>
          <Link className="link" to="/?cat=lizards">
            <h6>LIZARDS</h6>
          </Link>
          <Link className="link" to="/?cat=snakes">
            <h6>SNAKES</h6>
          </Link>
          <Link className="link" to="/?cat=hamsters">
            <h6>HAMSTERS</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
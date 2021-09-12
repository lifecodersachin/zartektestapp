import { useSelector } from "react-redux";
import leftArrow from "../assets/icons/arrow-left.svg";
import "./navbar.css";

const Navbar = () => {
  const { count } = useSelector((state) => state.counter);

  return (
    <div className="navbar-wrapper">
      <div className="nav-left-container">
        <img src={leftArrow} alt="Go-back" className="go-back-arrow" />
        <h2 className="page-title">UNI Resto Cafe</h2>
      </div>
      <div className="nav-right-container">
        <a href="#" className="my-orders">
          My Orders
        </a>
        <div className="cart-icon">
          <span className="fa-stack has-badge" data-count={count}>
            <i className="fa fa-circle fa-stack-2x fa-inverse"></i>
            <i className="fa fa-shopping-cart fa-stack-2x red-cart"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

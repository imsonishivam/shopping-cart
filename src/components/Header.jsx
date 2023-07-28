import React from "react";
import { Link } from "react-router-dom";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <nav>
      <h2>Logo Here.</h2>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <LiaCartArrowDownSolid />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;

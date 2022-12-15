import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import InputBase from "@mui/material/InputBase";
import Dropdown from "./Dropdown";
import { useStateValue } from "../../StateProvider";
import { auth } from "./../../firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const userLogout = () => {
        auth.signOut();
    };

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
            </Link>
            <div className="header__search">
                <InputBase className="header__searchInput" startAdornment={<Dropdown className="header__searchDropdown" />} endAdornment={<SearchIcon className="header__searchIcon" />} />
            </div>
            <div className="header__nav">
                {user ? (
                    <Link className="header__navMenu" to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
                        <div className="header__navMenu" onClick={userLogout}>
                            <span className="top">{user.email}</span>
                            <span className="bottom">Sign Out</span>
                        </div>
                    </Link>
                ) : (
                    <Link className="header__navMenu" to="/login" style={{ color: "inherit", textDecoration: "inherit" }}>
                        <div className="header__navMenu">
                            <span className="top">Hello</span>
                            <span className="bottom">Sign In</span>
                        </div>
                    </Link>
                )}

                <div className="header__navMenu">
                    <span className="top">Returns</span>
                    <span className="bottom">& Orders</span>
                </div>
                <div className="header__navMenu">
                    <span className="top">Your</span>
                    <span className="bottom">Prime</span>
                </div>
                <Link className="header__navBasket" to="/checkout" style={{ color: "inherit", textDecoration: "inherit" }}>
                    <AddShoppingCartIcon fontSize="large" />
                    <span className="header__navBasketCount">{basket?.length}</span>
                </Link>
            </div>
        </div>
    );
}

export default Header;
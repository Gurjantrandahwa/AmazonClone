import React from "react";
import "./Header.css";
// import logo3 from "../../Images/logo3.png"
import { Search, ShoppingCart} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useStateValue} from "../../Common/StateProvider/StateProvider";
import {Badge} from "@mui/material";
import {auth} from "../../Common/Firebase";

function Header() {
    const [{cart, user}, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user){
            auth.signOut()
        }
    }
    return <div className={"header"}>
        <Link to={"/"}> <img className={"header-logo"} src={"https://www.teahub.io/photos/full/211-2119109_amazon-music-logo-transparent.jpg"} alt={""}/></Link>

        <div className={"header-search"}>
            <input className={"header-search-input"}
                   type={"text"}/>
            <Search className={"header-search-icon"}/>
        </div>
        <div className={"header-nav"}>
            <div onClick={handleAuthentication} className={"header-option"}>
                <Link to={!user && "/login"}>
                    <span className={"header-option1"}> Hello {!user?"Guest":user.email}  </span>
                    <span className={"header-option2"}> {user ? 'Sign Out' : 'Sign In'} </span>
                </Link>
            </div>
            <Link to={"/orders"}>
                <div className={"header-option"}>
                 <span className={"header-option1"}>
                    Returns
                </span>
                    <span className={"header-option2"}>
                    & orders
                </span>
                </div>
            </Link>

            <div className={"header-option"}>
                 <span className={"header-option1"}>
                    Your
                </span>
                <span className={"header-option2"}>
                Prime
                </span>
            </div>
            <Link to={"/checkout"}>
                <div className={"header-option-icon"}>
                    <Badge className="header-option2 header-count">
                        <ShoppingCart/>
                        {cart?.length}</Badge>
                </div>
            </Link>
        </div>
    </div>
}

export default Header
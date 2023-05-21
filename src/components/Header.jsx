import React from "react";
function Header(props) {
    return (
        <div className="header">
            <div className="headerLeft">
                <img className="headerLogo" src="#" />
                <ul className="headerName">
                    <li><b>My e-shop</b></li>
                    <li><span>Powered by Vladikim</span></li>
                </ul>
            </div>
            <div className="headerRight">
                <div className="cart">
                    <img src="img/cart.svg" onClick={props.onOrOffCart} />
                    <span>1205p</span>
                </div>
                <div className="heart">
                    <img src="img/favorite.svg" />
                </div>
                <div className="person">
                    <img src="img/person.svg" />
                </div>
            </div>
        </div>
    )
}
export default Header
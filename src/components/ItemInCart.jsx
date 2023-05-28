import React from "react";
import { AppContext } from "../App";

function ItemInCart(props) {
    const { addProductsinCart } = React.useContext(AppContext)
    const { productsInCart } = React.useContext(AppContext)

    function deleteOrNot() {
        addProductsinCart(props)
    }

    return (
        <div className="cartInfo">
            <div className="cardInCart">
                <img width={70} height={70} src={props.image} />
                <div className="discribeInCart">
                    <span>{props.title}</span>
                    <b>{props.price} руб.</b>
                </div>
                <img width={32} height={32} src="img/cancel.svg" onClick={deleteOrNot} />
            </div>
        </div>
    )
}
export default ItemInCart
import React from "react";

function ItemInCart(props) {
    function deleteButton() {
        props.deleteProductsInCart(props)
    }
    return (
        <div className="cartInfo">
            <div className="cardInCart">
                <img width={70} height={70} src={props.image} />
                <div className="discribeInCart">
                    <span>{props.title}</span>
                    <b>{props.price} руб.</b>
                </div>
                <img width={32} height={32} src="img/cancel.svg" onClick={deleteButton} />
            </div>
        </div>
    )
}
export default ItemInCart
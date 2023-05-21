import React from "react";
import ItemInCart from "./ItemInCart";
function Cart(props) {
    return (
        <div className="cartContainer">
            <div className="cartRight">
                <div className="cartHeader">
                    <div>Корзина</div>
                    <div> <img src="img/cancel.svg" width={32} onClick={props.onOrOffCart} /></div>
                </div>
                {props.productsInCart.map(elem => <ItemInCart deleteProductsInCart={props.deleteProductsInCart}
                    title={elem.title}
                    price={elem.price}
                    image={elem.image} />)}
                <div className="cartBottom">
                    <div className="order">
                        <ul className="total">
                            <li>
                                Итого:
                            </li>
                            <li>
                                21498руб
                            </li>
                        </ul>
                        <ul className="taxes">
                            <li>
                                Налог 5%
                            </li>
                            <li>
                                1074руб
                            </li>
                        </ul>
                    </div>
                    <button>Оформить заказ</button>
                </div>
            </div>
        </div>
    )
}
export default Cart
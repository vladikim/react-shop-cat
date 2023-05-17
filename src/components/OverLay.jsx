import React from "react";
function OverLay(props) {
    return (
        <div className="cartContainer">
            <div className="cartRight">
                <div className="cartHeader">
                    <div>Корзина</div>
                    <div> <img src="img/cancel.svg" width={32} onClick={props.onCart} /></div>
                </div>

                <div className="cartInfo">
                    <div className="cardInCart">
                        <img width={70} height={70} src="img/person.svg" />
                        <div className="discribeInCart">
                            <span>Мужские Кроссовки Nike Air Max 270</span>
                            <b>12 999 руб.</b>
                        </div>
                        <img width={32} height={32} src="img/cancel.svg" />
                    </div>
                </div>
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
export default OverLay
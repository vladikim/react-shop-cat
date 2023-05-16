import React from "react";

function ProductItem(props) {
    return (
        <div className="productItem">
            <div className="likeItem">
                <img src="img/likeitem.svg" />
            </div>
            <div className="productImg">
                <img height={112} src={props.image} />
            </div>
            <span>{props.title}</span>
            <div className="productOnCart">
                <div className="productPrice">
                    <span className="priceWord">Цена:</span>
                    <span className="price">{props.price} руб</span>
                </div>
                <div className="onCart">
                    <img src="img/oncart.svg" />
                </div>
            </div>
        </div>

    )
}
export default ProductItem
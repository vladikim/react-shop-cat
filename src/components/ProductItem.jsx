import React from "react";

function ProductItem(props) {
    const [like, setLike] = React.useState(false)
    const [addOnCart, setAddOnCart] = React.useState(false)
    function handleCart() {
        setAddOnCart(!addOnCart)
    }

    function handleLike() {
        setLike(!like)
    }
    return (
        <div className="productItem">
            <div className="likeItem">
                <img onClick={handleLike} src={like ? 'img/likeitem-checked.svg' : 'img/likeitem.svg'} />
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
                    <img onClick={handleCart} src={addOnCart ? "img/oncart-checked.svg" : 'img/oncart.svg'} />
                </div>
            </div>
        </div>

    )
}
export default ProductItem
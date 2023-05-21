import React from "react";

function ProductItem(props) {
    const [like, setLike] = React.useState(false)
    const [addOnCart, setAddOnCart] = React.useState(false)
    function handleCart() {
        setAddOnCart(!addOnCart)
    }
    function func() {
        props.deleteButton(addOnCart)
        handleAddToCart()
        handleCart()
    }

    function info() {
        props.handleInfo(props)
    }

    function handleAddToCart() {
        props.addProductsToCart(props)
    }

    function handleLike() {
        setLike(!like)
    }
    return (
        <div className="productItem" >
            <div className="likeItem">
                <img onClick={handleLike} src={like ? 'img/likeitem-checked.svg' : 'img/likeitem.svg'} />
            </div>
            <div className="productImg" onClick={info}>
                <img height={112} src={props.image} />
            </div>
            <span>{props.title}</span>
            <div className="productOnCart">
                <div className="productPrice">
                    <span className="priceWord">Цена:</span>
                    <span className="price">{props.price} руб</span>
                </div>
                <div className="onCart">
                    <img onClick={func} src={addOnCart ? "img/oncart-checked.svg" : 'img/oncart.svg'} />
                </div>
            </div>
        </div>

    )
}
export default ProductItem
import React from "react";
import { AppContext } from "../App";


function ProductItem(props) {
    const { addProductsinCart } = React.useContext(AppContext)
    const { isAdded } = React.useContext(AppContext)
    const { addInFavorites } = React.useContext(AppContext)
    const { IsFavorited } = React.useContext(AppContext)
    function addedOrNotInFav() {
        addInFavorites(props)
        console.log(props)
    }
    function addedOrNotToCart() {
        addProductsinCart(props)
    }

    return (
        <div className="productItem" >
            <div className="likeItem" onClick={addedOrNotInFav}>
                <img src={IsFavorited(props) ? 'img/likeitem-checked.svg' : 'img/likeitem.svg'} />
            </div>
            <div className="productImg" >
                <img height={112} src={props.image} />
            </div>
            <span>{props.title}</span>
            <div className="productOnCart">
                <div className="productPrice">
                    <span className="priceWord">Цена:</span>
                    <span className="price">{props.price} руб</span>
                </div>
                <div className="onCart">
                    <img src={isAdded(props) ? "img/oncart-checked.svg" : 'img/oncart.svg'} onClick={addedOrNotToCart} />
                </div>
            </div>
        </div>

    )
}
export default ProductItem
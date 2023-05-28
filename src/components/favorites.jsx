import React from "react";
import ProductItem from "./ProductItem";
function Favorites(props) {

    return <div className="catalog">
        <div className="catalogHeader">
            <div className="catalogTitle">
                <b>Избранное</b>
            </div>
        </div>
        <div className="catalogProducts">
            {props.favoritesProducts.map(elem => <ProductItem
                title={elem.title}
                price={elem.price}
                image={elem.image}
                key={elem.id}
            />)}
        </div>
    </div>
}
export default Favorites
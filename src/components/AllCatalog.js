import React from "react";
import ProductItem from "./ProductItem";
import CatalogHeader from "./CatalogHeader";

function AllCatalog(props) {
    const [prod, setProd] = React.useState([])

    function handleChange(event) {
        setProd(event.target.value)
    }
    function getAll() {
        return props.allProducts.map((elem, index) => {
            return <ProductItem title={elem.title} image={elem.image} price={elem.price} key={index} />
        })
    }
    function getProductsByCatalog(from) {
        fetch(`https://fakestoreapi.com/products/category/${from}`)
            .then(res => res.json())
            .then(json => {
                return json.map((elem, index) => {
                    return <ProductItem title={elem.title} image={elem.image} price={elem.price} key={index} />
                })
            })
    }

    return <div className="catalog">
        <div className="catalogHeader">
            <div className="catalogTitle">
                <select value={prod} onChange={(event) => handleChange(event)}>
                    {props.catalog.map((elem, index) => {
                        return <option key={index}>{elem}</option>
                    })}
                </select>
            </div>
            <div className="catalogSearch">
                <img src="img/search.svg" />
                <input type="text" placeholder="Поиск..." />
            </div>
        </div>
        <div className="catalogProducts">
            {getProductsByCatalog(prod)}
        </div>
    </div>
}

export default AllCatalog
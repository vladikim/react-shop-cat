import React from "react";
import ProductItem from "./ProductItem";
import { AppContext } from "../App";

function AllCatalog() {
    const { allProducts } = React.useContext(AppContext)
    const { allCatalog } = React.useContext(AppContext)
    const { handleFrom } = React.useContext(AppContext)
    const { from } = React.useContext(AppContext)
    const { productsFromCatalog } = React.useContext(AppContext)

    const [search, setSearch] = React.useState('')
    function handleSearch(event) {
        setSearch(event.target.value)
        console.log(search)
    }

    return <div className="catalog">
        <div className="catalogHeader">
            <div className="catalogTitle">
                <select onChange={(event) => handleFrom(event)}>
                    <option key={1111}>All</option>
                    {allCatalog.map((elem, index) => {
                        return <option key={index}>{elem}</option>
                    })}
                </select>
            </div>
            <div className="catalogSearch">
                <img src="img/search.svg" />
                <input type="text" placeholder="Поиск..." value={search} onChange={handleSearch} />
            </div>
        </div>
        <div className="catalogProducts">
            {from === 'All' ? allProducts.filter(elem => elem.title.toLowerCase().includes(search)).map(elem => <ProductItem
                title={elem.title}
                price={elem.price}
                image={elem.image}
                key={elem.id}
            />
            ) : productsFromCatalog.filter(elem => elem.title.toLowerCase().includes(search)).map(elem => <ProductItem
                title={elem.title}
                price={elem.price}
                image={elem.image}
                key={elem.id}
            />)}
        </div>
    </div>
}

export default AllCatalog
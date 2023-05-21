import React from "react";
import ProductItem from "./ProductItem";

function AllCatalog(props) {
    const [catalogs, setCatalogs] = React.useState([])
    const [products, setProducts] = React.useState([])
    const [productsFromCatalog, setProductsFromCatalog] = React.useState([])
    const [from, setFrom] = React.useState('')

    async function getProductsFromCatalog(from) {
        try {
            let response = await fetch(`https://fakestoreapi.com/products/category/${from}`)
            if (!response.ok) {
                throw new Error('Ошибка получения данный с сервера')
            }
            let json = await response.json()
            setProductsFromCatalog(json)
        } catch (err) {
            console.log(err)
        }
    }

    async function getCatalogsFromApi() {
        try {
            let response = await fetch('https://fakestoreapi.com/products/categories')
            if (!response.ok) {
                throw new Error('ошибка получения данных с сервера')
            }
            let json = await response.json()
            setCatalogs(json)
        } catch (err) {
            console.log(err)
        }
    }

    async function getAllFromApi() {
        try {
            let response = await fetch('https://fakestoreapi.com/products')
            if (!response.ok) {
                throw new Error('ошибка получения данных с сервера')
            }
            let json = await response.json()
            setProducts(json)
        } catch (err) {
            console.log(err)
        }
    }

    function handleChange(event) {
        setFrom(event.target.value)
    }

    React.useEffect(() => {
        getAllFromApi()
        getCatalogsFromApi()
        getProductsFromCatalog(from)

    }, [from])

    function getResult() {
        if (from !== 'All') {
            return productsFromCatalog
                .filter(elem => elem.title.toLowerCase().includes(search))
                .map((elem, index) => (
                    <ProductItem addProductsToCart={props.addProductsToCart}
                        handleInfo={props.handleInfo}
                        deleteButton={props.deleteButton}
                        key={index}
                        title={elem.title}
                        image={elem.image}
                        price={elem.price} />))
        } else {
            return products
                .filter(elem => elem.title.toLowerCase().includes(search))
                .map((elem, index) => (
                    <ProductItem addProductsToCart={props.addProductsToCart}
                        handleInfo={props.handleInfo}
                        deleteButton={props.deleteButton}
                        key={index}
                        title={elem.title}
                        image={elem.image}
                        price={elem.price} />))
        }
    }

    const [search, setSearch] = React.useState('')

    function handleSearch(event) {
        setSearch(event.target.value)
    }

    return <div className="catalog">
        <div className="catalogHeader">
            <div className="catalogTitle">
                <select onChange={(event) => { handleChange(event) }}>
                    <option key={1111}>All</option>
                    {catalogs.map((elem, index) => (
                        <option key={index}>{elem}</option>
                    ))}
                </select>
            </div>
            <div className="catalogSearch">
                <img src="img/search.svg" />
                <input type="text" placeholder="Поиск..." value={search} onChange={(event) => handleSearch(event)} />
            </div>
        </div>
        <div className="catalogProducts">
            {getResult()}

        </div>
    </div>
}

export default AllCatalog
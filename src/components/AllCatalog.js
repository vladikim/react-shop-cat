import React from "react";
import ProductItem from "./ProductItem";

function AllCatalog() {
    const [catalogs, setCatalog] = React.useState([])
    const [products, setProducts] = React.useState([])
    const [productsFromCatalog, setproductsFromCatalog] = React.useState([])
    const [from, setFrom] = React.useState('')

    function handleChange(event) {
        setFrom(event.target.value)
    }
    React.useEffect(() => {
        getAllFromApi()
    }, [])

    React.useEffect(() => {
        getAllFromApi()
        getCatalogsFromApi()
        getProductsFromCatalog(from)

    }, [from])

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

    async function getCatalogsFromApi() {
        try {
            let response = await fetch('https://fakestoreapi.com/products/categories')
            if (!response.ok) {
                throw new Error('ошибка получения данных с сервера')
            }
            let json = await response.json()
            setCatalog(json)
        } catch (err) {
            console.log(err)
        }
    }

    async function getProductsFromCatalog(from) {
        try {
            let response = await fetch(`https://fakestoreapi.com/products/category/${from}`)
            if (!response.ok) {
                throw new Error('Ошибка получения данный с сервера')
            }
            let json = await response.json()
            setproductsFromCatalog(json)
        } catch (err) {
            console.log(err)
        }
    }

    function getResult() {
        if (from !== 'All') {
            return productsFromCatalog.map((elem, index) => (
                <ProductItem key={index} title={elem.title} image={elem.image} price={elem.price} />
            ));

        } else {
            return products.map((elem, index) => (
                <ProductItem key={index} title={elem.title} image={elem.image} price={elem.price} />
            ));
        }

    }

    return <div className="catalog">
        <div className="catalogHeader">
            <div className="catalogTitle">
                <select onChange={(event) => { handleChange(event) }}>
                    <option key={1919}>All</option>
                    {catalogs.map((elem, index) => (
                        <option key={index}>{elem}</option>
                    ))}
                </select>
            </div>
            <div className="catalogSearch">
                <img src="img/search.svg" />
                <input type="text" placeholder="Поиск..." />
            </div>
        </div>
        <div className="catalogProducts">
            {getResult()}

        </div>
    </div>
}

export default AllCatalog
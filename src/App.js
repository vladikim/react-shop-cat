import React from "react";
import Style from './index.scss'
import Header from "./components/Header";
import AllCatalog from "./components/AllCatalog";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import Favorites from "./components/favorites";

export const AppContext = React.createContext({})

function App() {
  const [allProducts, setAllProducts] = React.useState([])
  const [allCatalog, setAllCatalog] = React.useState([])
  const [productsFromCatalog, setProductsFromCatalog] = React.useState([])
  const [productsInCart, setProductsInCart] = React.useState([])
  const [cancelCart, setCancelCart] = React.useState(false)
  const [from, setFrom] = React.useState('')
  const [favoritesProducts, setFavoritesProducts] = React.useState([])

  function addProductsinCart(product) {
    if (!productsInCart.find(elem => elem.title === product.title)) {
      setProductsInCart([...productsInCart, product])
    } else {
      setProductsInCart(productsInCart.filter(elem => elem.title !== product.title))
    }
  }

  function addInFavorites(product) {
    if (favoritesProducts.find(elem => elem.title === product.title)) {
      setFavoritesProducts(favoritesProducts.filter(elem => elem.title !== product.title))
    } else {
      setFavoritesProducts([...favoritesProducts, product])
    }
    console.log(favoritesProducts)
  }

  function IsFavorited(product) {
    return favoritesProducts.some(elem => elem.title === product.title)
  }

  function isAdded(product) {
    return productsInCart.some(elem => elem.title === product.title)
  }

  function handleFrom(event) {
    setFrom(event.target.value)
  }

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
      setAllCatalog(json)
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
      setAllProducts(json)
    } catch (err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    getAllFromApi()
    getCatalogsFromApi()
  }, [])

  React.useEffect(() => {
    getProductsFromCatalog(from)
  }, [from])

  function onOrOffCart() {
    setCancelCart(!cancelCart)
  }
  return (
    <AppContext.Provider value={{ allProducts, allCatalog, productsFromCatalog, from, handleFrom, addProductsinCart, isAdded, addProductsinCart, addInFavorites, IsFavorited }}>
      <div className="mainContainer">

        {cancelCart ? <Cart onOrOffCart={onOrOffCart} productsInCart={productsInCart} /> : null}
        <Header cancelCart={cancelCart} onOrOffCart={onOrOffCart} />
        <Routes exact='true' >
          <Route element={<AllCatalog />} path='/' />
          <Route element={<Favorites favoritesProducts={favoritesProducts} />} path='/favorites' />
        </Routes>

      </div>
    </AppContext.Provider >
  )

}
export default App
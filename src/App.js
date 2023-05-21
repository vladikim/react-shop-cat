import React from "react";
import Style from './index.scss'
import Header from "./components/Header";
import AllCatalog from "./components/AllCatalog";
import Cart from "./components/Cart";
import Info from "./components/Info";

function App() {
  const [showInfo, setShowInfo] = React.useState(null)
  const [cancelCart, setCancelCart] = React.useState(false)
  const [productsInCart, setProductsInCart] = React.useState([])

  function deleteButton(like) {
    if (!like) {
      deleteProductsInCart()
    } else {
      addProductsToCart()
    }
  }

  function handleInfo(product) {
    setShowInfo(product)
    console.log(showInfo)
  }

  function cancelInfo() {
    setShowInfo(null)
  }

  function deleteProductsInCart(product) {
    setProductsInCart(productsInCart.filter(elem => {
      if (elem.title !== product.title) {
        return true
      } else { return false }
    }))
  }

  function addProductsToCart(product) {
    setProductsInCart([...productsInCart, product])
  }

  function onOrOffCart() {
    setCancelCart(!cancelCart)
  }
  return (
    <div className="mainContainer">
      {cancelCart ? <Cart onOrOffCart={onOrOffCart}
        productsInCart={productsInCart}
        deleteProductsInCart={deleteProductsInCart} /> : null}

      <Header cancelCart={cancelCart} onOrOffCart={onOrOffCart} />

      {showInfo
        ? <Info info={showInfo} cancelInfo={cancelInfo} />
        : <AllCatalog handleInfo={handleInfo} addProductsToCart={addProductsToCart} deleteButton={deleteButton} />}
    </div>)
}
export default App
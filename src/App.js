import React from "react";
import Style from './index.scss'
import Header from "./components/Header";
import AllCatalog from "./components/AllCatalog";


function App() {
  const [allProducts, setAllProducts] = React.useState([])
  const [catalog, setCatalog] = React.useState([])

  function getAllProducts() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setAllProducts(json))
      .catch((err) => { console.log(err) })
  }

  function getCatalog() {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCatalog(json))
      .catch((err) => { console.log(err) })
  }

  React.useEffect(() => {
    getAllProducts();
    getCatalog()
  }, [])

  return (
    <div className="mainContainer">
      <Header />
      <AllCatalog allProducts={allProducts} catalog={catalog} />
    </div>)
}
export default App
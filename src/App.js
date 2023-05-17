import React from "react";
import Style from './index.scss'
import Header from "./components/Header";
import AllCatalog from "./components/AllCatalog";
import OverLay from "./components/OverLay";


function App() {
  const [cancel, setCancel] = React.useState(false)
  function onCart() {
    setCancel(!cancel)
  }
  return (
    <div className="mainContainer">
      {cancel ? <OverLay onCart={onCart} /> : null}
      <Header cartStatus={cancel} onCart={onCart} />
      <AllCatalog />

    </div>)
}
export default App
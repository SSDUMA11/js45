import React, {useState} from "react";
import Product from "./components/Product";
import Add from "./components/Add";

function App () {

  const productsList = [
  {name: 'Iphone', price: 800, id: 1},
  {name: 'Watch', price: 100, id: 2},
  ];
  const [products, setProducts] = useState(productsList)
  const [newProducts, setNewProducts] = useState({name: '', price: '', id: 3})
  const [nameError, setNameError] = useState(false);
  const [priceError, setPriceError] = useState(false);

  ////////////////////////

  const changeName = (e)=>{
    const name = e.target.value.trim();
    setNewProducts((prev)=>({...prev, name: name}))
    if (name.length < 2) {
      setNameError(true);
    } else {
      setNameError(false);
    }
   }

  const changePrice = (e)=>{
    const price = e.target.value;
    setNewProducts((prev)=>({...prev, price: price}))
    if (price <= 0) {
      setPriceError(true);
    } else {
      setPriceError(false);
    }
  }

  const addProducts = () => {
    if (!nameError && !priceError && newProducts.name !== '' && newProducts.price !== '') {
      let key = Math.random();
      setNewProducts((prev)=>({...prev, id: key}))
      setProducts((prev) => [...prev, newProducts]);
      setNewProducts({ name: "", price: "", id: key });
    }
    
  }

  const removeProduct = (id) => {
    const newList =  products.filter(product => product.id !== id);
    setProducts(newList);
  }

return (
<div className="wrapper">

<Add changeName={changeName} changePrice={changePrice} addProducts={addProducts} newProducts={newProducts}  />

  <div className="list">
    {products.map(product => <Product onRemove={removeProduct} key={product.id} id={product.id} name={product.name} price={`${product.price} $`} />)}
  </div>
</div> 
);
}

export default App;
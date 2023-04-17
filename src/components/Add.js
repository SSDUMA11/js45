import React from "react";

function Add(props) {
return (
<div className="add">
<label>Product name</label>
<input onInput={props.changeName} value={props.newProducts.name} type="text" />
<label>Product price</label>
<input onInput={props.changePrice} value={props.newProducts.price} type="number" />
<button onClick={props.addProducts} type="button">Add</button>
</div>
);
}

export default Add;

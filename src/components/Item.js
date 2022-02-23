import React, {useState} from "react";

function Item({ name, category }) {
  const [inItem, setInItem]= useState(false)
  function addItem(){
      setInItem((inItem)=> !inItem)
  }
  const classChange = inItem ? "in-cart": "";
  const clickChange = inItem ? "Add to Cart": "Remove From Cart";
  return (
    <li className={classChange}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItem}>{clickChange}</button>
    </li>
  );
}

export default Item;

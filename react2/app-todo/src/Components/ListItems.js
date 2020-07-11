import React from "react";
import "../style/TodoStyle.css";
import { ItemHook } from "./Item.js";

function ListItems(props) {
  const { items } = props;
  const listItems = items.map((item, index) => {
    return (
      <div className="list" key={index}>
        <ItemHook
          key={item.id}
          value={item.text}
          id={item.id}
          deleteItem={props.deleteItem}
          setUpdate={props.setUpdate}
        />
      </div>
    );
  });

  return <div> {listItems} </div>;
}

export default ListItems;

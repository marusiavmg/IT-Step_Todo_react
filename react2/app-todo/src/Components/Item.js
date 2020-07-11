import React, { useState } from "react";
import "../style/TodoStyle.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";


export function ItemHook(props) {

  const [isDone, setIsDone] = useState();

  const changeHandler = (e) => {
    const done = e.target.checked;
    setIsDone(done);  
  }
 
  return (
    <div className="item">
      <span>
        <input
          className="inputCheckbox"
          type="checkbox"         
          onInput={changeHandler}
        />
        <input
          className={isDone ? "done" : "input"}
          type="text"
          key={props.id}
          id={props.id}
          value={props.value}
          onChange={(e) => props.setUpdate(e.target.value, props.id)}
        />
      </span>
      <IconButton
        aria-label="delete"
        onClick={() => props.deleteItem(props.id)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}




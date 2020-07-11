import React from "react";
import "./App.css";
import Button from "./Components/Button.js";
import ListItems from "./Components/ListItems.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItem: {
        text: "",
        id: "",
      },
    };
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        id: Date.now(),
      },
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    const newItems = [...this.state.items, newItem];
    this.setState({
      items: newItems,
      currentItem: {
        text: "",
        id: "",
      },
    });
  };

  deleteItem = (id) => {
    const filteredItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItems,
    });
  };

  setUpdate = (text, id) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.id === id) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  };

  clearList = () => {
    this.setState({
      items: [],
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="title">TodoList</h1>
          <form id="todo-form" onSubmit={this.addItem}>
            <label htmlFor="new-todo" className="label">
              Add your task here...
            </label>
            <input
              value={this.state.currentItem.text}
              onChange={this.handleInput}
              id="new-todo"
              type="text"
              placeholder="Enter text"
            />
            <button type="submit" disabled={!this.state.currentItem.text}>
              Add
            </button>
          </form>
        </header>

        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate}
        />

        <footer className="footer">
          <Button
            label="Clear List"
            className="clear-button"
            callBack={this.clearList}
          />
        </footer>
      </div>
    );
  }
}

export default App;

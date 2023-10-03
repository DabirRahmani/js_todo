import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import { ListInputUI } from "./ListInput";
import { ListDisplay } from "./listDisplay";
import { PostList } from "./api";

export function ToDoList({ data }) {
  const [state, setState] = useState({
    items: data,
    nextItem: "",
  });

  const [isChanged, setIsChanged] = useState(false);

  const itemAdder = () => {
    if (state.nextItem) {
      setIsChanged(true);
      setState((prevState) => ({
        nextItem: "",
        items: prevState.items?.concat({
          description: state.nextItem,
          isCompleted: false,
        }),
      }));
    }
  };

  const itemRemover = (removeIndex) => {
    setIsChanged(true);
    setState({
      nextItem: state.nextItem,
      items: state.items.filter((i, index) => index !== removeIndex),
    });
    console.log(removeIndex);
  };

  const submitList = () => {
    PostList({ list: state.items })
      .then((res) => {
        setIsChanged(false);
      })
      .catch((err) => console.error(err));
  };

  const itemCompleter = (event, indexToComplete) => {
    function completeItem(myarray, indexToComplete) {
      return myarray.map(function (elem, index) {
        if (index === indexToComplete) elem.isCompleted = !elem.isCompleted;
        return elem;
      });
    }
    const editedItems = completeItem(state.items, indexToComplete);
    setIsChanged(true);
    setState((prevState) => ({
      nextItem: prevState.nextItem,
      items: [...editedItems],
    }));
  };

  const itemInputChange = (e) => {
    setState((prevState) => ({
      nextItem: e.target.value,
      items: prevState.items,
    }));
  };

  return (
    <div className="listContainer">
      <ListInputUI
        itemAdder={itemAdder}
        getInputValue={itemInputChange}
        nextItem={state.nextItem}
        itemSaver={submitList}
        saveButtonStatus={isChanged}
      />
      <ListDisplay
        listItems={state.items}
        itemRemover={itemRemover}
        itemCompleter={itemCompleter}
      />
    </div>
  );
}

import React from "react";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import { ListInputUI } from "./ListInput";
import { ListDisplay } from "./listDisplay";

export function ToDoList() {
  return (
    <div className="listContainer">
      <ListInputUI />
      <ListDisplay />
    </div>
  );
}

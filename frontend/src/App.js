import { ToDoList } from "./todoList";
import "./App.css";
import { useEffect, useState } from "react";
import { GetList } from "./api";

function App() {
  const [list, setlist] = useState(undefined);

  useEffect(() => {
    GetList.then(({ data }) => {
      setlist(data.list);
    }).catch((error) => console.error(error));
  }, []);

  return (
    <>{list ? <ToDoList data={list} setData={setlist}></ToDoList> : <></>}</>
  );
}

export default App;

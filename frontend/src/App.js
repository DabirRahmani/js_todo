import { ToDoList } from "./todoList";
import "./App.css";
import ListContextProvider from "./list-context/ListContextProvider";

function App() {
  return (
    <ListContextProvider>
      <ToDoList></ToDoList>;
    </ListContextProvider>
  );
}

export default App;

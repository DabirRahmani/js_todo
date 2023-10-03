import { useContext } from "react";
import { ListContext } from "./list-context/ListContext";

export function ListDisplay(props) {
  const { list } = useContext(ListContext);
  return (
    <ul className="taskList">
      {list?.map((item, index) => (
        <ListItem
          key={index}
          index={index}
          taskDesc={item.description}
          isCompleted={item.isCompleted}
        />
      ))}
    </ul>
  );
}

function ListItem({ index, isCompleted, taskDesc }) {
  const { removeFromList, itemCompleter } = useContext(ListContext);
  return (
    <li>
      <input
        type="checkbox"
        onChange={(event) => itemCompleter(event, index)}
        checked={isCompleted}
      />
      <span className={isCompleted ? "itemCompleted" : null}>{taskDesc}</span>
      <button onClick={() => removeFromList(index)} className="fa fa-trash" />
    </li>
  );
}

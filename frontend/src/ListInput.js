import { useContext, useState } from "react";
import { ListContext } from "./list-context/ListContext";

export function ListInputUI() {
  const [input, setInput] = useState("");

  const { addToList, ischanged, submitList } = useContext(ListContext);

  return (
    <div className="ListInputUI">
      <input
        type="text"
        className="taskInput"
        placeholder="Enter a task"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
        style={{ width: ischanged ? 200 : 260 }}
      />
      <button
        onClick={() => addToList(input)}
        className="taskButton fa fa-fw fa-plus"
      />
      {ischanged ? (
        <button
          onClick={() => {
            if (ischanged) submitList();
          }}
          className="ListInputUISaveBtn fa fa-fw fa-save"
          style={{ backgroundColor: "#3341ff" }}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

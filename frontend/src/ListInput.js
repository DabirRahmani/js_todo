export function ListInputUI(props) {
  return (
    <div className="ListInputUI">
      <input
        type="text"
        className="taskInput"
        placeholder="Enter a task"
        onChange={props.getInputValue}
        value={props.nextItem}
        style={{ width: props.saveButtonStatus ? 200 : 260 }}
      />
      <button
        onClick={() => props.itemAdder()}
        className="taskButton fa fa-fw fa-plus"
      />
      {props.saveButtonStatus ? (
        <button
          onClick={() => {
            if (props.saveButtonStatus) props.itemSaver();
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

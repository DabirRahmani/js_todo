import { useEffect, useState } from "react";
import { ListContext } from "./ListContext";
import { GetList, PostList } from "../api";

function ListContextProvider({ children }) {
  const [list, setList] = useState([]);
  const [ischanged, setIsChanged] = useState(false);

  useEffect(() => {
    GetList.then(({ data }) => {
      setList(data.list);
    }).catch((error) => console.error(error));
  }, []);

  const addToList = (item) => {
    if (item !== "") {
      setIsChanged(true);
      setList([...list, { description: item, isCompleted: false }]);
    }
  };

  const removeFromList = (index) => {
    setIsChanged(true);
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const itemCompleter = (event, indexToComplete) => {
    function completeItem(myarray, indexToComplete) {
      return myarray.map(function (elem, index) {
        if (index === indexToComplete) elem.isCompleted = !elem.isCompleted;
        return elem;
      });
    }
    const editedItems = completeItem(list, indexToComplete);
    setIsChanged(true);
    setList([...editedItems]);
  };

  const submitList = () => {
    PostList({ list: list })
      .then((res) => {
        setIsChanged(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <ListContext.Provider
      value={{
        list,
        addToList,
        removeFromList,
        itemCompleter,
        ischanged,
        submitList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}

export default ListContextProvider;

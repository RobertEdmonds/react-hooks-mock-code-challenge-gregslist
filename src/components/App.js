import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [isItems, setIsItems] = useState([])
  const [isSearch, setIsSearch] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(item => setIsItems(item))
  }, [])

  function handleDeleteItem(deleteItem){
    const updateItems = itemsToDisplay.filter(item => item.id !== deleteItem.id)
    setIsItems(updateItems)
  }

  function handleSearchChange(searchItem){
    setIsSearch(searchItem)
  }

  const itemsToDisplay = isItems.filter(item =>{
    if(isSearch === "")return true;

    return item.description === isSearch;
  })

  return (
    <div className="app">
      <Header onSearchChange={handleSearchChange} searchName={isSearch}/>
      <ListingsContainer displayObjects={itemsToDisplay} onDeleteItem={handleDeleteItem}/>
    </div>
  );
}

export default App;

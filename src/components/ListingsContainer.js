import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({displayObjects, onDeleteItem}) {
  console.log(displayObjects)
  const showObjects = displayObjects.map(item => {
    return <ListingCard key={item.id} description={item.description} image={item.image} location={item.location} item={item} onDeleteItem={onDeleteItem}/>
  })

  return (
    <main>
      <ul className="cards">
        {showObjects}
      </ul>
    </main>
  );
}

export default ListingsContainer;

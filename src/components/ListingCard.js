import React,{useState} from "react";

function ListingCard({description, image, location, item, onDeleteItem}) {
  const [isFavorite, setIsFavorite] = useState(true)

  function handleFavorite(){
    setIsFavorite(!isFavorite)
  }

  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${item.id}`,{
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => onDeleteItem(item))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

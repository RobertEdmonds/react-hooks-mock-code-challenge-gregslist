import React from "react";
import Search from "./Search";

function Header({onSearchChange, searchName}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchChange={onSearchChange} searchName={searchName}/>
    </header>
  );
}

export default Header;

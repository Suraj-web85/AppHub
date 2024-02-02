//   // CommonParentComponent.jsx

// import React, { useState } from "react";
// import Header from "../../Components/Header/Header";
// import SearchPage from "../../Components/SearchPage/SearchPage";

// function CommonParentComponent() {
//   const [searchInput, setSearchInput] = useState("");

//   const handleSearchInputChange = (value) => {
//     setSearchInput(value);
//   };

//   return (
//     <>
//       <Header onSearchInputChange={handleSearchInputChange} />
//       <SearchPage searchInput={searchInput} />
//     </>
//   );
// }

// export default CommonParentComponent;


// CommonParentComponent.jsx

import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import SearchPage from "../../Components/SearchPage/SearchPage";

function CommonParentComponent() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (value) => {
    setSearchInput(value);
  };

  return (
    <>
      <Header onSearchInputChange={handleSearchInputChange} />
      <SearchPage searchInput={searchInput} onSearchInputChange={handleSearchInputChange} />
    </>
  );
}

export default CommonParentComponent;

// import React, { useState } from "react";

// // import { Register } from "../Components/SuperUser/Register";
// import Homesec1 from "../Components/HomeSections/Homesec1";
// import Homesec2 from "../Components/HomeSections/Homesec2";

// import { AppData } from "../data/App_data";
// import Homesec3 from "../Components/HomeSections/Homesec3";
// import SearchPage from "../Components/SearchPage/SearchPage";
// // import HomeBanner from "../Components/HomeSections/HomeBanner";

// export default function Home() {
//   const [Test, setTest] = useState(1);
//   return Test ? (
//     <div className="home-container">
//       {/* <HomeBanner /> */}
//       <Homesec1 apk_type="game" />
//       <Homesec2 />
//       <Homesec3 apk_data={AppData} />
//     </div>
//   ) : (
  
//     <div> <SearchPage />  </div>
//   );
// }
import React, { useState } from "react";
import Homesec1 from "../Components/HomeSections/Homesec1";
import Homesec2 from "../Components/HomeSections/Homesec2";
import { AppData } from "../data/App_data";
import Homesec3 from "../Components/HomeSections/Homesec3";
import SearchPage from "../Components/SearchPage/SearchPage";

export default function Home({ searchInput }) {
 
  const isSearching = searchInput && searchInput.trim() !== "";

  return (
    <div className="home-container">
      {isSearching ? (
       
        <SearchPage searchInput={searchInput} />
      ) : (
      
        <>
          <Homesec1 apk_type="game" />
          <Homesec2 />
          <Homesec3 apk_data={AppData} />
        </>
      )}
    </div>
  );
}

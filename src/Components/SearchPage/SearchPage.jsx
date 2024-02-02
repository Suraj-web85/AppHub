import React, { useState } from "react";
import "./SearchPage.css";
import { AppData } from "../../data/App_data.jsx";

function SearchPage() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredApps = AppData.filter((app) =>
  app.apk_name.toLowerCase().includes(searchInput.toLowerCase())
);

  return (
    <div className="se-pg contain gc-pg">
      <div className="se-pg-apk">
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        {filteredApps.map((app, index) => (
          <div className="se-apk-con aflex" key={index}>
            <div className="se-apk-imgcon">
              <img src={app.apk_banner} alt="" className="se-apk-img" />
              <div className="se-apk-rcon sspara">
                {app.apk_rating} <b>&#9733;</b>
              </div>
            </div>
            <div className="se-apk-minfo aflex">
              <img src={app.apk_logo} alt="" />
              <div className="se-apk-mname">
                <h6 className="para">{app.apk_name}</h6>
                <p className="sspara">{app.apk_own}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ); 
}

export default SearchPage;


// //above code is perfect



// import React, { useState } from "react";
// import "./SearchPage.css";
// import { AppData } from "../../data/App_data.jsx";

// function SearchPage() {
//   const [searchInput, setSearchInput] = useState("");

//   const handleSearchInputChange = (e) => {
//     setSearchInput(e.target.value);
//   };

//   const filteredApps = AppData.filter((app) =>
//     app.apk_name.toLowerCase().includes(searchInput.toLowerCase())
//   );

//   return (
//     <div className="se-pg contain gc-pg">
//       <div className="se-pg-apk">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchInput}
//           onChange={handleSearchInputChange}
//         />
//         {searchInput.trim() !== "" && (
//           // Only render the list if there is something typed in the search input
//           filteredApps.map((app, index) => (
//             <div className="se-apk-con aflex" key={index}>
//               <div className="se-apk-imgcon">
//                 <img src={app.apk_banner} alt="" className="se-apk-img" />
//                 <div className="se-apk-rcon sspara">
//                   {app.apk_rating} <b>&#9733;</b>
//                 </div>
//               </div>
//               <div className="se-apk-minfo aflex">
//                 <img src={app.apk_logo} alt="" />
//                 <div className="se-apk-mname">
//                   <h6 className="para">{app.apk_name}</h6>
//                   <p className="sspara">{app.apk_own}</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default SearchPage;
















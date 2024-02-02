

// // import React, { useState, useContext } from "react";
// // import { Link } from "react-router-dom";
// // import Images from "../../Common/Images";
// // import { BsFillPersonFill, BsSearch, BsFillBrightnessHighFill, BsFillMoonFill } from "react-icons/bs";
// // import { IoGameControllerOutline, IoHomeOutline, IoAppsSharp } from "react-icons/io5";
// // import "./Header.css";
// // import { useAuth } from "../Context/AuthProvider"; 

// // export default function Header({ ThemeToggle, CheckToggle }) {
// //   const { state } = useAuth(); 

// //   const [isactivelink, setActivelink] = useState("home");
// //   const [searchInput, setSearchInput] = useState("");

// //   const handleActivelink = (value) => {
// //     setActivelink(value);
// //   };

// //   const handleSearchInputChange = (e) => {
// //     setSearchInput(e.target.value);
// //   };

// //   return (
// //     <>
// //       <header className="header aflex">
// //         <div className="header-sec aflex">
// //           <Link
// //             to="/"
// //             className="aflex"
// //             onClick={() => handleActivelink("home")}
// //           >
// //             <img className="A-logo" src={Images.AppHub} alt="AppHub" />
// //           </Link>
// //           <nav className="nav aflex">
// //             <Link
// //               to="/games"
// //               className={`mpara aflex ${
// //                 isactivelink === "games" ? "active-link" : ""
// //               }`}
// //               onClick={() => handleActivelink("games")}
// //             >
// //               <IoGameControllerOutline className="nav-optional-icon" />
// //               Games
// //             </Link>
// //             <Link
// //               to="/"
// //               className={`mpara aflex nav-optional ${
// //                 isactivelink === "home" ? "active-link" : ""
// //               }`}
// //               onClick={() => handleActivelink("home")}
// //             >
// //               <IoHomeOutline className="nav-optional-icon" />
// //               Home
// //             </Link>
// //             <Link
// //               to="/apps"
// //               className={`mpara aflex ${
// //                 isactivelink === "apps" ? "active-link" : ""
// //               }`}
// //               onClick={() => handleActivelink("apps")}
// //             >
// //               <IoAppsSharp className="nav-optional-icon" />
// //               Apps
// //             </Link>
// //           </nav>
// //         </div>
// //         <div className="header-sec aflex">
// //           <div className="h-input-container aflex">
// //               <input
// //                 type="text"
// //                 id="h-input"
// //                 placeholder="Search..."
// //                 className="input para"
// //                 value={searchInput}
// //                 onChange={handleSearchInputChange}
// //                 disabled={state.isAuthenticated} 
// //               />
// //             {!state.isAuthenticated && (
// //               <Link
// //                 to={`/search?query=${searchInput}`}
// //                 id="search"
// //                 className="para h-input-btn aflex"
// //               >
// //                 <BsSearch className="search-icon" />
// //               </Link>
// //             )}
// //           </div>
// //           <Link
// //             id="account"
// //             className="h-icon aflex"
// //             to={state.isAuthenticated ? "/dashboard" : "/auth"}
// //           >
// //             {state.isAuthenticated ? "Hello" : <BsFillPersonFill />}
// //           </Link>
// //           <div
// //             id="theme-toggle"
// //             className="h-icon aflex"
// //             onClick={ThemeToggle}
// //           >
// //             {CheckToggle ? <BsFillBrightnessHighFill /> : <BsFillMoonFill />}
// //           </div>
// //         </div>
// //       </header>
// //     </>
// //   );
// // }

// //above one is perfect



// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import Images from "../../Common/Images";
// // import { BsFillPersonFill, BsSearch, BsFillBrightnessHighFill, BsFillMoonFill } from "react-icons/bs";
// // import { IoGameControllerOutline, IoHomeOutline, IoAppsSharp } from "react-icons/io5";
// // import "./Header.css";
// // import { useAuth } from "../Context/AuthProvider";

// // export default function Header({ ThemeToggle, CheckToggle, onSearchInputChange }) {
// //   const { state } = useAuth();

// //   const [isactivelink, setActivelink] = useState("home");
// //   const [searchInput, setSearchInput] = useState("");

// //   const handleActivelink = (value) => {
// //     setActivelink(value);
// //   };

// //   const handleSearchInputChange = (e) => {
// //     setSearchInput(e.target.value);
// //     onSearchInputChange(e.target.value); // Call the function passed from the parent
// //   };

// //   return (
// //     <>
// //       <header className="header aflex">
// //         <div className="header-sec aflex">
// //           <Link
// //             to="/"
// //             className="aflex"
// //             onClick={() => handleActivelink("home")}
// //           >
// //             <img className="A-logo" src={Images.AppHub} alt="AppHub" />
// //           </Link>
// //           <nav className="nav aflex">
// //             <Link
// //               to="/games"
// //               className={`mpara aflex ${
// //                 isactivelink === "games" ? "active-link" : ""
// //               }`}
// //               onClick={() => handleActivelink("games")}
// //             >
// //               <IoGameControllerOutline className="nav-optional-icon" />
// //               Games
// //             </Link>
// //             <Link
// //               to="/"
// //               className={`mpara aflex nav-optional ${
// //                 isactivelink === "home" ? "active-link" : ""
// //               }`}
// //               onClick={() => handleActivelink("home")}
// //             >
// //               <IoHomeOutline className="nav-optional-icon" />
// //               Home
// //             </Link>
// //             <Link
// //               to="/apps"
// //               className={`mpara aflex ${
// //                 isactivelink === "apps" ? "active-link" : ""
// //               }`}
// //               onClick={() => handleActivelink("apps")}
// //             >
// //               <IoAppsSharp className="nav-optional-icon" />
// //               Apps
// //             </Link>
// //           </nav>
// //         </div>
// //         <div className="header-sec aflex">
// //           <div className="h-input-container aflex">
// //             <input
// //               type="text"
// //               id="h-input"
// //               placeholder="Search..."
// //               className="input para"
// //               value={searchInput}
// //               onChange={handleSearchInputChange}
// //               disabled={state.isAuthenticated}
// //             />
// //             {!state.isAuthenticated && (
// //               <Link
// //                 to={`/Search?query=${searchInput}`}
// //                 id="search"
// //                 className="para h-input-btn aflex"
// //               >
// //                 <BsSearch className="search-icon" />
// //               </Link>
// //             )}
// //           </div>
// //           <Link
// //             id="account"
// //             className="h-icon aflex"
// //             to={state.isAuthenticated ? "/dashboard" : "/auth"}
// //           >
// //             {state.isAuthenticated ? "Hello" : <BsFillPersonFill />}
// //           </Link>
// //           <div
// //             id="theme-toggle"
// //             className="h-icon aflex"
// //             onClick={ThemeToggle}
// //           >
// //             {CheckToggle ? <BsFillBrightnessHighFill /> : <BsFillMoonFill />}
// //           </div>
// //         </div>
// //       </header>
// //     </>
// //   );
// // }


// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import Images from "../../Common/Images";
// // import { BsFillPersonFill, BsSearch, BsFillBrightnessHighFill, BsFillMoonFill } from "react-icons/bs";
// // import { IoGameControllerOutline, IoHomeOutline, IoAppsSharp } from "react-icons/io5";
// // import "./Header.css";
// // import { useAuth } from "../Context/AuthProvider";
// // import SearchPage from "../SearchPage/SearchPage";

// // export default function Header({ ThemeToggle, CheckToggle, onSearchInputChange }) {
// //   const { state } = useAuth();

// //   const [isactivelink, setActivelink] = useState("home");
// //   const [searchInput, setSearchInput] = useState("");
// //   const [showSearchPage, setShowSearchPage] = useState(false); 

// //   const handleActivelink = (value) => {
// //     setActivelink(value);
// //     setShowSearchPage(false); // Close SearchPage when navigating to other pages
// //   };

 
// //   const handleSearchInputChange = (e) => {
// //     const input = e.target.value;
// //     setSearchInput(input);
// //     onSearchInputChange(input); 
// //   };

// //   const handleSearchIconClick = () => {
// //     setShowSearchPage(true); 
// //   };

// //   return (
// //     <>
// //       <header className="header aflex">
// //         <div className="header-sec aflex">
// //           <Link
// //             to="/"
// //             className="aflex"
// //             onClick={() => handleActivelink("home")}
// //           >
// //             <img className="A-logo" src={Images.AppHub} alt="AppHub" />
// //           </Link>
// //           <nav className="nav aflex">
// //             <Link
// //               to="/games"
// //               className={`mpara aflex ${
// //                 isactivelink === "games" ? "active-link" : ""
// //               }`}
// //               onClick={() => handleActivelink("games")}
// //             >
// //               <IoGameControllerOutline className="nav-optional-icon" />
// //               Games
// //             </Link>
// //             <Link
// //               to="/"
// //               className={`mpara aflex nav-optional ${
// //                 isactivelink === "home" ? "active-link" : ""
// //               }`}
// //               onClick={() => handleActivelink("home")}
// //             >
// //               <IoHomeOutline className="nav-optional-icon" />
// //               Home
// //             </Link>
// //             <Link
// //               to="/apps"
// //               className={`mpara aflex ${
// //                 isactivelink === "apps" ? "active-link" : ""
// //               }`}
// //               onClick={() => handleActivelink("apps")}
// //             >
// //               <IoAppsSharp className="nav-optional-icon" />
// //               Apps
// //             </Link>
// //           </nav>
// //         </div>
// //         <div className="header-sec aflex">
// //           <div className="h-input-container aflex " onClick={() => setShowSearchPage(true)}>
// //             <input
// //               type="text"
// //               id="h-input"
// //               placeholder="Search..."
// //               className="input para"
// //               value={searchInput}
// //               onChange={handleSearchInputChange}
// //               disabled={state.isAuthenticated}
// //             />
// //             {!state.isAuthenticated && (
// //               <Link
// //                 to={`/Search?query=${searchInput}`}
// //                 id="search"
// //                 className="para h-input-btn aflex"
// //                 onClick={handleSearchIconClick}
// //               >
// //                 <BsSearch className="search-icon" />
// //               </Link>
// //             )}
// //           </div>
// //           <Link
// //             id="account"
// //             className="h-icon aflex"
// //             to={state.isAuthenticated ? "/dashboard" : "/auth"}
// //           >
// //             {state.isAuthenticated ? "Hello" : <BsFillPersonFill />}
// //           </Link>
// //           <div
// //             id="theme-toggle"
// //             className="h-icon aflex"
// //             onClick={ThemeToggle}
// //           >
// //             {CheckToggle ? <BsFillBrightnessHighFill /> : <BsFillMoonFill />}
// //           </div>
// //         </div>
// //       </header>
// //       {showSearchPage && <SearchPage searchInput={searchInput} />} {/* Render SearchPage conditionally */}
// //     </>
// //     );
// //   }


// //above one is perfect


  // import React, { useState } from "react";
  // import { Link } from "react-router-dom";
  // import Images from "../../Common/Images";
  // import { BsFillPersonFill, BsSearch, BsFillBrightnessHighFill, BsFillMoonFill } from "react-icons/bs";
  // import { IoGameControllerOutline, IoHomeOutline, IoAppsSharp } from "react-icons/io5";
  // import "./Header.css";
  // import { useAuth } from "../Context/AuthProvider";
  // import SearchPage from "../SearchPage/SearchPage";

  // export default function Header({ ThemeToggle, CheckToggle, onSearchInputChange }) {
  //   const { state } = useAuth();

  //   const [isactivelink, setActivelink] = useState("home");
  //   const [searchInput, setSearchInput] = useState("");
  //   const [showSearchPage, setShowSearchPage] = useState(false);

  //   const handleActivelink = (value) => {
  //     setActivelink(value);
  //     setShowSearchPage(false); // Close SearchPage when navigating to other pages
  //   };

  //   const handleSearchInputChange = (e) => {
  //     const input = e.target.value;
  //     setSearchInput(input);
  //     onSearchInputChange(input);
  //   };

  //   const handleSearchIconClick = () => {
  //     setShowSearchPage(true);
  //   };

  //   return (
  //     <>
  //       <header className="header aflex">
  //         <div className="header-sec aflex">
  //           <Link
  //             to="/"
  //             className="aflex"
  //             onClick={() => handleActivelink("home")}
  //           >
  //             <img className="A-logo" src={Images.AppHub} alt="AppHub" />
  //           </Link>
  //           <nav className="nav aflex">
  //             <Link
  //               to="/games"
  //               className={`mpara aflex ${
  //                 isactivelink === "games" ? "active-link" : ""
  //               }`}
  //               onClick={() => handleActivelink("games")}
  //             >
  //               <IoGameControllerOutline className="nav-optional-icon" />
  //               Games
  //             </Link>
  //             <Link
  //               to="/"
  //               className={`mpara aflex nav-optional ${
  //                 isactivelink === "home" ? "active-link" : ""
  //               }`}
  //               onClick={() => handleActivelink("home")}
  //             >
  //               <IoHomeOutline className="nav-optional-icon" />
  //               Home
  //             </Link>
  //             <Link
  //               to="/apps"
  //               className={`mpara aflex ${
  //                 isactivelink === "apps" ? "active-link" : ""
  //               }`}
  //               onClick={() => handleActivelink("apps")}
  //             >
  //               <IoAppsSharp className="nav-optional-icon" />
  //               Apps
  //             </Link>
  //           </nav>
  //         </div>
  //         <div className="header-sec aflex">
  //           <div className="h-input-container aflex " onClick={() => setShowSearchPage(true)}>
  //             <input
  //               type="text"
  //               id="h-input"
  //               placeholder="Search..."
  //               className="input para"
  //               value={searchInput}
  //               onChange={handleSearchInputChange}
  //               disabled={state.isAuthenticated}
  //             />
  //             {!state.isAuthenticated && (
  //               <Link
  //                 to={`/Search?query=${searchInput}`}
  //                 id="search"
  //                 className="para h-input-btn aflex"
  //                 onClick={handleSearchIconClick}
  //               >
  //                 <BsSearch className="search-icon" />
  //               </Link>
  //             )}
  //           </div>
  //           <Link
  //             id="account"
  //             className="h-icon aflex"
  //             to={state.isAuthenticated ? "/dashboard" : "/auth"}
  //           >
  //             {state.isAuthenticated ? "Hello" : <BsFillPersonFill />}
  //           </Link>
  //           <div
  //             id="theme-toggle"
  //             className="h-icon aflex"
  //             onClick={ThemeToggle}
  //           >
  //             {CheckToggle ? <BsFillBrightnessHighFill /> : <BsFillMoonFill />}
  //           </div>
  //         </div>
  //       </header>
  //       {showSearchPage && <SearchPage searchInput={searchInput} />} {/* Render SearchPage conditionally */}
  //     </>
  //   );
  // }

// //above oode is perfect














  import React, { useState } from "react";
  

  import { Link } from "react-router-dom";
  import Images from "../../Common/Images";
  import { BsFillPersonFill, BsSearch, BsFillBrightnessHighFill, BsFillMoonFill } from "react-icons/bs";
  import { IoGameControllerOutline, IoHomeOutline, IoAppsSharp } from "react-icons/io5";
  import "./Header.css";
  import { useAuth } from "../Context/AuthProvider";
  import SearchPage from "../SearchPage/SearchPage";
  import { AppData } from "../../data/App_data.jsx"; // Assuming you have AppData accessible

  export default function Header({ ThemeToggle, CheckToggle, onSearchInputChange }) {
    const { state } = useAuth();

    const [isactivelink, setActivelink] = useState("home");
    const [searchInput, setSearchInput] = useState("");
    const [showSearchPage, setShowSearchPage] = useState(false);
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleActivelink = (value) => {
      setActivelink(value);
      setShowSearchPage(false); 
    };

    const handleSearchInputChange = (e) => {
      const input = e.target.value;
      setSearchInput(input);
      onSearchInputChange(input);
      setShowSearchPage(input !== "");
    };

    const handleSearchIconClick = () => {
      setShowSearchPage(true);
    };
    
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };
    const filteredApps = AppData.filter((app) =>
      app.apk_name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <>
        <header className="header aflex">
          <div className="header-sec aflex">
            <Link to="/" className="aflex" onClick={() => handleActivelink("home")}>
              <img className="A-logo" src={Images.AppHub} alt="AppHub" />
            </Link>
            <nav className="nav aflex">
              <Link
                to="/games"
                className={`mpara aflex ${isactivelink === "games" ? "active-link" : ""}`}
                onClick={() => handleActivelink("games")}
              >
                <IoGameControllerOutline className="nav-optional-icon" />
                Games
              </Link>
              <Link
                to="/"
                className={`mpara aflex nav-optional ${isactivelink === "home" ? "active-link" : ""}`}
                onClick={() => handleActivelink("home")}
              >
                <IoHomeOutline className="nav-optional-icon" />
                Home
              </Link>
              <Link
                to="/apps"
                className={`mpara aflex ${isactivelink === "apps" ? "active-link" : ""}`}
                onClick={() => handleActivelink("apps")}
              >
                <IoAppsSharp className="nav-optional-icon" />
                Apps
              </Link>
            </nav>
          </div>
          <div className="header-sec aflex">
            <div className="h-input-container aflex" onClick={() => setShowSearchPage(true)}>
              <input
                type="text"
                id="h-input"
                placeholder="Search..."
                className="input para"
                value={searchInput}
                onChange={handleSearchInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                disabled={state.isAuthenticated}
              />
              {!state.isAuthenticated &&  (
                <Link
                  to={`/Search?query=${searchInput}`}
                  id="search"
                  className="para h-input-btn aflex"
                  onClick={handleSearchIconClick}
                >
                  <BsSearch className="search-icon" />
                </Link>
              )}
           
            </div>
            <Link
              id="account"
              className="h-icon aflex"
              to={state.isAuthenticated ? "/dashboard" : "/auth"}
            >
              {state.isAuthenticated ? "Hello" : <BsFillPersonFill />}
            </Link>
            <div id="theme-toggle" className="h-icon aflex" onClick={ThemeToggle}>
              {CheckToggle ? <BsFillBrightnessHighFill /> : <BsFillMoonFill />}
            </div>
          </div>
        </header>
        {showSearchPage && 
        (
                <div className="se-pg contain">
                
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
              )
     
              
              }
      </>
    );
  }


///above code is perfect







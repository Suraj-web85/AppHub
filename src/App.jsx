import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider, useAppContext } from "./Components/Context/AppContext";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Apps from "./Pages/Apps";
import Games from "./Pages/Games";
import Authentication from "./Components/Authentication/Authenticaton";
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import ApkPage from "./Components/ApkPage/ApkPage";
import { Register } from "./Components/SuperUser/Register";
import Profile from "./Components/Profile/Profile";
import Upload from "./Pages/Upload";
import Dashboard from "./Components/Profile/Dashboard";

function App() {
  const { isLightTheme, handleThemeToggle } = useAppContext();

  return (
    <Router>
      <AppProvider>
        <main className={`main scroll ${isLightTheme ? "light" : "dark"}`}>
          <Header ThemeToggle={handleThemeToggle} CheckToggle={isLightTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/games" element={<Games />} />
            <Route path="/apps" element={<Apps />} />
            <Route path={"/apks/:apkId"} element={<ApkPage />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Profile />} />
              <Route path="upload" element={<Upload />} />
            </Route>

            {/* Authentication routes */}
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/auth" element={<Authentication />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </main>
      </AppProvider>
    </Router>
  );
}

export default App;

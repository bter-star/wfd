import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Import your page components here
import Home from "./pages/Home";
import Membership from "./pages/Membership";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import PageContainer from "./components/PageContainer";
import Footer from "./components/Footer";
import Media from "./pages/Gallery"
import History from "./pages/History";
// import History from "./pages/History";
// import FireSafety from "./pages/FireSafety";
// import Donate from "./pages/Donate";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Router>
        <Navigation />
        <Routes>
          <Route path="*" element={<PageContainer content={<Home />} />} />
          <Route
            path="/about"
            element={<PageContainer content={<About />} />}
          />
          <Route
            path="/gallery"
            element={<PageContainer content={<Media />} />}
          />
          <Route
            path="/history"
            element={<PageContainer content={<History />} />}
          />
          <Route
            path="/Safety"
            element={<PageContainer content={<History />} />}
          />
          {/* <Route path="/donate" element={<Donate />} /> */}
          <Route
            path="/membership"
            element={<PageContainer content={<Membership />} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

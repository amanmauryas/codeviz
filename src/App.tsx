import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Visualizer from "./pages/Visualizer";
import Documentation from "./pages/Documentation";
import About from "./pages/About";

// Initialize Google Analytics
const GA_MEASUREMENT_ID = "G-D4589BDJSD"; // Replace with your actual Measurement ID
ReactGA.initialize(GA_MEASUREMENT_ID);

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/visualizer" element={<Visualizer />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

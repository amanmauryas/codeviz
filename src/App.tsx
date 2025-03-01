import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
    <HelmetProvider>
      <Router>
        <AnalyticsTracker />
        <Helmet>
          {/* Default Meta Tags */}
          <title>Online Code Visualizer - Debug & Analyze Code Instantly</title>
          <meta name="google-adsense-account" content="ca-pub-9496502750898739"></meta>
          <meta name="description" content="Visualize and debug your code execution step-by-step with our interactive online code visualizer." />
          <meta name="keywords" content="code visualizer, online code execution, debug code, programming visualizer, algorithm visualizer, Python, JavaScript, C++, Java" />
          <meta name="author" content="Code Visualizer" />
          <meta name="robots" content="index, follow" />

          {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
          <meta property="og:title" content="Online Code Visualizer - Debug & Analyze Code Instantly" />
          <meta property="og:description" content="Easily visualize and debug code execution in real-time. Supports multiple programming languages." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://codevisualizer.vercel.app/" />
          <meta property="og:image" content="https://codevisualizer.vercel.app/" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Online Code Visualizer - Debug & Analyze Code Instantly" />
          <meta name="twitter:description" content="A powerful tool for visualizing code execution and debugging algorithms." />
          <meta name="twitter:image" content="https://yourwebsite.com/preview-image.jpg" />
        </Helmet>

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
    </HelmetProvider>
  );
}

export default App;

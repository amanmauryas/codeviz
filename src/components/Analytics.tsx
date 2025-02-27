import React, { useEffect } from "react";
import ReactGA from "react-ga4";

function App() {
    useEffect(() => {
        ReactGA.initialize("G-D4589BDJSD"); // Replace with your Measurement ID
        ReactGA.send("pageview"); // Send initial pageview
    }, []);

    return <div>My React App with Google Analytics</div>;
}

export default App;

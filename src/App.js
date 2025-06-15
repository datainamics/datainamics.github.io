import React, { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import Training from "./pages/Training";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Simple hash-based routing
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "home";
      setCurrentPage(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Call on initial load

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "training":
        return <Training />;
      case "home":
      default:
        return <Homepage />;
    }
  };

  return renderPage();
}

export default App;

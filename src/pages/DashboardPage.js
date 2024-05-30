import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DashboardPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cse.google.com/cse.js?cx=5651151450a7a4302";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4">
          Information Retrieval Decision Support
        </h2>
        <div>
          <div className="gcse-search"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;

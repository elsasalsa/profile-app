import React from "react";
import "primereact/resources/themes/lara-light-blue/theme.css"; 
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../css/home.css";
import Navbar from "../Navbar";

function Home() {
    return (
        <div>
            <Navbar />
            <div className="p-m-4 center-container"> 
                <h1 className="center">WELCOME TO MY WEBSITE</h1>
            </div>
        </div>
    );
}

export default Home;

import React from "react";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../css/about.css";
import Navbar from "../Navbar";
import { Card } from 'primereact/card';

function About() {
    return (
        <div>
            <Navbar />
            <div className="p-m-4 center-container">
                <Card title="ABOUT ME" className="custom-card">
                    <div className="card-content">
                        <div className="photo-section">
                            <img
                                src="/img/elsa3.jpg"
                                className="profile-photo"
                            />
                        </div>

                        <div className="text-section">
                            <p className="m-0">
                                Hello! My name is Elsa Salsa Billa. I was born in Bogor, on February 3 2007.
                                I am a student at Wikrama Vocational High School majoring in software and game development.
                                I have completed a 6 month internship as a front-end developer.
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default About;

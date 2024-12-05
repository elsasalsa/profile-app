import React from "react";
import { Link } from 'react-router-dom';
import { Menubar } from "primereact/menubar";
import "primereact/resources/themes/lara-light-blue/theme.css"; 
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./css/navbar.css"

function Navbar() {
    const items = [
        {
            label: "About",
            icon: "pi pi-info-circle",
            command: () => {
                window.location.href = "/about";
            },
        },
        {
            label: "Contact",
            icon: "pi pi-phone",
            command: () => {
                window.location.href = "/contact";
            },
        },
        {
            label: "Projects",
            icon: "pi pi-desktop",
            items: [
                {
                    label: "Project 1",
                    icon: "pi pi-code",
                    command: () => {
                        window.location.href = "/project-keterlambatan";
                    },
                },
                {
                    label: "Project 2",
                    icon: "pi pi-code",
                    command: () => {
                        window.location.href = "/project-sivina";
                    },
                },
                {
                    label: "Project 3",
                    icon: "pi pi-code",
                    command: () => {
                        window.location.href = "/project-lsp";
                    },
                },
            ],
        },
    ];

    const start = (
        <Link to="/">
        <img
            alt="logo"
            src="https://img.icons8.com/?size=100&id=2797&format=png&color=000000"
            height="30"
            style={{ marginLeft: '40px' }}
        />
    </Link>
    );    

    return (
        <div className="navbar-fixed">
            <Menubar model={[]} start={start} end={<Menubar model={items} />} />
        </div>
    );
}

export default Navbar;

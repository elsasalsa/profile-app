import React from "react";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Navbar from "../Navbar";
import { Card } from 'primereact/card';
import '../css/contact.css';

function Contact() {
    return (
        <div>
            <Navbar />
            <div className="contact-container">
                <div className="contact-cards">
                    <Card title="WhatsApp">
                        <i className="pi pi-whatsapp" style={{ fontSize: '2rem', color: '#25D366' }}></i>
                        <p>0858-1781-5589</p>
                    </Card>
                    <Card title="LinkedIn">
                        <i className="pi pi-linkedin" style={{ fontSize: '2rem', color: '#0077B5' }}></i>
                        <p>linkedin.com/in/elsasalsa</p>
                    </Card>
                    <Card title="Email">
                        <i className="pi pi-envelope" style={{ fontSize: '2rem', color: '#d93025' }}></i>
                        <p>elsasalsabilla73@gmail.com</p>
                    </Card>
                    <Card title="Github">
                        <i className="pi pi-github" style={{ fontSize: '2rem', color: '#333' }}></i>
                        <p>github.com/elsasalsa</p>
                    </Card>
                </div>

                <div className="contact-form">
                    <Card title="Get In Touch">
                        <p>Let us know your inquiries and we will get back to you.</p>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Your Name..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="youremail@domain.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" placeholder="Your Message..." rows="4"></textarea>
                            </div>
                            <button type="submit">Send</button>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Contact;

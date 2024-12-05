import React, { useRef } from "react";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Navbar from "../Navbar";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';

function ProjectSivina() {
    const stepperRef = useRef(null);

    return (
        <div>
            <Navbar />
            <div className="p-m-4 center-container" style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
                <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Application For Retail Audit and Observation Survey</h2>

                <Stepper ref={stepperRef} style={{ flexBasis: '50rem', margin: '50px 20px' }}>
                    {/* Stepper Panel 1 */}
                    <StepperPanel header="Halaman Product Master">
                        <div className="flex flex-column h-12rem">
                            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                                <img
                                    src="/img/sivina2.png"
                                    alt="Step 1"
                                    style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                                />
                            </div>
                        </div>
                        <div className="flex pt-4 justify-content-end">
                            <Button
                                label="Next"
                                icon="pi pi-arrow-right"
                                iconPos="right"
                                onClick={() => stepperRef.current.nextCallback()}
                            />
                        </div>
                    </StepperPanel>

                    {/* Stepper Panel 2 */}
                    <StepperPanel header="Data Processing">
                        <div className="flex flex-column h-12rem">
                            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                                <img
                                    src="/img/sivina3.png"
                                    alt="Step 2"
                                    style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                                />
                            </div>
                        </div>
                        <div className="flex pt-4 justify-content-between">
                            <Button
                                label="Back"
                                severity="secondary"
                                icon="pi pi-arrow-left"
                                onClick={() => stepperRef.current.prevCallback()}
                            />
                            <Button
                                label="Next"
                                icon="pi pi-arrow-right"
                                iconPos="right"
                                onClick={() => stepperRef.current.nextCallback()}
                            />
                        </div>
                    </StepperPanel>

                    {/* Stepper Panel 3 */}
                    <StepperPanel header="Halaman Peta">
                        <div className="flex flex-column h-12rem">
                            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                                <img
                                    src="/img/sivina4.png"
                                    alt="Step 3"
                                    style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                                />
                            </div>
                        </div>
                        <div className="flex pt-4 justify-content-start">
                            <Button
                                label="Back"
                                severity="secondary"
                                icon="pi pi-arrow-left"
                                onClick={() => stepperRef.current.prevCallback()}
                            />
                        </div>
                    </StepperPanel>
                </Stepper>
            </div>
        </div>

    );
}

export default ProjectSivina;
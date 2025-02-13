import React from "react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Countries from "./components/Countries";
import AdmissionProcess from "./components/AdmissionProcess";
import LeadForm from "./components/LeadForm";

function App() {
  return (
    <div className="bg-gray-100">
      <Hero />
      <Benefits />
      <Countries />
      <AdmissionProcess />
      <LeadForm />
    </div>
  );
}

export default App;

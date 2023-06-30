import React from "react";
import "./contact.css";

function Contact() {
    
  return (
    <div className="containerContact">
      <form action="">
        <label htmlFor="firstname">Vorname & Nachname</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Ihr Vor- und Nachname..."
        />

        <label htmlFor="lastname">E-Mail</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Ihre E-Mail..."
        />

        <label htmlFor="Grund">Grund</label>
        <select id="grund" name="grund">
          <option value="Demos">Demos</option>
          <option value="Kaufvorschlag">Kaufvorschlag</option>
          <option value="DAWvorschlag">DAWvorschlag</option>
        </select>

        <label htmlFor="subjekt">Subjekt</label>
        <textarea
          id="subjekt"
          name="subjekt"
          placeholder="Schreiben Sie eine Nachricht"
          style={{ height: "200px" }}
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;


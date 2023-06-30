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
          placeholder="Your first and last name..."
        />

        <label htmlFor="lastname">E-Mail</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your E-Mail..."
        />

        <label htmlFor="Grund">Reason</label>
        <select id="grund" name="grund">
          <option value="Demos">Demos</option>
          <option value="Kaufvorschlag">Recommendations hardware</option>
          <option value="DAWvorschlag">Recommendations software</option>
        </select>

        <label htmlFor="subjekt">subject</label>
        <textarea
          id="subjekt"
          name="subjekt"
          placeholder="Write your message here..."
          style={{ height: "200px" }}
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;


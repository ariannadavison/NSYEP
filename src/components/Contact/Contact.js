import React from "react";
import { contactInfo } from "./AllContacts.js";
import Accordion from "./Accordion/Accordion.js";
import "./contact.css";
import Form from "./Form/Form.js";

const Contact = () => {
  return (
    <div className="contactNform__container">
      <div className="contact__regionAccordions">
        {contactInfo.map((item, key) => {
          return (
            <Accordion
              key={key}
              title={item.Region}
              text={
                <div className="contact__container">
                  {item.contacts.map((item, key) => {
                    return (
                      <div key={key} className="contact__contactInfo">
                        <span className="contact__worksite">{item.site}</span>
                        <span className="contact__nameAndEmail">
                          {item.personToContact} {<br />} {item.email}
                        </span>
                        <span className="contact__phoneNumber">
                          {item.phone}
                        </span>
                      </div>
                    );
                  })}
                </div>
              }
            />
          );
        })}
      </div>
      <div className="contact_formContainer">
        <Form />
      </div>
    </div>
  );
};

export default Contact;

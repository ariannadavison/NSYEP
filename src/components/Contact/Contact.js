import { Card, Typography } from "@material-ui/core";
import React from "react";
import { contactInfo } from "../../data/AllContacts.js";
import Accordion from "./Accordion/Accordion.js";
import "./contact.css";
import Form from "./Form/Form.js";

const Contact = () => {
  return (
    <div className="contactNform__container margins">
      <div className="contact__regionAccordions">
        {contactInfo.map((item, key) => {
          return (
            <Accordion
              title={item.Region}
              text={item.contacts.map((item, key) => {
                return (
                  <Card key={key} id="contact__contactInfo">
                    <Typography className="contact__worksite">
                      {item.site}
                    </Typography>
                    <Typography className="contact__nameAndEmail">
                      {item.personToContact} {item.email ? `- ${item.email}` : ""}
                    </Typography>
                    <Typography className="contact__phoneNumber">
                      {item.phone}
                    </Typography>
                  </Card>
                );
              })}
              unique={key}
            />
          );
        })}
        <div className="placeholder" />
        <div className="placeholder" />
        <div className="placeholder" />
      </div>
      <div className="contact_formContainer">
        <Form />
      </div>
    </div>
  );
};

export default Contact;

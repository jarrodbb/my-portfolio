//Import from react
import { useState } from "react";
import React from "react";
//Import from semantic UI for form
import { Form, Input, TextArea, Button } from "semantic-ui-react";
//Import emailjs
import emailjs from "emailjs-com";
//Import from SweetAlert2 for pop up animation
import Swal from "sweetalert2";
//import specific css
import "./style.css";

//Defined for sending email
const SERVICE_ID = "service_p3fberx";
const TEMPLATE_ID = "template_z2po09u";
const USER_ID = "g0hbpPQa7LLj_IiNe";

//Import to validate email
import { validateEmail } from "../utils/helpers";

export default function ContactPage() {
  //Define states
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submission, setSubmission] = useState("");
  const [userLocation, setLocation] = useState("");

  //Check function 
  const checkClick = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log(inputType);
    if (userLocation === "") {
    }
  };

  //Function to handle when input is changed 
  //Checks if input is empty and calls error message if required
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      if (inputValue === "") {
        return setErrorMessage("cannot be empty"), setEmail("");
      } else {
        setEmail(inputValue);
      }
    }
    if (inputType === "name") {
      if (inputValue === "") {
        return setErrorMessage("Please include your name"), setName("");
      } else {
        setName(inputValue);
      }
    }
    if (inputType === "message") {
      if (inputValue === "") {
        return (
          setErrorMessage("Please include a message, thanks"), setMessage("")
        );
      } else {
        setMessage(inputValue);
      }
    }
    setErrorMessage("");
    setSubmission("");
  };

  //Handle when form is submitted
  const handleFormSubmit = (e) => {
    //prevent default on form
    e.preventDefault();
//Check if email is valid
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid, please try again");
      return;
    }
//Required to send email
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
//alert for user after submitting
    setSubmission(`Thanks for your email ${name}. I'll be intouch :)`);

    setName("");
    setMessage("");
    setErrorMessage("");
    setEmail("");
  };
  const checkName = (event) => {
    console.log(event.target.value);
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputValue.length < 1) {
      setErrorMessage(`${inputType} cannot be empty`);
    }
  };
  //Form
  return (
    <div>
      <div className="title-boarder rounded-circle">
        <h1>Contact Me</h1>
      </div>
      <div className="App">
        <h3>{submission}</h3>

        <Form className="contact-bg" onSubmit={handleFormSubmit}>
          <Form.Field
            id="form-input-control-last-name"
            value={name}
            name="name"
            control={Input}
            onBlur={checkName}
            onChange={handleInputChange}
            label="Name"
            type="text"
            onClick={checkClick}
            placeholder="Name..."
            required
            icon="user circle"
            iconPosition="left"
          />

          <Form.Field
            id="form-input-control-email"
            value={email}
            control={Input}
            name="email"
            onBlur={checkName}
            label="Email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            required
            icon="mail"
            iconPosition="left"
          />

          <TextArea
            id="form-textarea-control-opinion "
            rows="5"
            value={message}
            onBlur={checkName}
            // control={Input}
            name="message"
            label="Message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
            required
          />
          <button className="submit-button mt-2" type="submit ">
            Submit
          </button>
        </Form>
        {errorMessage && (
          <div>
            <p className="error-text p-2 error-display mt-2">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}


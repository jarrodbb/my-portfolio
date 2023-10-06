import { useState } from "react";
import "./style.css";

import { validateEmail } from "../utils/helpers";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submission, setSubmission] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      if (inputValue === "") {
        return setErrorMessage("cannot be empty");
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

  const handleFormSubmit = (e) => {
    //add use effect to alert name
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid, please try again");
      return;
    }

    setSubmission(`Thanks for your email ${name}. I'll be intouch :)`);

    // alert(`Thanks for your email ${name}. I'll be intouch :)`);

    setName("");
    setMessage("");
    setErrorMessage("");
    setEmail("");
  };

  return (
    <div className="container text-center">
      <h3>{submission}</h3>

      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="your name"
          required
        />

        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          required
        />

        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

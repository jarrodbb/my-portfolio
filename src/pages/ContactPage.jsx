import { useState } from "react";
import "./style.css";

import { validateEmail } from "../utils/helpers";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // return inputType === 'name' ? setName(inputValue)

    if (inputValue === "") {
      setErrorMessage(inputType + " test");
      return;
    }

    if (inputType === "email") {
      setEmail(inputValue);
    }
    if (inputType === "name") {
      setName(inputValue);
    }

    if (inputType === "message") {
      setMessage(inputValue);
    }

    //   if (inputType === "email" ) {
    //     if (inputValue === "") {
    //       setErrorMessage("cannot be empty");
    //     } else {
    //       setEmail(inputValue);
    //     }
    //   }
    //   if (inputType === "name") {
    //     if (inputValue === "") {
    //       setErrorMessage("cannot be empty");
    //     } else {
    //       setName(inputValue);
    //     }
    //   }
    //   if (inputValue === "message") {
    //     if (inputValue === "") {
    //       setErrorMessage("cannot be empty")
    //   } else {
    //     setMessage(inputValue);
    //   }
    // }

    // setErrorMessage("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid, please try again");
      return;
    }

    alert(`Thanks for your email ${name}. I'll be intouch :)`);

    setName("");
    setMessage("");
    setErrorMessage("");
    setEmail("");
  };

  return (
    <div className="container text-center">
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
        />

        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
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

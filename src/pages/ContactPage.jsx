import { useState } from "react";
import React from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./style.css";

const SERVICE_ID = "service_p3fberx";
const TEMPLATE_ID = "template_z2po09u";
const USER_ID = "g0hbpPQa7LLj_IiNe";

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

    setSubmission(`Thanks for your email ${name}. I'll be intouch :)`);

    // alert(`Thanks for your email ${name}. I'll be intouch :)`);

    setName("");
    setMessage("");
    setErrorMessage("");
    setEmail("");
  };

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
            onChange={handleInputChange}
            label="Name"
            type="text"
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
            label="Email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            required
            icon="mail"
            iconPosition="left"
          />

          <Form.Field
            id="form-textarea-control-opinion "
            rows="5"
            value={message}
            control={Input}
            name="message"
            label="Message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
            required
          />
          <button type="submit">Submit</button>
        </Form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// import { useState } from "react";
// import React from "react";
// import { Form, Input, TextArea, Button } from "semantic-ui-react";
// import "./style.css";

// import { validateEmail } from "../utils/helpers";

// export default function ContactPage() {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [submission, setSubmission] = useState("");

//   const handleInputChange = (e) => {
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     if (inputType === "email") {
//       if (inputValue === "") {
//         return setErrorMessage("cannot be empty");
//       } else {
//         setEmail(inputValue);
//       }
//     }
//     if (inputType === "name") {
//       if (inputValue === "") {
//         return setErrorMessage("Please include your name"), setName("");
//       } else {
//         setName(inputValue);
//       }
//     }
//     if (inputType === "message") {
//       if (inputValue === "") {
//         return (
//           setErrorMessage("Please include a message, thanks"), setMessage("")
//         );
//       } else {
//         setMessage(inputValue);
//       }
//     }
//     setErrorMessage("");
//     setSubmission("");
//   };

//   const handleFormSubmit = (e) => {
//     //add use effect to alert name
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setErrorMessage("Email is invalid, please try again");
//       return;
//     }

//     setSubmission(`Thanks for your email ${name}. I'll be intouch :)`);

//     // alert(`Thanks for your email ${name}. I'll be intouch :)`);

//     setName("");
//     setMessage("");
//     setErrorMessage("");
//     setEmail("");
//   };

//   return (
//     <div className="container text-center">
//       <h3>{submission}</h3>

//       <form className="form" onSubmit={handleFormSubmit}>
//         <input
//           value={name}
//           name="name"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="your name"
//           required
//         />

//         <input
//           value={email}
//           name="email"
//           onChange={handleInputChange}
//           type="email"
//           placeholder="email"
//           required
//         />

//         <input
//           value={message}
//           name="message"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="message"
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {errorMessage && (
//         <div>
//           <p className="error-text">{errorMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// }

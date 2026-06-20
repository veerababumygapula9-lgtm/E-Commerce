import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      message.trim() === ""
    ) {
      alert("All Fields Are Required");
      return;
    }

    alert("Form Submitted Successfully");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br />
        <br />

        <textarea
          placeholder="Enter Message"
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />

        <br />
        <br />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
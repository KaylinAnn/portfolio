import React, { Component } from "react";
import "./ContactMe.css";
import axios from "axios";

export class ContactMe extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (name === "" || email === "" || message === "") {
      alert("Oh no! One or more inputs are empty.");
    } else {
      axios
        .post("/api/send", {
          name: name,
          email: email,
          message: message
        })
        .then(response => {
          console.log(response.data);

          if (response.data.msg === "success") {
            alert("Message Sent.");
            this.resetForm();
          } else if (response.data.msg === "fail") {
            alert("Message failed to send.");
          }
        });
    }
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  render() {
    return (
      <div className="contact-me">
        <div className="contact-text-container">
          <h1 className="contact-text">Contact Me</h1>
        </div>

        <form
          className="contact-form-container"
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <div className="name-input-container input-container">
            <label for="name">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="email-input-container input-container">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="message-input-container input-container">
            <label for="message">Message</label>
            <textarea className="form-control-message" rows="5" id="message" />
          </div>
          <button type="submit" className="btn btn-primary">
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default ContactMe;

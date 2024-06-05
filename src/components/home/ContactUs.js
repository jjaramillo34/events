"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const displayFormMessage = (message, isSuccess) => {
    setFormMessage(message);
    setFormStatus(isSuccess ? "success" : "error");

    // Hide message after 3 seconds
    setTimeout(() => setFormStatus(""), 3000);
  };

  const checkForm = () => {
    if (name === "" || email === "" || message === "") {
      displayFormMessage("Please fill out all fields.", false);
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      displayFormMessage("Please enter a valid email address.", false);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!checkForm()) {
      return;
    }

    const formData = { name, email, message };

    setFormStatus("loading");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setName("");
      setEmail("");
      setMessage("");
      displayFormMessage("Message sent successfully!", true);
    } catch (error) {
      console.error("Error:", error);
      displayFormMessage("Error sending message.", false);
    }
  };

  return (
    <div className="section bg-gray-100 w-full py-8" id="contact">
      <h2 className="text-center text-3xl font-bold mb-6 text-gray-800 uppercase">
        Contact Us
      </h2>
      <div className="flex justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2 bg-white rounded-lg shadow-xl p-8">
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="contactName"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                id="contactName"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="contactEmail"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                id="contactEmail"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="contactMessage"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                id="contactMessage"
                rows="5"
                placeholder="Your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-teal-400 text-white hover:bg-black font-bold py-2 px-6 rounded-full transition-colors duration-300"
                disabled={formStatus === "loading"}
              >
                {formStatus === "loading" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {formStatus && (
        <div
          className={`alert mt-4 text-center ${
            formStatus === "success" ? "bg-green-500" : "bg-red-500"
          } text-white font-bold px-4 py-2 rounded-lg`}
        >
          <p id="messageContent">{formMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;

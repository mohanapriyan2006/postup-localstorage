import React from "react";

export const About = () => {
  const handleContact = (e) => {
    e.preventDefault();
    alert("Your message successfully send ✅");
  };

  return (
    <>
      <center>
        <div className="about">
          <h2>About</h2>
          <p style={{ marginTop: "1rem" }}>
            <b>
              I am Mohanapriyan. This website is my small project in react js
            </b>
          </p>
          <p
            style={{
              marginTop: "1rem",
              marginBottom: "30px",
              textAlign: "start",
              padding: "10px",
            }}
          >
            Welcome to PostUp, the platform designed to make sharing and
            managing your messages simple and effective. Built with cutting-edge
            technology using local storage and APIs, PostUp offers a fast and
            secure way to post, store, and interact with messages. <br />
            <br />
            At PostUp, we prioritize user experience and efficiency. Our
            platform ensures your messages are accessible and well-organized,
            whether you're sharing ideas, collaborating with others, or keeping
            personal notes.
            <br />
            <br /> With PostUp, your thoughts and communications are always at
            your fingertips. Join us in creating a space where sharing is
            seamless and connections are stronger.
            <br />
            <br /> Thank you for choosing PostUp—where every message matters.
          </p>
        </div>
      </center>
      <center>
        <div className="contact">
          <h2>Contact Us</h2>
          <form onSubmit={handleContact}>
            <label>Name</label>
            <input type="text" required />
            <label>Email</label>
            <input type="email" required />
            <label>Message</label>
            <textarea required></textarea>
            <div className="btn">
              <button className="contact-btn" type="submit">
                send
              </button>
            </div>
          </form>
        </div>
      </center>
    </>
  );
};

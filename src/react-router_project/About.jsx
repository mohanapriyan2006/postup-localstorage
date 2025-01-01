import React from "react";

export const About = () => {

  const handleContact = (e) => {
    e.preventDefault();
    alert("Your message successfully send ✅");
  }

  return (
    <>
      <center>
        <div className="about">
          <h2>About</h2>
          <p style={{ marginTop: "1rem" }}>
            I am Mohanapriyan. This website is my small projecṭ in react js
          </p>
          <p
            style={{
              fontSize: "14px",
              marginTop: "3rem",
              marginBottom: "30px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            perferendis tempora aspernatur deleniti consequuntur dicta,
            consequatur cum iusto. Omnis dolore architecto cumque qui illum ut
            incidunt minima ratione nam doloribus?
          </p>
        </div>
      </center>
      <center>
        <div class="contact">
        <h2>Contact Us</h2>
          <form onSubmit={handleContact}>
            <label>Name</label>
            <input type="text" required />
            <label>Email</label>
            <input type="email" required />
            <label>Message</label>
            <textarea required></textarea>
            <div class="btn">
              <button type="submit">send</button>
            </div>
          </form>
        </div>
      </center>
    </>
  );
};

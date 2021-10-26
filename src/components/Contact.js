import React from "react";
import "../components/style/contact.scss";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }
  return (
    <section id="contact" className="">
      <div className="">
        <div className="">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className=""
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="">
            <div className="">
              <h2 className="">ADDRESS</h2>
              <p className="">
                97 Warren St. <br />
                New York, NY 10007
              </p>
            </div>
            <div className="">
              <h2 className="">EMAIL</h2>

              <h2 className="">PHONE</h2>
              <p className="">123-456-7890</p>
            </div>
          </div>
        </div>
        <form netlify name="contact" className="" onSubmit={handleSubmit}>
          <h2 className="">Hire Me</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="">
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="message" className="">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className=""
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

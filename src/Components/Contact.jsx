import React, { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // This will store success or error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS credentials
    const serviceID = "service_8f8w3xf";
    const templateID = "template_wnplf3k";
    const userID = "Fw8CcxaI6OGlBL_qp";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                About <span>Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I'm Shahzaib Yaqoob
                I am a Computer Science graduate with a deep passion for
                Artificial Intelligence (AI) and Data Science. My expertise lies
                in designing intelligent systems and uncovering actionable
                insights from data to enable impactful decision-making. With a
                strong foundation in programming, machine learning, and data
                analytics, I have completed diverse projects ranging from
                predictive modeling to natural language processing. These academic
                and practical experiences have equipped me with the skills needed
                for innovative AI solutions and data-driven problem-solving.
                <br />
                <br />
                <span className=" text-4xl font-semibold">My Vision{" "}</span>
                I aspire to contribute to the advancement of AI and Data Science
                by developing transformative technologies that reshape industries
                and improve lives. Whether it involves creating intelligent
                systems or optimizing complex processes, my goal is to stay at the
                forefront of innovation while leaving a meaningful impact on the
                world.
              </p>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  4
                  <span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Projects</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  300
                  <span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Connections</span>
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">Let´s connect!</p>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name ..."
              value={formData.name}
              onChange={handleChange}
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email ..."
              value={formData.email}
              onChange={handleChange}
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              value={formData.message}
              onChange={handleChange}
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
            >
              Send Message
            </button>
            {status && (
              <div
                className={`mt-4 text-center ${
                  status.includes("success") ? "text-green-500" : "text-red-500"
                }`}
              >
                {status}
              </div>
            )}
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;

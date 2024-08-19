import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Services.css";

const Services = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    services: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    axios
      .post("http://localhost:5000/send-email", {
        ...formData,
        formType: "service",
      })
      .then((response) => {
        alert("Email sent successfully");
      })
      .catch((error) => {
        alert("Failed to send email");
      });
  };
  return (
    <div className="screen-container">
      <div id="services" className="screen ">
        <div className="service-div">
          <h2>Our Services</h2>
          <div className="cards">
            <div className="card">
              <h3>Consultancy</h3>
              <p>
                Consultancy services (Accounts, Finance, Auditing, Tax services)
                <br />
                Supporting welfare and Saccos in record keeping and compliance
                with statutory requirements
                <br />
                Identifying youth and knowledge gaps
              </p>
            </div>
            <div className="card">
              <h3>Computer Services</h3>
              <p>
                Computer services
                <br />
                Cyber services (Photocopying, printing, and typing)
              </p>
            </div>
            <div className="card">
              <h3>Economic Empowerment</h3>
              <p>
                Economic empowerment services
                <br />
                Research in water-related fields and environmental activities,
                Financial services, accounting, and economic empowerment
              </p>
            </div>
            <div className="card">
              <h3>Student Guidance</h3>
              <p>
                Guiding universities and college students in project, concepts
                per proposal, presentations, etc.
              </p>
            </div>
            <div className="card">
              <h3>Home & Hostel Services</h3>
              <p>
                Home crafts services
                <br />
                Hostel services for college and university students (Ladies
                only)
              </p>
            </div>
            <div className="card">
              <h3>Industrial Services</h3>
              <p>Offer Industrial services for colleges and universities</p>
            </div>
          </div>
        </div>
        <div className="section-container service-div">
          <section className="left">
            <div className="service-form form w-full md:w-auto   my-10 p-5 border rounded-lg shadow-lg bg-white">
              <h3>Service Request Form</h3>
              <form onSubmit={handleSubmit}>
                {/* Form Inputs */}
                <div className="grid md:flex grid-col justify-center md:justify-around items-center">
                  <div className="m-2">
                    <label
                      className="block text-gray-700 text-sm md:text-lg font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="shadow focus:border-orange-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="m-2">
                    <label
                      className="block text-gray-700 text-sm md:text-lg  font-bold mb-2"
                      htmlFor="email"
                    >
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="shadow focus:border-orange-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="j.doe@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:flex grid-col justify-center md:justify-around items-center">
                  <div className="m-2">
                    <label
                      className="block text-gray-700 text-sm md:text-lg font-bold mb-2"
                      htmlFor="budget"
                    >
                      Budget Range in Ksh
                    </label>
                    <input
                      type="text"
                      id="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="shadow focus:border-orange-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="500.00 Ksh - 1,000.00 Ksh"
                    />
                  </div>
                  <div className="m-2">
                    <label
                      className="block text-gray-700 text-sm md:text-lg font-bold mb-2"
                      htmlFor="services"
                    >
                      Services
                    </label>
                    <select
                      id="services"
                      value={formData.services}
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option>Consultancy Services</option>
                      <option>Computer Services</option>
                      <option>Cyber Services</option>
                      <option>Auditing</option>
                      <option>Tax Services</option>
                    </select>
                  </div>
                </div>

                <div className="m-2">
                  <label
                    className="block text-gray-700 text-sm md:text-lg  font-bold mb-2"
                    htmlFor="description"
                  >
                    Project description
                  </label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="shadow focus:border-orange-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Hello there...I need assistance with... Here are my goals and timeline: ... Additionally, you can find my design link here: ..."
                    rows="5"
                  ></textarea>
                </div>

                <div className="m-3 flex items-center  justify-between">
                  <button
                    type="submit"
                    className="button text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                  <div className="text-center mt-4 text-black flex flex-col justify-center items-center">
                    <p>Hate Contact forms?</p>
                    <p>
                      <a
                        href="mailto:researchemesa@gmail.com"
                        className="text-sm text-blue-500 hover:underline"
                      >
                        Our email
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <section className="right">
            <h3>Services Overview</h3>
            <ol>
              <li>
                Consultancy services (Accounts, Finance, Auditing, Tax services)
              </li>
              <li>Computer services.</li>
              <li>Economic empowerment services.</li>
              <li>Cyber services (Photocopying, printing and typing)</li>
              <li>
                Supporting welfare and Saccos in record keeping and compliance
                with statutory requirements.
              </li>
              <li>Identifying youth and knowledge gaps.</li>
              <li>
                Guiding universities and college students in project, concepts
                per proposal, presentations, etc.
              </li>
              <li>Home crafts services.</li>
              <li>
                Hostels services for college and university students (Ladies
                only).
              </li>
              <li>
                Research in water-related fields and environmental activities,
                financial services, accounting, and economic empowerment.
              </li>
              <li>Offer industrial services for colleges and universities.</li>
            </ol>
            <ul></ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services;

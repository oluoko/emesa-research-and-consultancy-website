import React from "react";
import "./Services.css";

const Services = () => {
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
            <div className="service-form form">
              <h3>Request a service</h3>
              <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Service" />
                <textarea placeholder="Message"></textarea>
              </form>
              <button className="button">Submit</button>
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

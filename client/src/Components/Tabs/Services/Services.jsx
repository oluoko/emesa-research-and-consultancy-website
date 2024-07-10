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
              <h3>Research</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                ab quibusdam sint omnis eius ea distinctio nesciunt facilis
                nostrum sapiente corporis quisquam perferendis perspiciatis
                magni, asperiores sit debitis beatae dolorum placeat, animi
                ullam error deleniti. Aspernatur ipsa iure harum obcaecati ab
                est esse
                <button>Learn more</button>
              </p>
            </div>
            <div className="card">
              <h3>Consultancy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                ab quibusdam sint omnis eius ea distinctio nesciunt facilis
                nostrum sapiente corporis quisquam perferendis perspiciatis
                magni, asperiores sit debitis beatae dolorum placeat, animi
                ullam error deleniti. Aspernatur ipsa iure harum obcaecati ab
                est esse
                <button>Learn more</button>
              </p>
            </div>
            <div className="card">
              <h3>Accounting</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                ab quibusdam sint omnis eius ea distinctio nesciunt facilis
                nostrum sapiente corporis quisquam perferendis perspiciatis
                magni, asperiores sit debitis beatae dolorum placeat, animi
                ullam error deleniti. Aspernatur ipsa iure harum obcaecati ab
                est esse
                <button>Learn more</button>
              </p>
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
                <button>Submit</button>
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

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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              cumque repellat nostrum est vitae assumenda fugiat, cum suscipit
              sint adipisci vel molestiae quidem ipsa! Quasi ad praesentium sed
              autem distinctio.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              numquam dolorum! Dicta magni possimus odit reiciendis assumenda
              libero fuga ullam. Nam, illum. Minima in numquam pariatur voluptas
              voluptatem, nulla iusto!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services;

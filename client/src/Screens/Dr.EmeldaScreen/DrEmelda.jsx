import React from "react";
import DrEmelda1 from "../../Assets/Images/Dr. Emelda Nafula/1.jpeg";
import "./Dr. Emelda.css";
import Navbar from "../../Components/Navbar/Navbar";

const DrEmelda = () => {
  return (
    <div className="screen-container">
      <Navbar />
      <div id="emelda-portfolio" className="screen">
        <div className="section-container">
          <section className="left">
            <img src={DrEmelda1} alt="" />
          </section>
          <section className="right">
            <h3>About Dr. Emelda Nyongesa</h3>
            <br />
            <p>
              She is an experienced Financial Coordinator with a demonstrated
              history of working in the utilities industry. Skilled in
              Budgeting, Managerial Finance, Account Reconciliation, Accounting,
              and. Strong finance professional CPAK ,IBA INTERNATIONAL BUSINESS
              ADMINISTRATION USIU-A A member, MBA holder in Accounts and Finance
              KENYATTA UNIVERSITY.
            </p>
            <br />
            <p>
              PhD Business ADMINISTRATION UNDERWAY at JKUAT, Treasurer of
              nairobi city water and sewerage staff welfare association ,
              part-time lecturer in the university and Sunday school teacher in
              addition to being a mother of four
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DrEmelda;

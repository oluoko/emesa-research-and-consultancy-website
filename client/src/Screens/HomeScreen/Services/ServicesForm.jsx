import { useRef } from "react";
import Toast, { showToast } from "../../../Components/Toast/Toast";
import {
  CONTACTS_SERVICES_TEMPLATE_ID,
  PUBLIC_KEY,
  SERVICE_ID,
} from "../../../config";
import emailjs from "@emailjs/browser";
// npm install --save @emailjs/browser --legacy-peer-deps

const ServicesForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, CONTACTS_SERVICES_TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          showToast("Message Sent Successfully", "success");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          showToast(error.text, "error");
        }
      );
  };
  return (
    <div className="service-form form w-full md:w-auto   my-10 p-5 border rounded-lg shadow-lg bg-white">
      <Toast />
      <h3>Service Request Form</h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className="grid md:flex grid-col justify-center md:justify-around items-center">
          <input type="hidden" name="request_type" value="Services" />
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
              className="shadow focus:border-orange-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="John Doe"
              name="name"
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
              className="shadow focus:border-orange-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="j.doe@company.com"
              name="email"
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
              className="shadow focus:border-orange-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="500.00 Ksh - 1,000.00 Ksh"
              name="budget_range"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="service"
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
            className="shadow focus:border-orange-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Hello there...I need assistance with... Here are my goals and timeline: ... Additionally, you can find my design link here: ..."
            rows="5"
            name="description"
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
  );
};

export default ServicesForm;

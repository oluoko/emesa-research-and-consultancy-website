import { useState } from "react";

const ContactUsForm = () => {
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
  return (
    <div className="contacts-form form w-full md:w-auto my-10 p-5 border rounded-lg shadow-lg bg-black ">
      <h3>Contacts Form</h3>
      <form>
        <div className="grid md:flex grid-col justify-center md:justify-around items-center ">
          <div className="m-2">
            <label
              className="block text-white text-sm md:text-lg font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="focus:border-orange-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline text-xs"
              placeholder="John Doe"
            />
          </div>
          <div className="m-2">
            <label
              className="block text-white text-sm md:text-lg font-bold mb-2"
              htmlFor="email"
            >
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              className="focus:border-orange-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline"
              placeholder="j.doe@company.com"
            />
          </div>
        </div>

        <div className="m-2">
          <label
            className="block text-white text-sm md:text-lg font-bold mb-2"
            htmlFor="description"
          >
            What is this about?
          </label>
          <textarea
            id="description"
            className="focus:border-orange-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Hello there,

There is a bug in... How can I apply to be an employee... At what time are your offices open..."
            rows="5"
          ></textarea>
        </div>
        <div className="m-2">
          {/* <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">
              By submitting this form, you agree to the Privacy Policy
            </span>
          </label> */}
        </div>
        <div className="m-3 flex justify-between items-center">
          <button
            type="submit"
            className="button text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          <div className="text-center mt-4 text-white flex flex-col justify-center items-center">
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

export default ContactUsForm;

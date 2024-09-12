import Back from "../Components/Back";
import { useRef } from "react";
import Toast, { showToast } from "../Components/Toast/Toast";
import emailjs from "@emailjs/browser";
import {
  CONTACTS_SERVICES_TEMPLATE_ID,
  PUBLIC_KEY,
  SERVICE_ID,
} from "../config";
// npm install --save @emailjs/browser --legacy-peer-deps

const AttacheeApplicationScreen = () => {
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
    <div className=" relative flex flex-col  vh-100  items-center justify-center m-2">
      <Back />
      <Toast />
      <h2 className="mt-14 md:mt-6 text-2xl font-extrabold text-orange-500">
        APPLY FOR ATTACHMENT
      </h2>
      <div className="contacts-form form w-full md:w-2/3 my-1 md:my-5 p-4 md:p-10 border rounded-lg shadow-lg bg-gray-800 flex flex-col   text-white ">
        <form
          className=" flex flex-col items-center  "
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="grid md:flex grid-col justify-center md:justify-between items-center w-full my-1 md:my-2">
            <label htmlFor="name" className="text-sm md:text-lg">
              FULL NAME
            </label>
            <input
              type="name"
              id="name"
              className="col-md-9 pe-5 shadow appearance-none border rounded font-bold m-2 md:m-4 mb-2 md:mb-6 py-1 md:py-4 px-1 md:px-3 text-gray-600 w-full md:w-1/2 bg-inherit leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
              placeholder="John Doe"
              name="name"
            />
          </div>

          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-full" />

          <div className="grid md:flex grid-col justify-center md:justify-between items-center w-full my-1 md:my-2">
            <label htmlFor="email" className="text-sm md:text-lg">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              id="email"
              className="col-md-9 pe-5 shadow appearance-none border rounded font-bold m-2 md:m-4 mb-2 md:mb-6 py-1 md:py-4 px-1 md:px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500  w-full md:w-1/2"
              placeholder="j.doe@company.com"
              name="email"
            />
          </div>

          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-full" />

          <div className="grid md:flex grid-col justify-center md:justify-between items-center w-full my-1 md:my-2">
            <label htmlFor="message" className="text-sm md:text-lg">
              ABOUT YOURSELF
            </label>
            <textarea
              type="message"
              id="message"
              className="col-md-9 pe-5 shadow appearance-none border rounded font-bold m-2 md:m-4 mb-2 md:mb-6 py-1 md:py-4 px-1 md:px-3 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500  w-full md:w-1/2 overflow-y-hidden                                                         "
              placeholder="Message to the employee telling us about yourself..."
              name="about"
            />
          </div>

          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 w-full" />

          <div className="grid md:flex grid-col justify-center md:justify-between items-center w-full my-1 md:my-2">
            <label htmlFor="message" className="text-sm md:text-lg">
              UPLOAD CV
            </label>
            <div className="m-2 md:m-4 mb-2 md:mb-6 py-1 md:py-4 px-1 md:px-3  w-full md:w-1/2">
              <input
                className="col-md-9 shadow appearance-none border rounded font-bold m-4 text-gray-600 bg-inherit leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500 w-5/6 md:w-full "
                id="formFileLg"
                type="file"
                name="resume"
              />
              <div className="small text-gray-400 mt-2 w-full">
                Upload your CV/Resume or any other relevant file. Max file size
                10 MB
              </div>
            </div>
          </div>

          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 w-full" />

          <button
            type="submit"
            className=" button font-bold py-2 px-4 rounded text-xl focus:outline-none focus:shadow-outline w-full"
          >
            SEND APPLICATION
          </button>
        </form>
      </div>
    </div>
  );
};

export default AttacheeApplicationScreen;

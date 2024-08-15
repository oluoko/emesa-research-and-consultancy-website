import React from "react";

const UploadPictures = () => {
  return (
    <div className="flex flex-col justify-start place-items-start  items-center md:flex-row md:justify-around w-full h-full ">
      {[
        ["Upload to Home Gallery", "/admin-dashboard"],
        ["Upload to About Gallery", "/admin-dashboard/graphs"],
      ].map(([title, url]) => (
        <div
          key={title}
          className="flex flex-col justify-center items-center cursor-pointer bg-gray-300 h-full w-11/12 md:w-2/5 rounded-2xl mb-2 md:mb-0"
        >
          <div className="w-11/12 h-full m-4 border  border-dashed border-gray-600  flex flex-col justify-center items-center rounded-2xl text-xl">
            {title}
            <div className="text-sm my-4">
              {" "}
              Drag and drop to upload or{" "}
              <a href="#" className="text-blue-500 hover:text-orange-500">
                browse
              </a>{" "}
              your computer.
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UploadPictures;

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
          className="flex flex-col justify-center items-center cursor-pointer shadow-md h-full w-11/12 md:w-2/5 rounded-2xl mb-2 md:mb-0"
        >
          <div className="m-4 mt-4 md:mt-8 text-xl md:text-3xl">{title}</div>
          <div className="w-11/12 h-full m-4 bg-gray-300    flex flex-col justify-center items-center rounded-2xl">
            <div className="text-sm my-4 border  border-dashed border-gray-600 w-11/12 h-full rounded-xl flex flex-col justify-center items-center  hover:border-orange-500">
              <div className="text-lg md:text-2xl font-extrabold">
                Drop your image here to upload
              </div>
              <div className="text-xs md:text-md text-slate-600 ">
                Works with any .JPG, .PNG, or GIF file from the web.
              </div>
              <div className="text-xs md:text-md text-slate-600">
                Recommended size 300 X 300
              </div>
              <div className="text-xs md:text-md text-slate-600">or</div>
              <div className="text-xs md:text-md text-slate-600">
                Browser you computer
              </div>
              <button className="button my-2 md:my-4 text-sm md:text-2xl font-extrabold md:py-2 px-2 md:px-4 rounded focus:outline-none focus:shadow-outline">
                Choose File
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UploadPictures;

import React, { useRef } from "react";
import "./Blog.css";
import Navbar from "../../../Components/Navbar/Navbar";
import userProfile from "../../../Assets/userProfile.png";
import blogImage from "../../../Assets/blogImage.png";

const Blog = () => {
  const categoriesBarRef = useRef(null);

  const scrollLeft = () => {
    categoriesBarRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    categoriesBarRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="screen-container ">
      <Navbar screen="blog" />

      <div className="blog grid md:flex grid-col justify-center md:justify-around items-center">
        <div className="left-div  w-full md:w-2/3 rounded-xl flex flex-col justify-center items-left">
          <div className="relative my-2 w-full flex flex-col justify-center items-center">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-0 bottom-0  text-2xl text-black font-bold py-2 px-2 h-14 rounded-l-2xl bg-gradient-to-r from-gray-300 to-slate-50 hover:bg-gradient-to-r hover:from-gray-400 hover:to-slate-50"
            >
              &lt;
            </button>
            <ul
              ref={categoriesBarRef}
              className="categories-bar flex justify-around  items-center gap-4 overflow-hidden"
              style={{ width: "680px" }} // Set the fixed width
            >
              {[
                ["Technology"],
                ["Hisoty"],
                ["Banking"],
                ["Accounting"],
                ["Gaming"],
                ["Sports"],
                ["Religion"],
                ["Fashion"],
                ["Mindfulness"],
              ].map(([title]) => (
                <li key={title} className="bg-gray-500 radius-xl">
                  {title}
                </li>
              ))}
            </ul>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-0 bottom-0  h-14 text-2xl text-black font-bold py-2 px-2 rounded-r-2xl bg-gradient-to-r to-gray-300 from-slate-50 hover:bg-gradient-to-r hover:to-gray-400 hover:from-slate-50"
            >
              &gt;
            </button>
          </div>

          <div className="blog-container flex flex-col justify-center ">
            <div className="flex items-right w-full gap-3">
              <img src={userProfile} className="w-7 h-6 rounded-full" alt="" />
              <p>Daisy Okoti</p>
            </div>
            <div className="flex">
              <div className="flex flex-col justify-center">
                <h2 className="title text-3xl text-black font-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Accusa ntium qui dolor doloremque, non aliquid fugiat!
                </h2>
                <p className="contet-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis, iusto quasi. Perspiciatis sapiente itaque, saepe
                  minima, voluptates dolor eum rerum dolorum impedit corporis
                  voluptatem sunt aperiam doloribus numquam aliquam in vel, quam
                  fugit harum sit quia laboriosam perferendis! Libero debitis
                  expedita odit exercitationem molestiae odio, doloremque quidem
                  nulla animi assumenda nostrum vitae nihil quam sed maxime,
                  soluta minus quasi quis a deserunt, ipsam optio! Officiis
                  voluptatum amet consequuntur, sit obcaecati tempora possimus
                  deserunt exercitationem labore quae similique soluta quidem
                  accusamus aperiam autem doloremque. Consectetur in nobis
                  molestias esse assumenda! Maiores, esse odit? Culpa ullam
                  debitis magni esse porro magnam id eveniet minima
                  reprehenderit dolore accusantium officia, aperiam, pariatur
                  facere iste sapiente saepe est nesciunt itaque? Ipsum, minus
                  possimus. Quisquam nisi tempore ducimus, quidem quia tempora
                  maxime velit laboriosam impedit veritatis deleniti?
                  Voluptatibus id, ipsa ratione laudantium tenetur sequi animi
                  quidem fuga culpa voluptatum deserunt. Quasi sunt numquam
                  fugit, itaque, quo fugiat error quam vel eligendi accusantium
                  adipisci illo corrupti et. Iste corporis eveniet sequi vero
                  officia accusantium, dolores soluta!
                </p>
              </div>
              <img src={blogImage} className="radius-2xl h-36 w-40" />
            </div>
            <div className="grid grid-cols-4 z-10 w-96">
              <div className="flex flex-around gap-4">
                <div className="">Date</div>
                <div className="">Like</div>
                <div className="">Share</div>
              </div>
              <div className=""></div>
              <div className=""></div>
              <div className="flex flex-around gap-4">
                <div className="">Report</div>
                <div className="">Save</div>
                <div className="">About</div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-div hidden md:flex w-1/3 border rounded-3xl shadow-md shadow-slate-500 ">
          <h3>Most Viewed Blogs.</h3>
          <div className="blog-container-container flex flex-col my-2  h-80 overflow-y-scroll overflow-x-hidden ">
            <div className="blog-container">
              <div className="flex  justify-start gap-2  items-center">
                <img
                  src={userProfile}
                  className="w-4 h-4 rounded-full"
                  alt=""
                />
                <span className=" font-bold">Daisy Okoti</span>
                <span>in</span>
                <span className="font-bold">Mindfulness</span>
              </div>
              <div className="text-xl my-2 font-black">
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit.
                Voluptatibus
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

import React from "react";
import "./Blog.css";
import Navbar from "../../Navbar/Navbar";
import userProfile from "../../../Assets/userProfile.png";
import blogImage from "../../../Assets/blogImage.png";

const Blog = () => {
  return (
    <div className="screen-container ">
      <Navbar screen="blog" />

      <div className="blog flex items-start ">
        <div className="left-div  w-4/5 rounded-xl flex flex-col justify-center items-left">
          <h3 className="categories-bar flex  flex-nowrap gap-4">
            <li className="bg-gray-500 radius-xl">Technology</li>
            <li className="bg-gray-500 radius-xl">History</li>
            <li className="bg-gray-500 radius-xl">Banking</li>
            <li className="bg-gray-500 radius-xl">accounting</li>
            <li className="bg-gray-500 radius-xl">Gaming</li>
            <li className="bg-gray-500 radius-xl">Sports</li>
            <li className="bg-gray-500 radius-xl">Religion</li>
            <li className="bg-gray-500 radius-xl">Fashion</li>
            <li className="bg-gray-500 radius-xl">Mindfulness</li>
            <li className="bg-gray-500 radius-xl">Technology</li>
            <li className="bg-gray-500 radius-xl">History</li>
            <li className="bg-gray-500 radius-xl">Banking</li>
            <li className="bg-gray-500 radius-xl">accounting</li>
            <li className="bg-gray-500 radius-xl">Gaming</li>
          </h3>

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

        <div className="right-div mr-4 w-1/5 border bg-slate-300 rounded-3xl">
          <h3>Most Viewed blogs and</h3>
          <div className="blog-container-container flex flex-col my-2  h-80 overflow-y-scroll ">
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

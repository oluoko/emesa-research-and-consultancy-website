import React, { useRef } from "react";
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
    <div className="screen-container blog relative grid grid-cols-2 place-items-start md:flex-row lg:justify-around lg:gap-2">
      <Navbar screen="blog" />

      <div className=" left-div w-full px-6 md:w-2/3 flex flex-col justify-center items-left">
        <div className="categories-bar relative  my-2  flex flex-col justify-center items-center">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-2/4 -translate-y-1/2 bottom-0   text-black font-bold py-2 px-2 h-10 rounded-l-2xl text-xl  flex flex-col justify-center items-center bg-gradient-to-r from-gray-300 to-slate-50 hover:bg-gradient-to-r hover:from-gray-400 hover:to-slate-50"
          >
            &lt;
          </button>
          <div
            ref={categoriesBarRef}
            className="categories-bar flex justify-around  items-center gap-4 overflow-x-scroll w-10/12 "
          >
            {[
              ["Technology"],
              ["History"],
              ["Banking"],
              ["Accounting"],
              ["Gaming"],
              ["Sports"],
              ["Religion"],
              ["Fashion"],
              ["Mindfulness"],
            ].map(([title]) => (
              <div
                key={title}
                className="bg-gray-500 h-6 md:h-10 text-sm md:text-lg flex flex-col justify-center items-center p-2 rounded-xl md:rounded-3xl hover:text-orange-500 hover:bg-slate-900"
              >
                {title}
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-2/4 -translate-y-1/2  h-10  text-black font-bold py-2 px-2 rounded-r-2xl  text-xl  flex flex-col justify-center items-center  bg-gradient-to-r to-gray-300 from-slate-50 hover:bg-gradient-to-r hover:to-gray-400 hover:from-slate-50"
          >
            &gt;
          </button>
        </div>

        <div className="blog-container flex flex-col justify-center w-full mt-3 md:mt-6 pt-2  border-t-2 border-slate-500">
          <div className="flex items-right w-full gap-2 py-2">
            <img
              src={userProfile}
              className="w-4 h-4 md:w-7 md:h-7 rounded-full"
              alt=""
            />
            <p>Daisy Okoti</p>
          </div>
          <div className="flex justify-around w-full gap-2 pt-2 md:pt-0">
            <div className="flex flex-col justify-center w-2/3">
              <h2 className="title text-sm md:text-4xl text-black font-extrabold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusa
                ntium qui dolor doloremque, non aliquid fugiat!
              </h2>
              <p className="contet-text text-xs md:text-xl overflow-y-hidden h-4 md:h-7 mt-2">
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
                debitis magni esse porro magnam id eveniet minima reprehenderit
                dolore accusantium officia, aperiam, pariatur facere iste
                sapiente saepe est nesciunt itaque? Ipsum, minus possimus.
                Quisquam nisi tempore ducimus, quidem quia tempora maxime velit
                laboriosam impedit veritatis deleniti? Voluptatibus id, ipsa
                ratione laudantium tenetur sequi animi quidem fuga culpa
                voluptatum deserunt. Quasi sunt numquam fugit, itaque, quo
                fugiat error quam vel eligendi accusantium adipisci illo
                corrupti et. Iste corporis eveniet sequi vero officia
                accusantium, dolores soluta!
              </p>
            </div>
            <img src={blogImage} className="radius-2xl w-1/3 h-auto" />
          </div>
          <div className="w-full text-xs md:text-sm flex justify-between mt-3">
            <div className="flex justify-between gap-2">
              <div className="">Date</div>
              <div className="">Like</div>
              <div className="">Share</div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="">Report</div>
              <div className="">Save</div>
              <div className="">About</div>
            </div>
          </div>
        </div>

        <div className="blog-container flex flex-col justify-center w-full mt-3 md:mt-6 pt-2  border-t-2 border-slate-500">
          <div className="flex items-right w-full gap-2 py-2">
            <img
              src={userProfile}
              className="w-4 h-4 md:w-7 md:h-7 rounded-full"
              alt=""
            />
            <p>Daisy Okoti</p>
          </div>
          <div className="flex justify-around w-full gap-2 pt-2 md:pt-0">
            <div className="flex flex-col justify-center w-2/3">
              <h2 className="title text-sm md:text-4xl text-black font-extrabold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusa
                ntium qui dolor doloremque, non aliquid fugiat!
              </h2>
              <p className="contet-text text-xs md:text-xl overflow-y-hidden h-4 md:h-7 mt-2">
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
                debitis magni esse porro magnam id eveniet minima reprehenderit
                dolore accusantium officia, aperiam, pariatur facere iste
                sapiente saepe est nesciunt itaque? Ipsum, minus possimus.
                Quisquam nisi tempore ducimus, quidem quia tempora maxime velit
                laboriosam impedit veritatis deleniti? Voluptatibus id, ipsa
                ratione laudantium tenetur sequi animi quidem fuga culpa
                voluptatum deserunt. Quasi sunt numquam fugit, itaque, quo
                fugiat error quam vel eligendi accusantium adipisci illo
                corrupti et. Iste corporis eveniet sequi vero officia
                accusantium, dolores soluta!
              </p>
            </div>
            <img src={blogImage} className="radius-2xl w-1/3 h-auto" />
          </div>
          <div className="w-full text-xs md:text-sm flex justify-between mt-3">
            <div className="flex justify-between gap-2">
              <div className="">Date</div>
              <div className="">Like</div>
              <div className="">Share</div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="">Report</div>
              <div className="">Save</div>
              <div className="">About</div>
            </div>
          </div>
        </div>

        <div className="blog-container flex flex-col justify-center w-full mt-3 md:mt-6 pt-2  border-t-2 border-slate-500">
          <div className="flex items-right w-full gap-2 py-2">
            <img
              src={userProfile}
              className="w-4 h-4 md:w-7 md:h-7 rounded-full"
              alt=""
            />
            <p>Daisy Okoti</p>
          </div>
          <div className="flex justify-around w-full gap-2 pt-2 md:pt-0">
            <div className="flex flex-col justify-center w-2/3">
              <h2 className="title text-sm md:text-4xl text-black font-extrabold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusa
                ntium qui dolor doloremque, non aliquid fugiat!
              </h2>
              <p className="contet-text text-xs md:text-xl overflow-y-hidden h-4 md:h-7 mt-2">
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
                debitis magni esse porro magnam id eveniet minima reprehenderit
                dolore accusantium officia, aperiam, pariatur facere iste
                sapiente saepe est nesciunt itaque? Ipsum, minus possimus.
                Quisquam nisi tempore ducimus, quidem quia tempora maxime velit
                laboriosam impedit veritatis deleniti? Voluptatibus id, ipsa
                ratione laudantium tenetur sequi animi quidem fuga culpa
                voluptatum deserunt. Quasi sunt numquam fugit, itaque, quo
                fugiat error quam vel eligendi accusantium adipisci illo
                corrupti et. Iste corporis eveniet sequi vero officia
                accusantium, dolores soluta!
              </p>
            </div>
            <img src={blogImage} className="radius-2xl w-1/3 h-auto" />
          </div>
          <div className="w-full text-xs md:text-sm flex justify-between mt-3">
            <div className="flex justify-between gap-2">
              <div className="">Date</div>
              <div className="">Like</div>
              <div className="">Share</div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="">Report</div>
              <div className="">Save</div>
              <div className="">About</div>
            </div>
          </div>
        </div>

        <div className="blog-container flex flex-col justify-center w-full mt-3 md:mt-6 pt-2  border-t-2 border-slate-500">
          <div className="flex items-right w-full gap-2 py-2">
            <img
              src={userProfile}
              className="w-4 h-4 md:w-7 md:h-7 rounded-full"
              alt=""
            />
            <p>Daisy Okoti</p>
          </div>
          <div className="flex justify-around w-full gap-2 pt-2 md:pt-0">
            <div className="flex flex-col justify-center w-2/3">
              <h2 className="title text-sm md:text-4xl text-black font-extrabold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusa
                ntium qui dolor doloremque, non aliquid fugiat!
              </h2>
              <p className="contet-text text-xs md:text-xl overflow-y-hidden h-4 md:h-7 mt-2">
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
                debitis magni esse porro magnam id eveniet minima reprehenderit
                dolore accusantium officia, aperiam, pariatur facere iste
                sapiente saepe est nesciunt itaque? Ipsum, minus possimus.
                Quisquam nisi tempore ducimus, quidem quia tempora maxime velit
                laboriosam impedit veritatis deleniti? Voluptatibus id, ipsa
                ratione laudantium tenetur sequi animi quidem fuga culpa
                voluptatum deserunt. Quasi sunt numquam fugit, itaque, quo
                fugiat error quam vel eligendi accusantium adipisci illo
                corrupti et. Iste corporis eveniet sequi vero officia
                accusantium, dolores soluta!
              </p>
            </div>
            <img src={blogImage} className="radius-2xl w-1/3 h-auto" />
          </div>
          <div className="w-full text-xs md:text-sm flex justify-between mt-3">
            <div className="flex justify-between gap-2">
              <div className="">Date</div>
              <div className="">Like</div>
              <div className="">Share</div>
            </div>

            <div className="flex justify-between gap-2">
              <div className="">Report</div>
              <div className="">Save</div>
              <div className="">About</div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-div bg-black  hidden md:flex flex-col  justify-start w-1/4 ">
        <div className=" w-full bg-white shadow-md rounded-xl">
          <h3 className="px-8  mt-4">Most Viewed Blos</h3>
          <div className="blog-container-container flex flex-col justify-start items-center my-2  h-80 overflow-y-scroll overflow-x-hidden ">
            <div className="blog-container  border-t-2 border-slate-500 w-5/6 my-2 pt-2">
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

            <div className="blog-container  border-t-2 border-slate-500 w-5/6 my-2 pt-2">
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
            <div className="blog-container  border-t-2 border-slate-500 w-5/6 my-2 pt-2">
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
            <div className="blog-container  border-t-2 border-slate-500 w-5/6 my-2 pt-2">
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
            <div className="blog-container  border-t-2 border-slate-500 w-5/6 my-2 pt-2">
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

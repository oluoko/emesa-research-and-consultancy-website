import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import userProfile from "../../../Assets/userProfile.png";
import blogImage from "../../../Assets/blogImage.png";
import ladyInOffice from "../../../Assets/uploads/lady in office.jpeg";

const BlogHomeScreen = () => {
  const navigate = useNavigate();

  const categoriesBarRef = useRef(null);

  const scrollLeft = () => {
    categoriesBarRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    categoriesBarRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const openBlog = () => {
    navigate("/blogs/:id");
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

        <div
          onClick={() => openBlog()}
          className="blog-container flex flex-col justify-center w-full mt-3 md:mt-6 pt-2  border-t-2 border-slate-500"
        >
          <div className="flex items-right w-full gap-2 py-2">
            <img
              src={userProfile}
              className="w-4 h-4 md:w-7 md:h-7 rounded-full"
              alt=""
            />
            <p>Cashphine Owunza</p>
          </div>
          <div className="flex justify-around w-full gap-2 pt-2 md:pt-0">
            <div className="flex flex-col justify-center w-2/3">
              <h2 className="title text-sm md:text-4xl text-black font-extrabold">
                Key Aspects of a Growth Mindset for a Virtual Assistant
              </h2>
              <p className="contet-text text-xs md:text-xl overflow-y-hidden h-16 md:h-28 mt-2">
                Problem-Solving: View challenges as opportunities to develop
                problem-solving skills. For instance, if a client needs a
                complex project managed or a new tool used, approach it with
                enthusiasm rather than hesitation. Adaptability: Be willing to
                step out of your comfort zone and tackle tasks or technologies
                you&apos;re not familiar with. Skill Development: Regularly seek
                to upgrade your skills. This could involve taking courses on new
                software, improving communication techniques, or learning about
                the latest trends in virtual assistance. Feedback Utilization:
                Actively seek feedback from clients and peers, and use it
                constructively to enhance your performance and capabilities.
                Handling Setbacks: When faced with setbacks or mistakes, instead
                of viewing them as failures, see them as learning experiences.
                Analyze what went wrong, and apply that knowledge to improve
                future performance. Persistence: Keep striving towards your
                goals despite difficulties or obstacles. Persistence is key to
                overcoming challenges and achieving long-term success.
                Initiative: Take the initiative to suggest improvements,
                streamline processes, or offer solutions before being asked.
                This shows a willingness to contribute to the client&apos;s
                success beyond basic responsibilities. Innovation: Look for
                innovative ways to perform tasks more efficiently and
                effectively. Embrace new technologies and methods that can
                enhance productivity. Learning from Others: Be curious about
                industry best practices and how other successful virtual
                assistants operate. This curiosity can lead to discovering new
                strategies and techniques. Asking Questions: Don&apos;t be
                afraid to ask questions if you&apos;re unsure about a task or
                need clarification. This demonstrates a commitment to delivering
                high-quality work. Personal Growth: Set personal and
                professional goals to strive towards. This could include
                mastering a new software tool, improving time management skills,
                or expanding your service offerings. Client Goals: Understand
                and align with your client&apos;s objectives. By focusing on
                their goals, you can better tailor your services to meet their
                needs and exceed their expectations. Flexibility: Be open to
                different ways of doing things and receptive to new ideas. This
                flexibility can help you adapt to varying client preferences and
                work styles. Collaborative Spirit: Work collaboratively with
                clients and team members, valuing diverse perspectives and
                contributions. Recognizing Strengths and Weaknesses: Regularly
                assess your strengths and areas for improvement. Understanding
                where you excel and where you need development can help you
                focus your learning efforts effectively. By embodying a growth
                mindset, a virtual assistant not only enhances their own
                professional development but also adds significant value to
                their clients through improved performance, adaptability, and
                innovative solutions. hashtag#alxvirtualassistant hashtag#growth
              </p>
            </div>
            <img
              src={ladyInOffice}
              className="rounded-3xl w-1/3 md:w-1/4 h-auto"
            />
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
          <div
            onClick={() => openBlog()}
            className="blog-container-container flex flex-col justify-start items-center my-2  h-80 overflow-y-scroll overflow-x-hidden "
          >
            <div className=" border-t-2 border-slate-500 w-5/6 my-2 pt-2">
              <div className="flex  justify-start gap-2  items-center">
                <img
                  src={userProfile}
                  className="w-4 h-4 rounded-full"
                  alt=""
                />
                <span className=" font-bold">Cashphine Owunza</span>
                <span>in</span>
                <span className="font-bold">Mindfulness</span>
              </div>
              <div className="text-xl my-2 font-black">
                Key Aspects of a Growth Mindset for a Virtual Assistant
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHomeScreen;

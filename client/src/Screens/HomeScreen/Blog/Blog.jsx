import userProfile from "../../../Assets/userProfile.png";
import blogImage from "../../../Assets/blogImage.png";
import Navbar from "../../../Components/Navbar/Navbar";

const Blog = () => {
  return (
    <div className="screen-containers mt-16 md:mt-20 w-full flex flex-col justify-center items-center">
      <Navbar screen="blog" />
      <div className="flex flex-col justify-center items-center w-3/4 md:w-1/2 gap-2 pt-2 md:pt-0">
        <h2 className="title text-xl md:text-5xl my-5 text-black font-black">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusa ntium
          qui dolor doloremque, non aliquid fugiat!
        </h2>
        <div className="flex items-right w-full gap-2 md:gap-4 py-2">
          <img
            src={userProfile}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full"
            alt=""
          />
          <div className="block text-xs md:text-lg">
            <p>Daisy Okoti</p>
            <p>
              Published in{" "}
              <span className="font-extrabold cursor-pointer">
                {" "}
                Level Up Coding{" "}
              </span>{" "}
              . <span>8</span> min read .{" "}
              <span className="font-extrabold">May 8, 2024</span>
            </p>
          </div>
        </div>
        <div className="w-full my-4 md:my-6">
          <img src={blogImage} className=" my-2 md:my-3 w-full h-auto" />

          <p className="text-sm md:text-lg text-slate-600 flex flex-col justify-center items-center">
            photo caption
          </p>
        </div>

        <div className="content flex flex-col justify-center items- w-full">
          {[
            [
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            beatae, distinctio quae nemo eaque pariatur omnis magnam molestiae
            reiciendis facere incidunt in sint ipsum? Eius dignissimos eaque
            quis eos voluptatum mollitia distinctio, qui quas vitae nemo iure
            rerum rem exercitationem sint assumenda!`,
            ],
            [
              `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa ullam
            optio atque doloremque velit dolorum, adipisci doloribus deleniti
            cumque perspiciatis eveniet repudiandae error molestiae quos quia
            sed eos architecto recusandae eaque. Possimus maxime repudiandae
            modi consectetur, dolor commodi aperiam quidem ipsa fugit culpa
            pariatur laborum minima ea quos reiciendis eveniet a, enim cum vel
            necessitatibus iste, optio dolore ab facere!`,
            ],
            [
              ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            exercitationem nulla, iste esse totam vel ipsam a dolorem quam
            cupiditate officia ipsum iusto animi consectetur maxime
            necessitatibus pariatur rem eaque, eveniet nobis! Optio expedita,
            ullam error nisi asperiores voluptas adipisci odit, aut commodi
            sapiente reprehenderit dolore blanditiis, debitis nihil fugit
            exercitationem aperiam consequuntur ipsam! Veniam eius ducimus quod
            ipsa est officiis ad fuga?`,
            ],
            [
              ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odio
            harum, aspernatur quis aliquam minima molestiae ad placeat? Incidunt
            suscipit, eligendi reprehenderit excepturi animi tempora laboriosam
            eaque nostrum et dolore pariatur omnis reiciendis quam recusandae
            magni culpa in expedita repellendus? Ducimus expedita, praesentium
            voluptates enim iste molestiae cumque perferendis nesciunt!`,
            ],
            [
              ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            magnam laudantium, voluptatibus qui, eius sed vero beatae dolore
            voluptate nesciunt aliquam in reiciendis sequi error numquam animi
            sit cum autem ratione iusto nulla exercitationem. Voluptatibus
            voluptate asperiores veritatis a consequuntur facilis fugiat fugit
            velit, magni veniam autem. Iste reprehenderit totam asperiores minus
            excepturi expedita quibusdam mollitia debitis accusantium tenetur,
            qui nisi ad cupiditate dolorem, sapiente eveniet maxime molestiae
            officia? Corrupti reiciendis neque magnam tenetur dolor.`,
            ],
          ].map((paragraphContent) => (
            <p
              key={paragraphContent}
              className="content-p text-xs md:text-xl mt-2"
            >
              {paragraphContent}
            </p>
          ))}
        </div>
      </div>
      <div className="w-2/3 flex justify-between mt-3">
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
  );
};

export default Blog;

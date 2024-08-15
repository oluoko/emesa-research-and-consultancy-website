import userProfile from "../../../Assets/userProfile.png";
import blogImage from "../../../Assets/blogImage.png";
import Back from "../../../Components/Back";

const Blog = () => {
  return (
    <div className=" w-full mt-10 flex flex-col justify-center items-center">
      <Back />
      <div className="flex flex-col justify-center items-center w-3/4 md:w-2/3 gap-2 pt-2 md:pt-0">
        <img src={blogImage} className="radius-2xl w-full h-auto" />
        <div className="flex items-right w-full gap-2 py-2">
          <img
            src={userProfile}
            className="w-4 h-4 md:w-7 md:h-7 rounded-full"
            alt=""
          />
          <p>Daisy Okoti</p>
        </div>
        <div className="flex flex-col justify-center items- w-full">
          <h2 className="title text-2xlmd:text-5xl text-black font-extrabold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusa
            ntium qui dolor doloremque, non aliquid fugiat!
          </h2>
          <p className="contet-text text-xs md:text-xl mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            beatae, distinctio quae nemo eaque pariatur omnis magnam molestiae
            reiciendis facere incidunt in sint ipsum? Eius dignissimos eaque
            quis eos voluptatum mollitia distinctio, qui quas vitae nemo iure
            rerum rem exercitationem sint assumenda! Dignissimos, architecto
            animi, nesciunt ea cum esse velit aspernatur deserunt, earum sunt
            explicabo repellat mollitia incidunt? Eos nesciunt libero qui minus
            vitae omnis consequuntur deleniti quam ullam iste, dolores, officia
            dolorum quos rem aut corporis asperiores similique distinctio!
            Voluptatem aliquid dignissimos temporibus eum quis illum quidem sit
            fugiat vel blanditiis totam excepturi perspiciatis voluptatibus aut
            quam, soluta fuga accusamus culpa pariatur veniam. Quaerat numquam
            voluptatem, expedita nemo accusamus fugit, nam repellendus aliquam
            ea, saepe harum labore. Quam deleniti reprehenderit veritatis ad
            cumque totam esse nihil laudantium doloribus. Harum mollitia
            reprehenderit laboriosam aperiam ipsum? Quos distinctio totam culpa
            dolor obcaecati. Voluptatum neque amet eius qui reiciendis
            dignissimos blanditiis suscipit, a mollitia libero facere earum
            sequi quisquam ducimus maxime totam. Veritatis quasi mollitia
            numquam ab cupiditate. Assumenda ex laborum ipsum, a voluptate
            impedit. Ipsa voluptatum repellendus praesentium? Dolorem magni
            eaque sit, aliquam pariatur sequi ipsam voluptate voluptatibus nihil
            tempore magnam totam, hic officia ut nesciunt placeat commodi harum
            officiis ducimus natus? Ducimus tempore maxime quasi veritatis
            incidunt nostrum rem cupiditate, corporis enim nemo, dignissimos
            quod, mollitia quo obcaecati dolores fugiat vitae dicta molestiae
            quas sed placeat possimus sunt. Laborum, tempore tenetur, odit
            magnam est aliquam, aperiam ab tempora quod enim sequi nulla. Dolore
            autem ipsam accusamus cupiditate natus consequatur fuga veritatis
            earum quos iure, impedit eum, inventore et consectetur. Cum!
          </p>
        </div>
      </div>
      <div className="w-4/5zza flex justify-between mt-3">
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

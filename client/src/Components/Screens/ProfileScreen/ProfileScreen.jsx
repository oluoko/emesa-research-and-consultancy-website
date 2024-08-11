import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import profileImage from "../../../Assets/userProfile.png";

const ProfileScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Save the current location's pathname in localStorage or a state
    localStorage.setItem("lastPage", location.pathname);
  }, [location]);
  return (
    <div className="relative flex flex-col justify-center items-center">
      <button
        onClick={() => navigate(-1)}
        className="button fixed top-4 left-4 font-bold text-2xl py-2 px-4 rounded text-xl focus:outline-none focus:shadow-outline"
      >
        Back
      </button>
      <div className="w-11/12 p-4  h-full mx-8 flex justify-around  h-3/6 mt-28 gap-4  shadow-lg border-2 rounded-xl  bg-gray-500 ">
        <div className="w-1/4  p-4 rounded-xl">
          <img
            src={profileImage}
            className="w-full rounded-full hover:border-2 hover:border-orange-500 "
          />
        </div>

        <div className=" p-3 w-3/4  flex flex-col justify-center items-center  rounded-xl bg-white ">
          <div className="text-gray-400 text-2xl">
            <div className="grid md:grid-cols-2 text-sm">
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold text-black">NAME: </div>
                <div className="px-4 py-2">Jane Doe</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold text-black">EMAIL:</div>
                <div className="px-4 py-2">janedoe@gmail.com</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold text-black">BIO:</div>
                <div className="px-4 py-2 h-6 overflow-hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi assumenda neque tempore fugiat fugit sunt autem earum,
                  esse ad sed dolorum doloremque, aliquam perferendis dolore
                  explicabo eveniet quasi labore dignissimos ipsa error alias
                  maiores eius totam magni. Omnis, maxime reiciendis. Qui labore
                  est nostrum cupiditate eveniet maiores dignissimos sint ipsum
                  ipsa. Esse accusantium voluptas, vero laboriosam consequuntur
                  consequatur eveniet corrupti, facilis dolorem voluptate
                  reprehenderit recusandae vel magni cum veritatis culpa, sequi
                  incidunt asperiores. Possimus animi repellat pariatur ullam
                  aut dicta minima consequatur. Commodi autem consequuntur error
                  pariatur, vitae, odio assumenda quisquam ipsum dolorem
                  accusamus labore qui consequatur. Nesciunt mollitia vero atque
                  iure ex dolore, sit ipsa vitae temporibus optio consectetur
                  blanditiis, numquam laborum officiis nemo eos facere debitis
                  nam id quos eaque? Aliquam aliquid praesentium deleniti quo ab
                  ea harum ex laborum aspernatur voluptatibus ratione nesciunt,
                  inventore quibusdam eligendi ipsam placeat animi. Obcaecati
                  nemo necessitatibus ipsa possimus eius optio rerum fugit
                  recusandae illum voluptate, exercitationem libero. Voluptatem
                  magnam id est sunt, eaque voluptatibus reiciendis quos
                  inventore nam assumenda ut sit eum. Accusamus deserunt ad
                  aliquid iure tempora voluptate delectus dolore asperiores
                  ipsum itaque rerum laboriosam autem a, accusantium, suscipit
                  doloremque in aspernatur, nulla fugiat perspiciatis. Possimus
                  cupiditate provident mollitia ad, voluptas rem dolorem
                  corporis numquam, eaque ab assumenda quis quibusdam facere
                  similique, voluptatibus est repellat eveniet eos sunt
                  officiis. Reiciendis incidunt fugiat fugit repudiandae
                  impedit. Ea, possimus esse! Unde aliquam quos quod praesentium
                  eum illum eos delectus tenetur possimus exercitationem earum
                  alias, quidem, adipisci quo placeat laudantium voluptate
                  dignissimos molestias.
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold text-black">
                  REGISTERED AT:
                </div>
                <div className="px-4 py-2">11 Aug 2024</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold text-black">
                  BLOGGER STATUS:{" "}
                </div>
                <div className="mx-4 my-2 rounded-2xl text-black bg-green-400 flex flex-col justify-center items-center">
                  Approved
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold text-black">
                  EMPLOYEE STATUS:{" "}
                </div>
                <div className="mx-4 my-2  rounded-2xl text-black bg-red-400 flex flex-col justify-center items-center">
                  Rejected
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold text-black">
                  DATE EMPLOYED:
                </div>
                <div className="px-4 py-2">11-Aug-2024</div>
              </div>

              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold text-black">
                  DATE RETRENCHED:
                </div>
                <div className="px-4 py-2">11-Aug-2024</div>
              </div>
            </div>
          </div>
          <button className="button rounded-xl w-full block  p-3 my-4">
            Show Full Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;

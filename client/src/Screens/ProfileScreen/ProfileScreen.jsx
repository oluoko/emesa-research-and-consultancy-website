import profileImage from "../../Assets/userProfile.png";
import Back from "../../Components/Back";

const ProfileScreen = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full">
      <Back />
      <div className="w-5/6 md:w-11/12 grid md:flex grid-col justify-center md:justify-around items-center p-2 md:p-4 m-16 md:m-4  mx-8 mt-28 gap-4  shadow-lg border-2 rounded-xl  bg-gray-500 ">
        <div className="w-2/3 md:w-1/4 p-4 rounded-xl ">
          <img
            src={profileImage}
            className="w-full rounded-full hover:border-2 hover:border-orange-500 "
          />
        </div>

        <div className=" p-3 w-full md:w-3/4  flex flex-col justify-center items-center  rounded-xl bg-white ">
          <div className="text-gray-400 text-2xl">
            <div className="grid md:grid-cols-2 text-xs  md:text-xl">
              {[
                ["NAME", "Jane Doe", "", "", ""],
                ["EMAIL", "janedoe@gmail.com", "", "", ""],
                [
                  "BIO",
                  "Our pragmatic toolkit is designed to unleash the full potential of administrative support personnel, empowering them to execute their work excellently and efficiently. Through our coaching and training programs, we elevate 21st-century essential skills including organization, foresight, and proactiveness, ensuring assistants stay two steps ahead and always on the ball. Our coaching goes beyond the conventional. We harness the power of tested AI hacks and tech tools, incorporating innovative and strategic methods to streamline workflow and boost productivity.",
                  "",
                  "h-6 md:h-8 overflow-y-hidden",
                  "",
                ],
                ["REGISTERED AT", "11-Aug-2024", "", "", ""],
                [
                  "BLOGGER STATUS",
                  "Approved",
                  "",
                  "bg-green-400 text-slate-800  h-6 md:h-8  flex flex-col justify-center items-center m-2 rounded-3xl",
                  "",
                ],
                [
                  "EMPLOYEE STATUS",
                  "Rejected",
                  "",
                  "bg-red-400 text-slate-800 h-6 md:h-8 flex flex-col justify-center items-center m-2 rounded-3xl",
                  "",
                ],
                ["DATE EMPLOYED", "21-May-2024", "", "", ""],
                ["DATE RETRENCHED", "08-Aug-2024", "", "", ""],
              ].map(
                ([
                  dataLabel,
                  dataValue,
                  labelClass,
                  valueClass,
                  containerClass,
                ]) => (
                  <div
                    key={dataLabel}
                    className={`grid grid-cols-2 ${containerClass}`}
                  >
                    <div
                      className={`px-2 py-1  md:px-1 md:py-0 md:mx-2  md:my-2 font-semibold text-black ${labelClass}`}
                    >
                      {dataLabel}:
                    </div>
                    <div
                      className={`px-2 py-1  md:px-1 md:py-0 md:mx-2  md:my-2  ${valueClass}`}
                    >
                      {dataValue}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <button className="button text-2xl font-extrabold rounded-xl w-full block  p-3 my-4">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;

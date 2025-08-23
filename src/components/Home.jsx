import { LuGlobe } from "react-icons/lu";
import image from "../assets/image.jpg";

function Profile() {
  return (
    <div className="text-xl text-black flex justify-between mt-10">
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-4xl mb-3 md:mb-5 font-[500]">
          Yogesh Yadav
        </h1>

        <p className="text-[10px] md:text-sm text-gray-600 font-semibold mb-5">
          Full Stack Developer and DevOps Engineer,
          <br /> focused on learning through experimentation and{" "}
          <br className="md:hidden" /> product development .
        </p>

        <div className="flex flex-row items-center gap-2 mt-2">
          <span className="text-sm text-neutral-700">
            <LuGlobe className="size-3" aria-hidden="true" />
          </span>
          <span className="text-[10px] md:text-sm text-neutral-700">
            Mumbai, India
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center md:mr-15">
        <div className="flex md:justify-center md:items-center md:mt-5">
          <img
            src={image}
            alt="Profile"
            className="rounded-full md:h-30 md:w-30 h-20 w-20 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;

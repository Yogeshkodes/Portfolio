import { LuGlobe } from "react-icons/lu";
import image from "../assets/image.jpg";

function Profile() {
  return (
    <div className="text-xl text-black flex justify-between mt-10">
      <div className="flex flex-col">
        <h1 className="text-5xl mb-5">Yogesh Yadav</h1>

        <p className="text-sm text-neutral-700 mb-5">
          Full Stack Developer and DevOps Engineer,
          <br /> focused on learning through experimentation and product
          development .
        </p>

        <div className="flex flex-row items-center gap-2 mt-2">
          <span className="text-sm text-neutral-700">
            <LuGlobe className="size-3" aria-hidden="true" />
          </span>
          <span className="text-sm text-neutral-700">Mumbai, India</span>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center mt-5">
          <img
            src={image}
            alt="Profile"
            className="rounded-xl h-35 w-25 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;

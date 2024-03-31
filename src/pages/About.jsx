import React from "react";
import FloatingButtons from "../components/FloatButtons";

const About = () => {
  return (
    <div>
      <div
        className="min-h-screen text-white flex items-center justify-center text-3xl sm:text-6xl"
        style={{
          backgroundImage: `url('/group_photo.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <FloatingButtons />
        <span className="flex sm:w-2/3 w-full justify-center border-4 sm:py-6 font-bold">
          ABOUT US
        </span>
      </div>
      <div className="relative bg-secondary-400 sm:w-1/2  px-6 mt-10 flex flex-col items-center">
        <h2 className="font-extrabold text-white text-2xl pb-2 pt-6 border-b-2 w-full border-white">
          MISSION STATEMENT
        </h2>
        <div className="flex flex-col max-w-7xl text-white my-4 ">
          The Woodmere Fire Department is a volunteer fire department located in
          Woodmere, NY. We are dedicated to serving our community and providing
          the highest level of service to our residents. Our department is made
          up of dedicated volunteers who are committed to protecting the lives
          and property of our neighbors. We are always looking for new members
          to help us better serve the community.
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:px-0 px-6 my-4 sm:my-0">
        <div className=" sm:w-1/2">
          <iframe
            title="Google Map"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS}&q=20+Irving+Place+woodmere+ny`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
        <div className=" bg-tertiary-300 sm:w-1/2 px-6 pb-6 flex flex-col">
          <h2 className="font-extrabold text-white text-2xl pb-2 pt-6 border-b-2 w-full border-white">
            Contact
          </h2>
          <div className="flex flex-col justify-start max-w-7xl">
            <ul className="text-white text-md list-outside list-none  space-y-2">
              <li>Phone: (516) 821-3600</li>
              <li>Emergency Phone: (516) 374-2000</li>
              <li>Address: 20 Irving Pl, Woodmere, NY 11598</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

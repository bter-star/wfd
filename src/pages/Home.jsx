import React, { useEffect, useState } from "react";
import {
  AcademicCapIcon,
  FireIcon,
  LifebuoyIcon,
  MapIcon,
  PhoneIcon,
  PlusIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import FloatingButtons from "../components/FloatButtons";

const Home = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className="flex flex-col text-left">
      <FloatingButtons />
      <div className="relative h-screen mx-8 overflow-x-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          className="fixed right-0 top-0 w-full max-w-full h-full object-cover transition-opacity duration-700 ease-in-out"
        >
          <source src={"/smoke_video.mp4"} type="video/mp4" />
        </video>
        <div
          className={`relative w-1/2 my-20 transition-all duration-700 transform ${
            isAnimated ? "translate-x-0" : "translate-x-1/2"
          }`}
        >
          <h1 className="mt-4 flex flex-col text-6xl font-extrabold text-white">
            THE PRIDE
            <div className="text-tertiary-200 leading-none">OF</div>
            WOODMERE
          </h1>
          <p className="text-white text-2xl flex tracking-wider font-light pt-2">
            WOODMERE FIRE DEPARTMENT
          </p>
        </div>
        <div
          className={`relative flex items-center sm:flex-row flex-col gap-4 transition-all duration-1000 transform ${
            isAnimated ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button className="w-full sm:w-fit transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-full ring-2 bg-tertiary-200 ring-tertiary-200 text-white px-14 py-2.5 text-2xl font-bold hover:bg-transparent">
            JOIN
          </button>
          <button className="w-full sm:w-fit transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-full bg-transparent ring-2 ring-white text-white px-5 py-2.5 text-2xl font-light hover:text-black hover:bg-white">
            REQUEST INFO
          </button>
        </div>
      </div>

      {/* Key Points Section*/}
      <div className="mx-6 sm:mx-8 flex flex-col sm:flex-row justify-between gap-6 bg-black opacity-80 border-white border rounded-sm p-6 transition-all duration-500 ease-in-out hover:bg-secondary-500">
        <div className="text-white font-extrabold flex flex-col">
          <div className="flex items-center transition-colors duration-300 ease-in-out">
            <PlusIcon className="h-6 w-6 mr-2 text-tertiary-200" />
            COMMUNITY SERVICE
          </div>
          <p className="ml-8 font-normal text-left">
            Give back to your local community by joining the Woodmere Fire.
          </p>
        </div>
        <div className="text-white font-extrabold flex flex-col">
          <div className="flex items-center transition-colors duration-300 ease-in-out">
            <AcademicCapIcon className="h-6 w-6 mr-2 text-tertiary-200" /> FREE
            TRAINING
          </div>
          <p className="ml-8 font-normal text-left">
            Get trained by world class instructors every Sunday and Thursday.
          </p>
        </div>
        <div className="text-white font-extrabold flex flex-col">
          <div className="flex items-center transition-colors duration-300 ease-in-out">
            <UserGroupIcon className="h-6 w-6 mr-2 text-tertiary-200" />
            CAMARADERIE
          </div>
          <p className="ml-8 font-normal text-left">
            Join a team of dedicated volunteers who are always there for you and
            the community.
          </p>
        </div>
      </div>

      {/* Department Companies Section*/}
      <div className="relative flex md:flex-row flex-col w-full justify-between gap-4 py-8 px-6 mt-10 h-auto bg-black transition-opacity duration-700 ease-in-out ">
        <div className="bg-white flex flex-col w-full items-center justify-center transition-transform duration-500 hover:scale-105">
          <div className="font-bold my-4 text-xl">FIRE</div>
          <p className="text-center p-4 sm:p-10">
            <p className="text-center sm:p-10">
              Firefighting is a crucial service provided by our department,
              dedicated to protecting lives, property, and the environment from
              the devastating effects of fires. Our trained firefighters are
              equipped to respond to a variety of emergencies, ranging from
              structural fires in residential and commercial properties to
              vehicle fires. Firefighters are prepared to manage fires from
              their inception to full extinguishment, ensuring that fires are
              controlled and extinguished as safely and efficiently as possible.
              Through continuous training and community engagement, we strive to
              minimize the impact of fires and enhance the safety of our
              community.
            </p>
          </p>
        </div>
        <div className="bg-tertiary-300 flex flex-col w-full items-center justify-center  text-white transition-transform duration-500 hover:scale-105">
          <div className="font-bold my-4 text-xl">EMS</div>
          <p className="text-center p-4 sm:p-10">
            <p className="text-center sm:p-10">
              Emergency Medical Services (EMS) in the fire service play a
              critical and lifesaving role in our community. Our EMS personnel
              are trained to respond to a variety of medical emergencies,
              including cardiac arrests, respiratory emergencies, trauma
              incidents, and other urgent health situations. EMS providers
              deliver immediate medical care, stabilize patients, and prepare
              them for transport to medical facilities if needed. Through rapid
              response, skilled intervention, and compassionate care, our EMS
              units are dedicated to preserving life and minimizing the
              consequences of illness and injury.
            </p>
          </p>
        </div>
      </div>
      <div className="relative flex flex-col-reverse sm:flex-row  my-4 sm:my-0">
        <div className="bg-tertiary-300 sm:w-1/2 px-6 pb-6 flex flex-col items-start space-y-4">
          <h2 className="font-extrabold text-white text-2xl pb-2 pt-6 border-b-2 w-full border-white">
            Contact
          </h2>
          <div className="flex flex-col justify-start max-w-7xl">
            <ul className="text-white text-xl list-none space-y-2">
              <li className="flex items-center space-x-2">
                <PhoneIcon className="h-4 w-4" />
                <div>
                  <span className="font-bold">Nonemergencies call</span>
                  <span>: (516) 821-3600</span>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneIcon className="h-4 w-4" />
                <div>
                  <span className="font-bold">Emergency</span>
                  <span>: (516) 374-2000</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Home;

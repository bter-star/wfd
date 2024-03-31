import {
  AcademicCapIcon,
  FireIcon,
  LifebuoyIcon,
  PlusIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import FloatingButtons from "../components/FloatButtons";

const Home = () => {
  return (
    <div className="flex flex-col text-left">
      <FloatingButtons />
      <div className="relative h-screen mx-8">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed right-0 top-0 w-full max-w-full h-full object-cover"
        >
          <source src={"/victim.mp4"} type="video/mp4" />
        </video>
        <div className="relative w-1/2 my-20">
          <h1 className="mt-4 flex flex-col text-6xl font-extrabold text-white">
            THE PRIDE
            <div className="text-tertiary-200 leading-none">OF</div>
            WOODMERE
          </h1>
          <p className="text-white text-2xl flex tracking-wider font-light pt-2">
            WOODMERE FIRE DEPARTMENT
          </p>
        </div>
        <div className="relative flex items-center sm:flex-row flex-col gap-4">
          <button className="w-full sm:w-fit transition-all duration-500 ease-in-out rounded-full ring-2 bg-tertiary-200 ring-tertiary-200 text-white  px-14 py-2.5 text-2xl font-bold hover:bg-transparent">
            JOIN
          </button>
          <button className="w-full sm:w-fit transition-all duration-500 ease-in-out rounded-full bg-transparent ring-2 ring-white text-white  px-5 py-2.5 text-2xl font-light hover:text-black hover:bg-white">
            REQUEST INFO
          </button>
        </div>
      </div>
      <div className="mx-6 sm:mx-8 flex flex-col sm:flex-row justify-between gap-6 bg-secondary-400 opacity-90 border-white border rounded-sm p-6 ">
        <div className="text-white font-extrabold flex flex-col">
          <div className="flex">
            <PlusIcon className="h-6 w-6 mr-2" />
            COMMUNITY SERVICE
          </div>
          <p className="ml-8 font-normal text-left ">
            Give back to your local community by joining the Woodmere Fire.
          </p>
        </div>
        <div className="text-white font-extrabold flex flex-col">
          <div className="flex">
            <AcademicCapIcon className="h-6 w-6 mr-2" /> FREE TRAINING
          </div>
          <p className="ml-8 font-normal text-left ">
            Get trained by world class instructors every Sunday and Thursday.
          </p>
        </div>
        <div className="text-white font-extrabold flex flex-col">
          <div className="flex">
            <UserGroupIcon className="h-6 w-6 mr-2" />
            CAMARADERIE
          </div>
          <p className="ml-8 font-normal text-left ">
            Join a team of dedicated volunteers who are always there for you and
            the community.
          </p>
        </div>
      </div>

      <div className="relative flex md:flex-row flex-col w-full justify-between gap-4 py-8 px-6 mt-10 h-auto bg-black">
        <div className="bg-white flex flex-col w-full items-center justify-center p-12">
          <FireIcon className="h-24 w-24" />
          <div className="font-bold">EMS</div>
          <p className="text-center p-10">
            Some desciripitive text regarding our EMS services.
          </p>
        </div>
        <div className="bg-tertiary-100 flex flex-col w-full items-center justify-center p-12 text-white">
          <FireIcon className="h-24 w-24" />
          <div className="font-bold">FIREFIGHTING</div>
          <p className="text-center p-10">
            Some desciripitive text regarding our firefighting services.
          </p>
        </div>
        <div className="bg-white flex flex-col w-full items-center justify-center p-12">
          <LifebuoyIcon className="h-24 w-24" />
          <div className="bold">WATER RESCUE</div>
          <p className="text-center p-10">
            Some desciripitive text regarding our Water Rescue services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

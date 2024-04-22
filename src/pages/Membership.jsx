import React, { useState } from "react";
import FloatingButtons from "../components/FloatButtons";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const Membership = () => {
  const [currentRequirement, setCurrentRequirement] = useState(0);
  const requirements = [
    "Firefighters must be 18 to 45 years of age to join. \nEMS personnel must be 18 to 50 years of age to join",
    "Applicant must be in good health and must pass a physical examination conducted by the department physician",
    "Applicants must be a US Citizen and must reside within the boundary of the Woodmere Fire District or surrounding areas",
    "No pre-requisite training required for new members. The department provides all training for prospective EMS and fire members",
    "Applicants must pass a full criminal background check for arson as mandated by New York State",
    "Attendance at monthly meetings, fire and/or EMS schools, training, and special events are required. All training is conducted wednesday evenings and Sunday mornings",
  ];

  const [currentBenefit, setCurrentBenefit] = useState(0);
  const benefits = [
    "Personal Development: Volunteering is an excellent way to not only help your local community but also develop essential life skills such as teamwork, leadership, and deication",
    "Training: Develop and apply your skills as an EMT or Firefighter after attending the best in class Fire and EMS training academies",
    "Financial Benefits: MEmbers are entitled to Length of Service Award Program (LOSAP) for each year of active service. Tax Breaks: Members are also entitled to a 10% property tax break",
    "Comradery: By harboring relationships with other members you not only gain friendships, you also gain a valuable professional network",
    "Incentives: Members get 24 hour access to our gym that has everything you need to get in shape. Members are also entitled to discounts across countless brands via ID.me",
  ];

  const DisplayCard = ({ array, index, increment, decrement }) => {
    const disableNext = index === array.length - 1;
    const disablePrevious = index <= 0;
    return (
      <div className="flex flex-col w-full h-full text-white bg-black rounded-sm shadow-md  mb-6 items-center justify-center">
        <div className="h-96 flex w-full justify-evenly items-center">
          <button disabled={disablePrevious} onClick={decrement}>
            <ArrowLeftCircleIcon
              className={`h-8 w-8 ${
                disablePrevious ? "text-gray-400  hidden" : ""
              }`}
            />
          </button>
          <span className="w-1/2 flex  justify-center">{array[index]}</span>
          <button disabled={disableNext} onClick={increment}>
            <ArrowRightCircleIcon
              className={`h-8 w-8 ${disableNext ? "text-gray-400 hidden" : ""}`}
            />
          </button>
        </div>
        <div className="py-2 text-gray-300">
          {index + 1}/{array.length}
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col w-full">
      <FloatingButtons />
      {/* Video w/title */}
      <div className="h-96 sm:h-screen text-white flex flex-col items-center justify-center text-3xl sm:text-6xl ">
        <video
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          className="absolute w-full h-3/4 sm:h-full object-cover"
        >
          <source src={"/responding.mp4"} type="video/mp4" />
        </video>
        <span className="relative flex sm:w-2/3 w-11/12 justify-center border-8  py-6  font-bold">
          MEMBERSHIP
        </span>
        <button className="transition-all duration-500 ease-in-out rounded-full bg-transparent ring-2 ring-accent-200 text-accent-200  relative -bottom-24 text-sm px-6 py-2 hover:text-black hover:bg-accent-200">
          APPLY HERE
        </button>
      </div>
      {/* Services section */}
      <div className="relative flex sm:flex-row flex-col w-full justify-between sm:gap-4 gap-8 py-8 sm:px-6 h-auto bg-black">
        <div className="bg-white flex flex-col w-full items-center justify-between sm:p-12 p-4">
          {/* <FireIcon className="h-24 w-24" /> */}
          <div className="font-bold">ENGINE COMPANIES</div>
          <p className="text-center p-6">
            Their job is ultimately to extinguish the fire. The Engine Company
            will connect to a hydrant, stretch hose line, and attack the fire.
            Aside from fire calls, Engine Companies also respond to auto
            accidents, fuel spills, wires downs, gas emergencies, and so on.
          </p>
          <button className=" ring rounded-full ring-gray-900 px-8 py-2">
            JOIN
          </button>
        </div>
        <div className="bg-tertiary-300 flex flex-col w-full items-center justify-between sm:p-12 p-4 text-white">
          {/* <FireIcon className="h-24 w-24" /> */}
          <div className="font-bold">LADDER COMPANY</div>
          <p className="text-center p-6">
            Their job at a fire is to search and rescue for any persons trapped;
            confining the fire; forcing doors to assist the Engine in getting to
            the fire room; as well as opening the roof, and/or windows to vent
            and remove heat for the inside teams, while controlling fire spread.
            Ladder Companies will also be called upon for auto accidents, as
            well as wires down, Carbon Monoxide emergencies, Gas emergencies,
            and so on.
          </p>
          <button className=" ring rounded-full ring-white px-8 py-2">
            JOIN
          </button>
        </div>
        <div className="bg-white text-black flex flex-col w-full items-center justify-between sm:p-12 p-4">
          {/* <LifebuoyIcon className="h-24 w-24" /> */}
          <div className="font-bold">RESCUE COMPANY</div>
          <p className="text-center p-6">
            Their job is to treat and transport all patients to the hospital. In
            addition to medical emergencies, they will also respond to auto
            accidents and fires.
          </p>
          <button className=" ring rounded-full ring-black px-8 py-2">
            JOIN
          </button>
        </div>
      </div>
      {/* Requirements */}
      <div className="flex my-4 sm:my-0">
        <div className="relative bg-tertiary-300 sm:w-1/2 px-6 flex flex-col items-center">
          <h2 className="font-extrabold text-white text-2xl pb-2 pt-6 border-b-2 w-full border-white">
            MEMBERSHIP REQUIREMENTS
          </h2>
          <div className="flex flex-col max-w-7xl w-full">
            <DisplayCard
              array={requirements}
              index={currentRequirement}
              increment={() => setCurrentRequirement(currentRequirement + 1)}
              decrement={() => setCurrentRequirement(currentRequirement - 1)}
            />
          </div>
        </div>
        <div className="flex-1 bg-white hidden sm:flex">
          <img src="/group_photo.jpg" />
        </div>
      </div>
      {/* Benefits */}
      <div className="flex  my-4 sm:my-0 ">
        <div className="w-0 sm:w-1/2">
          <div className="flex-1 bg-white h-full">
            <img src="/group_photo.jpg" className="h-full w-fit"/>
          </div>
        </div>
        <div className=" bg-tertiary-300 sm:w-1/2 px-6 flex flex-col items-center">
          <h2 className="font-extrabold text-white text-2xl pb-2 pt-6 border-b-2 w-full border-white">
            BENEFITS
          </h2>
          <div className="flex flex-col max-w-7xl">
            {
              <DisplayCard
                array={benefits}
                index={currentBenefit}
                increment={() => setCurrentBenefit(currentBenefit + 1)}
                decrement={() => setCurrentBenefit(currentBenefit - 1)}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;

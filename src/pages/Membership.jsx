import React from "react";
import FloatingButtons from "../components/FloatButtons";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Membership = () => {
  return (
    <div className="flex flex-col w-full">
      <FloatingButtons />
      {/* Video w/title */}
      <div className="min-h-screen text-white flex flex-col items-center justify-center text-3xl sm:text-6xl ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-2/3 object-cover"
        >
          <source src={"/firefighter.mp4"} type="video/mp4" />
        </video>
        <span className="relative flex sm:w-2/3 w-full justify-center border-4  sm:py-6 font-bold">
          MEMBERSHIP
        </span>
        <button className="transition-all duration-500 ease-in-out rounded-full bg-transparent ring-2 ring-accent-200 text-accent-200  relative -bottom-24 text-sm px-6 py-2 hover:text-black hover:bg-accent-200">
          APPLY HERE
        </button>
      </div>
      {/* Services section */}
      <div className="relative flex sm:flex-row flex-col w-full justify-between gap-4 py-8 px-6 mt-10 h-auto bg-black">
        <div className="bg-white flex flex-col w-full items-center justify-between p-12">
          {/* <FireIcon className="h-24 w-24" /> */}
          <div className="font-bold">ENGINE COMPANIES</div>
          <p className="text-center p-10">
            Their job is ultimately to extinguish the fire. The Engine Company
            will connect to a hydrant, stretch hose line, and attack the fire.
            Aside from fire calls, Engine Companies also respond to auto
            accidents, fuel spills, wires downs, gas emergencies, and so on.
          </p>
          <button className=" ring rounded-full ring-gray-900 px-8 py-2">
            JOIN
          </button>
        </div>
        <div className="bg-tertiary-300 flex flex-col w-full items-center justify-between p-12 text-white">
          {/* <FireIcon className="h-24 w-24" /> */}
          <div className="font-bold">LADDER COMPANY</div>
          <p className="text-center p-10">
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
        <div className="bg-secondary-400 text-white flex flex-col w-full items-center justify-between p-12">
          {/* <LifebuoyIcon className="h-24 w-24" /> */}
          <div className="font-bold">RESCUE COMPANY</div>
          <p className="text-center p-10">
            Their job is to treat and transport all patients to the hospital. In
            addition to medical emergencies, they will also respond to auto
            accidents and fires.
          </p>
          <button className=" ring rounded-full ring-white px-8 py-2">
            JOIN
          </button>
        </div>
      </div>
      {/* Requirements */}
      <div className="flex sm:px-0 px-6">
        <div className="relative bg-secondary-400 sm:w-1/2 px-6 mt-10 flex flex-col items-center">
          <h2 className="font-extrabold text-white text-2xl pb-2 pt-6 border-b-2 w-full border-white">
            MEMBERSHIP REQUIREMENTS
          </h2>
          <div className="flex flex-col max-w-7xl">
            <ul className="text-white text-md  p-6  list-outside list-disc w-3/4 space-y-2">
              <li>Firefighters: 18 to 45 years of age</li>
              <li>EMS personnel: 18 to 50 years of age</li>
              <li>You must be in good general health</li>
              <li>
                You must be a US Citizen You must reside within the boundary of
                the Woodmere Fire District or surrounding areas
              </li>
              <li>
                No pre-requisite training required for new members. We provide
                all training. Complete application to include full criminal
                background check for arson as mandated by New York State as well
                as OSHA and NFPA mandated physical exam conducted at no charge
              </li>
              <li>
                Attendance at monthly meetings, fire and/or EMS schools,
                training, and special events are required. Minimum percentages
                vary based on years of service. All training is conducted
                weekday evenings or Sunday mornings
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Benefits */}
      <div className="flex sm:px-0 px-6">
        <div className="w-0 sm:w-1/2"></div>
        <div className=" bg-tertiary-300 sm:w-1/2 px-6 flex flex-col items-center">
          <h2 className="font-extrabold text-white text-2xl pb-2 pt-6 border-b-2 w-full border-white">
            BENEFITS
          </h2>
          <div className="flex flex-col max-w-7xl">
            <ul className="text-white text-md  p-6  list-outside list-disc w-3/4 space-y-2">
              <li>
                The WFD provides an incredible atmosphere with state-of-the-art
                apparatus and equipment and the benefits that come with being
                part of the WFD team.
              </li>
              <li>
                Free Training: Hands on training at no cost gaining valuable
                experience in emergency services – You will be schooled at the
                best fire and emergency medical academies such as the Nassau
                County Fire Service Academy and the Nassau County EMS Academy
                using the most advanced hands-on techniques. Many of these
                required classes are transferable for college credits towards a
                degree through the SUNY-Empire State College.
              </li>
              <li>
                Receive money for college tuition: Under recently passed
                legislation, college age students are eligible for up to $3500
                towards college tuition if confirmed as an active volunteer in
                the fire department.
              </li>
              <li>
                Retirement: Length of Service Award Program (LOSAP) – Pension
                program. Tax Breaks: 10% property tax break, personal income tax
                credit
              </li>
              <li>Team: A great sense of community and serving a good cause</li>
              <li>
                Incentives: Free uniforms, free gym membership, discounts
                nationwide
              </li>
              <li>
                Leadership: Opportunities for advancement and responsibility on
                both the operational and administrative side of the Wooodmere
                F.D.
              </li>
              <li>
                Family: Comradery and lifelong friendships – Make friends you
                will keep for life.
              </li>
              <li>
                Fitness: Fitness equipment use including treadmill and weight
                center at a local gym
              </li>
              <li>
                Future/Career advancement: Many employers hire from the
                volunteer service. Looks great on resumes.
              </li>
              <li>
                Organizations: Join local & national fraternal and firematic
                organizations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;

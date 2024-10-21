import React, { useRef } from "react";
import {
  AcademicCapIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  FireIcon,
  LifebuoyIcon,
  MapIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import TitleSection from "../components/TitleSection";
import ApplicationForm from "../components/ApplicationForm";
import ContentFrame from "../components/ContentFrame";

const Membership = () => {
  const requirements = [
    {
      title: "Age",
      text: "Firefighters must be 18 to 45 years of age to join. \nEMS personnel must be 18 to 50 years of age to join",
      icon: UserGroupIcon,
    },
    {
      title: "Health",
      text: "Applicant must be in good health and must pass a physical examination conducted by the department physician",
      icon: LifebuoyIcon,
    },
    {
      title: "Citizenship",
      text: "Applicants must be a US Citizen and must reside within the boundary of the Woodmere Fire District or surrounding areas",
      icon: MapIcon,
    },
    {
      title: "Training",
      text: "No pre-requisite training required for new members. The department provides all training for prospective EMS and fire members",
      icon: AcademicCapIcon,
    },
    {
      title: "Background Check",
      text: "Applicants must pass a full criminal background check for arson as mandated by New York State",
      icon: ArrowRightIcon,
    },
    {
      title: "Attendance",
      text: "Attendance at monthly meetings, fire and/or EMS schools, training, and special events are required. All training is conducted wednesday evenings and Sunday mornings",
      icon: CalendarDaysIcon,
    },
  ];

  const benefits = [
    {
      title: "Personal Development",
      text: "Volunteering is an excellent way to not only help your local community but also develop essential life skills such as teamwork, leadership, and deication",
      icon: FireIcon,
    },
    {
      title: "Training",
      text: "Develop and apply your skills as an EMT or Firefighter after attending the best in class Fire and EMS training academies",
      icon: AcademicCapIcon,
    },
    {
      title: "Financial Incentives",
      text: "Members are entitled to Length of Service Award Program (LOSAP) for each year of active service. Tax Breaks: Members are also entitled to a 10% property tax break",
      icon: ArrowRightIcon,
    },
    {
      title: "Comradery",
      text: "By harboring relationships with other members you not only gain friendships, you also gain a valuable professional network",
      icon: ArrowRightIcon,
    },
    {
      title: "Fitness",
      text: "Members get 24 hour access to our gym that has everything you need to get in shape. Members are also entitled to discounts across countless brands via ID.me",
      icon: ArrowRightIcon,
    },
    {
      title: "Fitness",
      text: "Members get 24 hour access to our gym that has everything you need to get in shape. Members are also entitled to discounts across countless brands via ID.me",
      icon: ArrowRightIcon,
    },
    {
      title: "Fitness",
      text: "Members get 24 hour access to our gym that has everything you need to get in shape. Members are also entitled to discounts across countless brands via ID.me",
      icon: ArrowRightIcon,
    },
    {
      title: "Fitness",
      text: "Members get 24 hour access to our gym that has everything you need to get in shape. Members are also entitled to discounts across countless brands via ID.me",
      icon: ArrowRightIcon,
    },
    {
      title: "Fitness",
      text: "Members get 24 hour access to our gym that has everything you need to get in shape. Members are also entitled to discounts across countless brands via ID.me",
      icon: ArrowRightIcon,
    },
  ];
  const applicationRef = useRef(null);

  const scrollToApplication = () => {
    if (applicationRef.current) {
      applicationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Video w/title */}
      <TitleSection
        asset={"/group_photo.jpg"}
        title="MEMBERSHIP"
        button={{
          text: "Apply Here",
          styleString: "accent",
          onClick: () => scrollToApplication(),
        }}
      />

      {/* Services Section */}
      <div className="my-8 flex flex-col gap-4">
        <ContentFrame
          image={"/group_photo.jpg"}
          title={"ENGINE COMPANIES"}
          text={`Their job is ultimately to extinguish the fire. The Engine Company
          will connect to a hydrant, stretch hose line, and attack the fire.
            Aside from fire calls, Engine Companies also respond to auto
            accidents, fuel spills, wires downs, gas emergencies, and so on.`}
          reverse={true}
          button={{
            text: "Apply Here",
            styleString: "tertiary",
            onClick: () => scrollToApplication(),
          }}
        />
        <ContentFrame
          image={"/group_photo.jpg"}
          title={"TRUCK COMPANY"}
          text={`Their job at a fire is to search and rescue for any persons trapped;
          confining the fire; forcing doors to assist the Engine in getting to
          the fire room; as well as opening the roof, and/or windows to vent
          and remove heat for the inside teams, while controlling fire spread.
          Ladder Companies will also be called upon for auto accidents, as
          well as wires down, Carbon Monoxide emergencies, Gas emergencies,
          and so on.`}
          button={{
            text: "Apply Here",
            styleString: "tertiary",
            onClick: () => {},
          }}
        />
        <ContentFrame
          image={"/group_photo.jpg"}
          title={"RESCUE COMPANY"}
          text={` Their job is to treat and transport all patients to the hospital. In
          addition to medical emergencies, they will also respond to auto
          accidents and fires.`}
          reverse={true}
          button={{
            text: "Apply Here",
            styleString: "tertiary",
            onClick: () => scrollToApplication(),
          }}
        />
      </div>

      {/* Benefits */}
      <div className="flex flex-col items-center justify-center mx-2">
        <h2 className="font-extrabold text-4xl text-white py-8">BENEFITS</h2>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8 mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-tertiary-200 text-white rounded h-96 sm:w-96  p-12 items-center flex flex-col"
            >
              <benefit.icon className="h-24 w-24" />
              <h3 className="text-xl my-4">{benefit.title}</h3>
              <p className="text-sm">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Requirements */}
      <div className="flex flex-col items-center justify-center mx-2">
        <h2 className="font-extrabold text-4xl text-white py-8">
          MEMBERSHIP REQUIREMENTS
        </h2>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8 mx-auto">
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className="bg-black-300 text-white rounded h-96 sm:w-96  p-12 items-center flex flex-col"
            >
              <requirement.icon className="h-24 w-24" />
              <h3 className="text-xl my-4">{requirement.title}</h3>
              <p className="text-sm">{requirement.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Application */}
      <div
        ref={applicationRef}
        className="flex flex-col items-center justify-center mx-2"
      >
        <h2 className="font-extrabold text-4xl text-white py-8">APPLICATION</h2>
        <ApplicationForm />
      </div>
    </div>
  );
};

export default Membership;

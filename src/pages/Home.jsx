import React, { useEffect, useState } from "react";
import {
  FireIcon,
  HomeIcon,
  PlusCircleIcon,
  ShieldCheckIcon,
  UserPlusIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import TitleSection from "../components/TitleSection";
import Button from "../components/Button";
import ContentFrame from "../components/ContentFrame";
import { handleRouteChange } from "../utils/helpers";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const navigate = useNavigate();

  const keyPoints = [
    {
      title: "ANNUAL FIRE CALLS (AVG.)",
      icon: FireIcon,
      stat: "423",
    },
    {
      title: "ANNUAL EMS CALLS (AVG.)",
      icon: PlusCircleIcon,
      stat: "375",
    },
    {
      title: "HOMES PROTECTED",
      icon: HomeIcon,
      stat: "1,200",
    },
  ];

  const pages = [
    {
      name: "About Us",
      text: "Learn more about the Woodmere Fire Department, its mission, and our commitment to keeping the community safe.",
      button: {
        text: "Learn More",
        onClick: () => handleRouteChange(navigate, "/about"),
      },
      icon: ShieldCheckIcon,
    },
    {
      name: "Membership",
      text: "As a volunteer department, we are always looking for dedicated members to help serve the community. Join the department today and make a difference.",
      button: {
        text: "Apply",
        onClick: () => handleRouteChange(navigate, "/membership"),
      },
      icon: UserPlusIcon,
    },
    {
      name: "Donate",
      text: "Financially support the department with a donation today. Even small contributions can make a big difference.",
      button: {
        text: "Donate",
        onClick: () => handleRouteChange(navigate, "/donate"),
      },
      icon: WalletIcon,
    },
  ];

  return (
    <div className="flex flex-col">
      <TitleSection asset={"/smoke.jpg"}>
        <div
          className={`relative sm:w-1/2  my-20 transition-all duration-700 transform ${
            isAnimated ? "translate-x-0" : "translate-x-1/2"
          }`}
        >
          <h1 className="mt-4 flex flex-col w-full text-4xl sm:text-6xl font-extrabold tracking-wider text-white">
            SERVING OUR
            <span className="text-tertiary-200 leading-none">COMMUNITY</span>
            TOGETHER
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
          <Button
            text="JOIN"
            styleString="tertiary"
            onClick={() => handleRouteChange(navigate, "/membership")}
            overrideStyles={"w-full sm:w-auto"}
          />
          <Button
            text="REQUEST INFO"
            styleString="primary"
            onClick={() => handleRouteChange(navigate, "/membership")}
            overrideStyles={"w-full sm:w-auto"}
          />
        </div>
      </TitleSection>

      {/* Key Points Section*/}
      <div className="mt-10 mx-6 sm:mx-8 max-w-7xl w-full xl:mx-auto flex flex-col sm:flex-row justify-evenly gap-6 bg-black opacity-80 border-white border rounded-sm p-6 transition-all duration-500 ease-in-out hover:bg-secondary-500">
        {keyPoints.map((point) => (
          <div className="text-white font-extrabold flex flex-col gap-4">
            <div className="flex items-center text-lg">
              <point.icon className="h-6 w-6 mr-2 text-tertiary-100" />
              {point.title}
            </div>
            <p className="ml-8 font-normal text-center text-5xl">
              {point.stat}
            </p>
          </div>
        ))}
      </div>

      <div className="py-8 flex flex-col gap-y-4  bg-black relative">
        <ContentFrame
          image={"/group_photo.jpg"}
          title={"Fire"}
          text={`Firefighting is a crucial service provided by our department,
            dedicated to protecting lives, property, and the environment from
            the devastating effects of fires. Our trained firefighters are
            equipped to respond to a variety of emergencies, ranging from
            structural fires in residential and commercial properties to
              vehicle fires. Firefighters are prepared to manage fires from
              their inception to full extinguishment, ensuring that fires are
              controlled and extinguished as safely and efficiently as possible.
              Through continuous training and community engagement, we strive to
              minimize the impact of fires and enhance the safety of our
              community.`}
          button={{
            styleString: "tertiary",
            text: "Apply",
            onClick: () => handleRouteChange(navigate, "/membership"),
          }}
          reverse={true}
        />
        <ContentFrame
          image={"/goons.jpg"}
          title={"EMS"}
          text={` Emergency Medical Services (EMS) in the fire service play a
            critical and lifesaving role in our community. Our EMS personnel
            are trained to respond to a variety of medical emergencies,
            including cardiac arrests, respiratory emergencies, trauma
            incidents, and other urgent health situations. EMS providers
            deliver immediate medical care, stabilize patients, and prepare
            them for transport to medical facilities if needed. Through rapid
            response, skilled intervention, and compassionate care, our EMS
            units are dedicated to preserving life and minimizing the
            consequences of illness and injury.`}
          button={{
            styleString: "tertiary",
            text: "Apply",
            onClick: () => handleRouteChange(navigate, "/membership"),
          }}
          reverse={false}
        />
        <div className="relative max-w-7xl w-full xl:mx-auto bg-black flex flex-col md:flex-row items-center justify-evenly p-4 gap-8">
          {pages.map((page) => (
            <div
              key={page.name}
              className="flex flex-col items-center justify-between bg-tertiary-200 rounded p-8 min-h-96 flex-1"
            >
              <page.icon className="h-24 w-24 text-white" />
              <p className="text-white text-center p-4">{page.text}</p>
              <Button
                text={page.button.text}
                styleString="primary"
                onClick={page.button.onClick}
                overrideStyles={"text-sm"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

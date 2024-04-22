import React, { useRef, useState, useEffect } from "react";
import FloatingButtons from "../components/FloatButtons";
import { PhoneIcon } from "@heroicons/react/24/outline";

const About = () => {
  const [imageInView, setImageInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update our state when observer callback fires
      setImageInView(entry.isIntersecting);
    });
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const companyData = [
    { id: 1, section: "EMS", companies: ["359"] },
    { id: 2, section: "FIRE", companies: ["353", "354", "355"] },
    { id: 3, section: "TRUCK COMPANY", companies: ["352"] },
  ];

  function CompanyCard({ company, section }) {
    return (
      <a
        href={`/company/${company}`}
        className="relative h-96 group overflow-hidden rounded-sm shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105"
      >
        <img
          src={`/${company}Patch.jpeg`}
          alt={`Company ${company}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">{`${section} ${company}`}</span>
        </div>
      </a>
    );
  }

  return (
    <div>
      <FloatingButtons />
      {/* Video w/title */}
      <div className="h-96 sm:h-screen text-white flex flex-col items-center justify-center text-3xl sm:text-6xl ">
        <video
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          className="absolute w-full h-3/4 object-cover"
        >
          <source src={"/smoke_video.mp4"} type="video/mp4" />
        </video>
        <span className="relative flex sm:w-2/3 w-11/12 justify-center border-8  py-6  font-bold">
          ABOUT US
        </span>
      </div>
      {/* Mission Statement */}
      <div className="relative flex sm:flex-row flex-col w-full justify-between sm:gap-4 gap-8 py-8 sm:px-6 h-auto bg-black">
        <div className="sm:w-1/2">
          <h2 className="font-extrabold text-white text-2xl p-6 border-b-2 w-full border-white">
            MISSION STATEMENT
          </h2>
          <div className="flex flex-col max-w-7xl text-white p-6">
            The Woodmere Fire Department is a volunteer fire department located
            in Woodmere, NY. We are dedicated to serving our community and
            providing the highest level of service to our residents. Our
            department is made up of dedicated volunteers who are committed to
            protecting the lives and property of our neighbors. We are always
            looking for new members to help us better serve the community.
          </div>
        </div>
        <div className="sm:w-1/2">
          <img
            ref={imgRef}
            src="/group_photo.jpg"
            className={`transition-opacity duration-1000 ${
              imageInView ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {companyData.map((category) => {
        return (
          <div className="space-y-2  w-full justify-between sm:px-10 bg-black">
            {/* Truck */}
            <h2 className="text-2xl font-bold flex w-full bg-tertiary-100 text-white p-4 sm:mx-4">
              {category.section}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
              {category.companies.map((company) => (
                <CompanyCard company={company} section={category.section} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default About;

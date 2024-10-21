import React, { useRef, useState, useEffect } from "react";
import TitleSection from "../components/TitleSection";
import ContentFrame from "../components/ContentFrame";

const About = () => {
  const companyData = [
    {
      id: 1,
      section: "RESCUE",
      companies: [
        { number: "359", statement: "359 ", image: "/352Patch.jpeg" },
        { number: "3591", statement: "3591 ", image: "/354Patch.jpeg" },
      ],
    },
    {
      id: 2,
      section: "TRUCK",
      companies: [{ number: "352", statement: "Comapnt", image: "/352Patch.jpeg" }],
    },
    {
      id: 3,
      section: "FIRE",
      companies: [
        { number: "353", statement: "Comapnt", image: "/353Patch.jpeg" },
        { number: "354", statement: "Comapnt", image: "/354Patch.jpeg" },
        { number: "355", statement: "Comapnt", image: "/355Patch.jpeg" },
      ],
    },
  ];

  function CompanyCard({ company, section }) {
    return (
      <div className="grid grid-cols-2">
        <div className="mx-auto h-60 w-60 group overflow-hidden rounded-sm shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105">
          <img
            src={company.image}
            alt={`Company ${company.number}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center"></div>
        </div>
        <div className="text-white">
          <h2 className="text-2xl font-bold">{company.number}</h2>
          <h4 className="text-white font-light">{section} COMPANY</h4>
          <p className="text-gray-400">{company.statement}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Video w/title */}
      <TitleSection asset={"/group_photo.jpg"} title="About Us" />

      <div className="py-8">
        <ContentFrame
          image={"/group_photo.jpg"}
          title={"MISSION STATEMENT"}
          text={`The Woodmere Fire Department is a volunteer fire department located
          in Woodmere, NY. We are dedicated to serving our community and
          providing the highest level of service to our residents. Our
          department is made up of dedicated volunteers who are committed to
          protecting the lives and property of our neighbors. We are always
          looking for new members to help us better serve the community.`}
        />
      </div>

      <h2 className="text-white text-center text-4xl py-6">OUR COMPANIES</h2>
      {companyData.map((category) => {
        return (
          <div className="relative space-y-2 flex flex-col  w-full justify-between sm:px-10 bg-black">
            <div className="flex flex-col gap-4 p-4 ">
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

import React from "react";
import TitleSection from "../components/TitleSection";
import ContentFrame from "../components/ContentFrame";

const About = () => {
  const companyData = [
    {
      id: 1,
      section: "RESCUE",
      companies: [
        {
          number: "359",
          statement: `Ambulance 359 is our primary response ambulance. Purchased in 2012, 359 is equipped with modern EMS equipment as well as a bariatric stretcher and ....`,
          image: "/359Rig.jpg",
        },
        {
          number: "3591",
          statement: `Ambulance 3591 is our primary response ambulance. Purchased in 2012, 359 is equipped with modern EMS equipment as well as a bariatric stretcher and ....`,
          image: "/3591Rig.jpg",
        },
      ],
    },
    {
      id: 2,
      section: "TRUCK",
      companies: [
        {
          number: "352",
          statement: `Ladder 352 is a Seagrave equipped with a 100 ft. aerial ladder designed for quick deployments. 
                      352 was purchased in 2016 to help the department carry out its firematic duties as it relates 
                      to search and rescue. 352 is equipped with all of the tools necessary to accomplish the trucks 
                      objective at fires as well as assist at MVA's and other incidents.`,
          image: "/352Rig.jpg",
        },
      ],
    },
    {
      id: 3,
      section: "FIRE",
      companies: [
        {
          number: "353",
          statement: `Engine 353 the oldest apparatus, purchased in 2004. Engine 353 is a Ferrara Engine with a 
                      500 gallon water tank and 1500 gpm pump. With a compact design engine 353 has everything needed 
                      for fire extinguinshment.`,
          image: "/353Rig.jpg",
        },
        {
          number: "354",
          statement: `Engine 354 is 1 of 2 Spartan Engines purchased in 2015. Engine 354 is the
                      departments primary response engine and is equipped for virtually any emergency that the department
                      is faced with. Outfitted with a 500 gpm water tank, a 1500 gpm pump, 2 - 800' stretching beds, 2 - 200' crosslays, 1000' of supply hose,  motor vehicle extrication equipment, 
                      foam capabilities, and stabilization struts, Engine 354 is the departments workhorse engine.`,
          image: "/354Rig.jpg",
        },
        {
          number: "355",
          statement: `Similar to Engine 354, Engine 355 is a 500 gallon, 1500 gpm Ferrara Engine purchsed in 2015. It is for this 
                      reason engines 354 and 355 are sometimes referred to as the "twins" within the department. The symmetry between 
                      the erngines allows for greater consistency as it relates to retreiving, and the maintenance of equipment.`,
          image: "/355Rig.jpg",
        },
      ],
    },
  ];

  function CompanyCard({ company, section }) {
    return (
      <div className="grid grid-cols-2">
        <div className="mx-auto group overflow-hidden rounded-sm shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105">
          <img
            src={company.image}
            alt={`Company ${company.number}`}
            className="sm:w-56 md:w-96 w-40 h-auto object-center"
          />
          <div className="hidden absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-500 sm:flex items-center justify-center"></div>
        </div>
        <div className="text-white">
          <h2 className="text-xl sm:text-2xl font-bold">{company.number}</h2>
          <h4 className="text-white font-light">{section} COMPANY</h4>
          <p className="text-gray-400">{company.statement}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Video w/title */}
      <TitleSection asset={"/oldschool.jpg"} title="About Us" />

      <div className="py-8">
        <ContentFrame
          image={"/hq.jpg"}
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

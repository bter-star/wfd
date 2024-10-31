import React from "react";
import Input from "./Input";
import Button from "./Button";

const ApplicationForm = () => {
  return (
    <div className="border-b border-white/10 pb-12">
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <Input name={"firstname"} label={"First Name"} />
        </div>

        <div className="sm:col-span-3">
          <Input name={"lastname"} label={"Last Name"} />
        </div>

        <div className="sm:col-span-4">
          <Input name={"email"} label={"Email"} type={"email"} />
        </div>
        <div className="sm:col-span-4">
          <Input name={"phone"} label={"Phone Number"} type={"tel"} />
        </div>

        <div className="sm:col-span-3">
          <Input
            name={"interestedIn"}
            label={"Interested In"}
            type={"checkbox"}
            options={["Fire", "EMS"]}
          />
        </div>

        <div className="col-span-full">
          <Input
            type={"radio"}
            name={"fire-certifications"}
            label={
              "Do you hold any current county, state, or national certifications for firefighting?"
            }
            options={["Yes", "No"]}
          />
        </div>

        <div className="col-span-full">
          <Input
            type={"radio"}
            name={"ems-certifications"}
            label={
              "Do you hold any current NYS certifications for pre-hospital medical care?"
            }
            options={["Yes", "No"]}
          />
        </div>
        <div className="col-span-full">
          <Input
          type={"textarea"}
            name={"prior-care-experience"}
            label={
              "If you answered yes to the above, briefly explain any prior experience you have providing care on an ambulance?"
            }
          />
        </div>

        <div className="col-span-full">
          <Input
            type={"radio"}
            name={"references"}
            label={"Do you know any members of the Woodmere Fire Department?"}
            options={["Yes", "No"]}
          />
        </div>
        <div className="col-span-full">
          <Input name={"reference-name"} label={"Name of Reference"} />
        </div>
        <div className="col-span-full">
          <Input name={"street-address"} label={"Street Address"} />
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <Input name={"city"} label={"City"} />
        </div>

        <div className="sm:col-span-2">
          <Input name={"state"} label={"State"} />
        </div>
        <div className="sm:col-span-2 ">
          <Input name={"zip"} label={"ZIP"} />
        </div>

        <div className="sm:col-span-2">
          <Input name={"age"} label={"Age"} type={"number"} />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Button text={"Submit"} styleString={"accent"} />
      </div>
    </div>
  );
};

export default ApplicationForm;

import React from "react";

const Input = ({ name, type, label, options }) => {
  let inputElement;

  switch (type) {
    case "textarea":
      inputElement = (
        <textarea
          name={name}
          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary-100 sm:text-sm sm:leading-6"
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          name={name}
          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary-100 sm:text-sm sm:leading-6 [&_*]:text-black"
        >
          <option value="">Select</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
      break;
    case "radio":
      inputElement = (
        <div className="flex flex-col space-y-2">
          {options.map((option, index) => (
            <label key={index} className="inline-flex items-center">
              <input
                type="radio"
                name={name}
                value={option}
                className="form-radio text-secondary-100 focus:ring-secondary-100 bg-transparent"
              />
              <span className="ml-2 text-white">{option}</span>
            </label>
          ))}
        </div>
      );
      break;
    case "checkbox":
      inputElement = (
        <div className="flex flex-col space-y-2">
          {options.map((option, index) => (
            <label key={index} className="inline-flex items-center">
              <input
                type="checkbox"
                name={name}
                value={option}
                className="form-checkbox rounded-sm text-secondary-100 focus:ring-secondary-100 bg-transparent"
              />
              <span className="ml-2 text-white">{option}</span>
            </label>
          ))}
        </div>
      );
      break;
    default:
      inputElement = (
        <input
          name={name}
          type={type}
          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-secondary-100 sm:text-sm sm:leading-6"
        />
      );
      break;
  }

  return (
    <>
      {" "}
      <label
        htmlFor="first-name"
        className="block text-sm font-medium leading-6 text-white"
      >
        {label}
      </label>
      <div className="mt-2">{inputElement}</div>
    </>
  );
};

export default Input;

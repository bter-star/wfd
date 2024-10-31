import React from "react";
import Button from "./Button";

const ContentFrame = ({ image, text, title, button, reverse = false }) => {
  return (
    <div className="bg-black-300">

    <div
      className={`relative max-w-7xl  xl:mx-auto px-6 flex flex-col-reverse w-full ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      }`}
      >
      <div className="flex flex-col gap-4 w-full sm:w-1/2 py-4 sm:px-4">
        <h2 className="text-3xl font-extrabold text-white">{title}</h2>
        <p className="text-gray-300 tracking-wide">{text}</p>
        {button && (
          <Button
          text={button.text}
          styleString={button.styleString}
          onClick={button.onClick}
          overrideStyles={"text-sm w-full sm:w-fit"}
          />
        )}
      </div>
      <img src={image} alt={text} className="w-full sm:w-1/2 h-96 object-cover" />
    </div>
        </div>
  );
};

export default ContentFrame;

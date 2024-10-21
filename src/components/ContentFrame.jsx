import React from "react";
import Button from "./Button";

const ContentFrame = ({ image, text, title, button, reverse = false }) => {
  return (
    <div
      className={`relative bg-black-300 px-6 flex flex-col w-full ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      }`}
    >
      <div className="flex flex-col gap-4 w-full sm:w-1/2 p-4">
        <h2 className="text-3xl font-extrabold text-white">{title}</h2>
        <p className="text-white text-sm">{text}</p>
        {button && (
          <Button
            text={button.text}
            styleString={button.styleString}
            onClick={button.onClick}
            overrideStyles={"text-sm"}
          />
        )}
      </div>
      <img src={image} alt="" className="w-full sm:w-1/2 h-96 object-cover" />
    </div>
  );
};

export default ContentFrame;

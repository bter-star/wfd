import React from "react";
import classNames from "classnames";
import * as Icons from "@heroicons/react/24/outline";

const Button = ({
  type = "button",
  disabled,
  onClick,
  styleString = "primary",
  text,
  overrideStyles,
  icon,
}) => {
  const buttonStyle = classNames(
    "flex justify-center items-center w-fit rounded-full mx-1 px-3.5 py-2 text-2xl min-w-32 border border-2 transition-transform transition-colors duration-500 ease-in-out transform hover:scale-105 hover:translate-y-[-2px]",
    {
      "bg-transparent text-white border border-white shadow-sm hover:bg-white hover:border-white hover:text-black":
        styleString === "primary",
      "bg-secondary-100 text-white border border-transparent shadow-sm hover:bg-secondary-200":
        styleString === "secondary",
      "bg-tertiary-100 text-white border border-tertiary-100 shadow-sm hover:bg-transparent hover:border-tertiary-100":
        styleString === "tertiary",
      "bg-transparent text-white shadow-sm border-accent-200 text-accent-200":
        styleString === "accent",
      "bg-accent-200 text-white shadow-sm hover:bg-accent-200":
        styleString === "danger",
      "cursor-not-allowed bg-grayscale-300 hover:bg-grayscale-300 text-grayscale-600 hover:cursor-disabled":
        disabled,
      "hover:cursor-pointer": !disabled,
    },
    overrideStyles
  );

  const IconComponent = icon ? Icons[icon] : null;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonStyle}
    >
      <div className="flex gap-2 items-center">
        {IconComponent && (
          <IconComponent className="mr-1" style={{ fontSize: "1rem" }} />
        )}
        {text}
      </div>
    </button>
  );
};

export default Button;
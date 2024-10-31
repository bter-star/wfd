import React, { useEffect, useRef } from "react";
import Button from "./Button";

const TitleSection = ({ children, asset, title, subtitle, button }) => {
  const imageRef = useRef(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <img
        ref={imageRef}
        src={asset}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full bg-black/50 px-8">
        <div className="flex flex-col gap-8 relative top-1/3 justify-center items-center w-full max-w-screen-sm mx-auto">
          {title && (
            <span className="h-fit m-auto border-8 bg-black/20 w-full text-center py-6 text-white text-3xl sm:text-6xl font-bold">
              {title}
            </span>
          )}
          {subtitle && (
            <span className="h-fit m-auto text-white text-2xl md:w-1/2 flex text-center font-medium">
              {subtitle}
            </span>
          )}
          {button && (
            <div>
              <Button
                text={button.text}
                styleString={button.styleString}
                onClick={button.onClick}
              />
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default TitleSection;

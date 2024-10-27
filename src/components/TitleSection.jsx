import Button from "./Button";

const TitleSection = ({ children, asset, title, button }) => {
  // const assetType = asset.split(".").pop();

  return (
    <div
      className="flex flex-col bg-fixed h-screen px-8 object-center bg-center bg-no-repeat bg-cover overflow-x-hidden"
      style={{
        backgroundImage: `url(${asset})`,
      }}
    >
      <div className="flex flex-col gap-8 relative top-1/3 justify-center items-center w-full">
        {title && (
          <span className="h-fit m-auto border-8 w-full text-center py-6 text-white text-3xl sm:text-6xl font-bold">
            {title}
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
  );
};

export default TitleSection;

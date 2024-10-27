import React from "react";

const Map = () => {
  return (
    <iframe
      title="Google Map"
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS}&q=20+Irving+Place+woodmere+ny`}
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      aria-hidden="false"
      tabIndex="0"
    />
  );
};

export default Map;

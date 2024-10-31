import React from "react";
import TitleSection from "../components/TitleSection";

const Donate = () => {
  return (
    <TitleSection
      asset={"/outreach.jpg"}
      title="DONATE"
      subtitle={`Donate today to help give back to your local volunteer department`}
      button={{
        text: "Donate",
        onClick: () =>
          window.open(
            "https://www.paypal.com/donate?token=RMferbaC30HA_M1c9ab_fEGfc1lgTrvxepjr2WfSvSHXJCk13r0AqPqBxeXpZkguYUJ0mngyvs8XLGX_",
            "_blank"
          ),
          styleString: "accent",
      }}
    >
    
    </TitleSection>
  );
};

export default Donate;

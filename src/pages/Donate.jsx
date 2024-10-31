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
            "https://www.paypal.com/donate/?hosted_button_id=564FAUZ6BP3UA",
            "_blank"
          ),
          styleString: "accent",
      }}
    >
    
    </TitleSection>
  );
};

export default Donate;

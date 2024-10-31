import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import TitleSection from "../components/TitleSection";

const images = [
  {
    src: "/rufftimes.jpg",
    alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "/group_photo.jpg",
    alt: "Flower (Fancycrave - fancycrave.com)",
  },
  {
    src: "/outreach.jpg",
    alt: "Flower (Fancycrave - fancycrave.com)",
  },
  {
    src: "/hq.jpg",
    alt: "Flower (Fancycrave - fancycrave.com)",
  },
  {
    src: "/oldschool.jpg",
    alt: "Flower (Fancycrave - fancycrave.com)",
  },
];

const slides = images.map(({ src, width = 320, height }) => ({
  src,
  width,
  height,
}));

const Media = () => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index) => setIndex(index);

  return (
    <>
      <TitleSection asset={"/group_photo.jpg"} title="GALLERY" />
      <div className="m-8 max-w-7xl w-full xl:mx-auto">
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
        />
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </>
  );
};

export default Media;

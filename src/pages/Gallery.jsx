import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import TitleSection from "../components/TitleSection";

const images = [
  {
    src: "/353Patch.jpeg",
    width: 1200,
    height: 1200,
    alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "/354Patch.jpeg",
    width: 800,
    height: 800,
  },
  {
    src: "/355Patch.jpeg",
    width: 900,
    height: 900,
  },
  {
    src: "/352Patch.jpeg",
    width: 900,
    height: 900,
  },
  {
    src: "/355Patch.jpeg",
    width: 600,
    height: 600,
  },
  {
    src: "/353Patch.jpeg",
    width: 800,
    height: 800,
  },
  {
    src: "/353Patch.jpeg",
    width: 800,
    height: 800,
  },
  {
    src: "/353Patch.jpeg",
    width: 800,
    height: 800,
  },
];

const slides = images.map(({ src, width = 320, height }) => ({
  src,
  width,
  height,
}));

const Media = () => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);

  return (
    <>
      <TitleSection asset={"/group_photo.jpg"} title="GALLERY" />
      <div className="m-8">
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

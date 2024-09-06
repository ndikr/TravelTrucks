import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
export default function ImagesGallery({ images, name }) {
  console.log(images);
  const items = images.map((image) => {
    return {
      original: image.original,
      thumbnail: image.thumb, // thumbnailHeight: "100px",
      originalAlt: name,
      thumbnailAlt: name,
      // originalHeight: "330px",
      // originalWidth: "300px",
    };
  });
  return (
    <ImageGallery items={items} showPlayButton={false} showBullets={true} />
  );
}

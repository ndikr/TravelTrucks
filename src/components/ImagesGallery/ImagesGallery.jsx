import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
export default function ImagesGallery({ images, name }) {
  const items = images.map((image) => {
    return {
      original: image.original,
      thumbnail: image.thumb,
      originalAlt: name,
      thumbnailAlt: name,
    };
  });
  return (
    <ImageGallery items={items} showPlayButton={false} showBullets={true} />
  );
}

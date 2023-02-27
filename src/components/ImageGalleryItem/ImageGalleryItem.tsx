import { Item, ItemImage } from "./ImageGalleryItem.styled";
type ImageGalleryItemProps = {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  onOpenModal: (imageUrl: string) => void;
};
const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  onOpenModal,
}: ImageGalleryItemProps) => {
  return (
    <Item key={id} onClick={() => onOpenModal(largeImageURL)}>
      <ItemImage src={webformatURL} alt="" />
    </Item>
  );
};
export default ImageGalleryItem;

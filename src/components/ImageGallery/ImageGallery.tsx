import React, { useState, useEffect } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { GaleryList } from "./ImageGallery.styled";
import { getImg } from "../../services/api";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { Iimages } from "../../interfaces/interfaces";
type ImageGalleryProps = {
  query: string;
};

const ImageGallery = ({ query }: ImageGalleryProps) => {
  const [images, setImages] = useState<Iimages[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [largeImageURL, setLargeImageURL] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (query) {
      setImages([]);
      fetchImages();
    }
  }, [query]);
  const fetchImages = async () => {
    try {
      const data = await getImg(query, pageNumber);
      if (data && data.data.hits.length) {
        const fetchedImages: Iimages[] = data.data.hits;
        setImages((prevState) => [...prevState, ...fetchedImages]);
        setPageNumber((prevState) => prevState + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  });
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const onLargeImgClick = (imageUrl: string) => {
    setLargeImageURL(imageUrl);
    toggleModal();
  };

  return (
    <div>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt="" />
        </Modal>
      )}
      <GaleryList>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            onOpenModal={onLargeImgClick}
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        ))}
        {images.length > 0 && <Button onLoadMore={fetchImages} />}
      </GaleryList>
    </div>
  );
};
export default ImageGallery;

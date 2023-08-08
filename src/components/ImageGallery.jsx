import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';

import { ImageListUl } from './styled';

export const ImageGallery = ({ images, toggleModal }) => {
  return (
    <ImageListUl>
      {images.map(photo => (
        <ImageGalleryItem
          toggleModal={toggleModal}
          key={photo.id}
          photo={photo}
        />
      ))}
    </ImageListUl>
  );
};

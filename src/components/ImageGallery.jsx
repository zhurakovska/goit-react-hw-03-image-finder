import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';

import { ImageListUl } from './styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageListUl>
      {images.map(photo => (
        <ImageGalleryItem key={photo.id} photo={photo} />
      ))}
    </ImageListUl>
  );
};

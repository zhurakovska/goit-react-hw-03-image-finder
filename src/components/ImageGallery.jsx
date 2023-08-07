import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(photo => (
        <ImageGalleryItem key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};

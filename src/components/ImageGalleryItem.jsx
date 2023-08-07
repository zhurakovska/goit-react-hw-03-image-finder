import React from 'react';

export const ImageGalleryItem = ({ photo }) => {
  return (
    <li>
      <img src={photo.webformatURL} alt="photo" />
    </li>
  );
};

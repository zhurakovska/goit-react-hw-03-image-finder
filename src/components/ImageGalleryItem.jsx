import React from 'react';

import { ImageItemStyled } from './styled';

export const ImageGalleryItem = ({ photo, toggleModal }) => {
  return (
    <ImageItemStyled>
      <img
        onClick={() => toggleModal(photo.largeImageURL)}
        src={photo.webformatURL}
        alt="photo"
      />
    </ImageItemStyled>
  );
};

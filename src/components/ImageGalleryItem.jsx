import React from 'react';

import { ImageItemStyled } from './styled';

export const ImageGalleryItem = ({ photo }) => {
  return (
    <ImageItemStyled>
      <img src={photo.webformatURL} alt="photo" />
    </ImageItemStyled>
  );
};

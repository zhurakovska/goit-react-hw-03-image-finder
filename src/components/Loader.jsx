import React from 'react';

import { LoaderContainer } from './styled';

import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderContainer>
  );
};

// const Wrapper = styled.dic`
//   display: grid;
//   place-items: center;
//   min-height: 50vh;
// `;

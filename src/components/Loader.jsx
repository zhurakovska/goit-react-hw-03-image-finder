import React from 'react';

import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </>
  );
};

// const Wrapper = styled.dic`
//   display: grid;
//   place-items: center;
//   min-height: 50vh;
// `;

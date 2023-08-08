import React from 'react';

import { StyledForm, StyledInput, StyledButtonSearch } from './styled';

export const Searchbar = ({ onSearchInput, handleSubmit }) => {
  const onSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value;
    onSearchInput(query);
  };
  return (
    <header>
      <StyledForm onSubmit={onSubmit}>
        <StyledButtonSearch onClick={handleSubmit} type="submit">
          Search
        </StyledButtonSearch>

        <StyledInput
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          placeholder="Search images and photos"
          onChange={e => onSearchInput(e.target.value)} // хендлим введеное
        />
      </StyledForm>
    </header>
  );
};

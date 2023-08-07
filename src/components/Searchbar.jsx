import React from 'react';

export const Searchbar = ({ onSearchInput, handleSubmit }) => {
  const onSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value;
    onSearchInput(query);
  };
  return (
    <header>
      <form onSubmit={onSubmit}>
        <button onClick={handleSubmit} type="submit">
          Search
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          placeholder="Search images and photos"
          onChange={e => onSearchInput(e.target.value)} // хендлим введеное
        />
      </form>
    </header>
  );
};

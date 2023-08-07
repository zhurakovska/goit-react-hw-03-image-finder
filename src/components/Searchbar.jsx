import React from 'react';

export const Searchbar = ({ onSearchInput }) => {
  const onSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value;
    onSearchInput(query);
  };
  return (
    <header>
      <form onSubmit={onSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

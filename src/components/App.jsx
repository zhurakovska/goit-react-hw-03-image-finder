import React from 'react';

import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

import { fetchImages } from 'service/api';
import { Loader } from './Loader';

export class App extends React.Component {
  state = {
    loading: false,
    error: '',
    images: [],
    page: 1,
    per_page: 12,
    total: null,
    query: 'rain',
  };

  async componentDidMount() {
    const { per_page, page, query } = this.state;
    try {
      this.setState({ loading: true });
      const { hits } = await fetchImages({
        per_page: per_page,
        page: page,
        q: query,
      });
      this.setState({ images: hits });
    } catch (error) {
    } finally {
      this.setState({ loading: false });
    }
  }

  handleSearchInput = query => {
    this.setState({ query });
  };
  render() {
    const { images, loading } = this.state;
    return (
      <>
        <Searchbar onSearchInput={this.handleSearchInput} />
        {loading ? <Loader /> : <ImageGallery images={images} />}
      </>
    );
  }
}

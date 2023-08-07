import React from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

import axios from 'axios';

//38181676-c389c3ce2b1eee7a286cf8f0e
//https://pixabay.com/api/

const API_KEY = '38181676-c389c3ce2b1eee7a286cf8f0e';

export class App extends React.Component {
  state = {
    loading: false,
    error: '',
    images: [],
    page: 1,
    per_page: 12,
    total: null,
  };

  async componentDidMount() {
    try {
      const { total, hits, totalHits } = await this.fetchImages();
      this.setState({ images: hits });
    } catch (error) {}
  }

  fetchImages = async () => {
    const { data } = await axios.get('https://pixabay.com/api/', {
      params: {
        q: 'tree',
        page: 1,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    });
    return data;
  };

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery images={this.state.images} />
      </>
    );
  }
}

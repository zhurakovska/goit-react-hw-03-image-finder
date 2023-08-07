import React from 'react';

import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
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
    query: '',
  };

  async downloadImages() {
    const { page, images } = this.state;

    try {
      this.setState({ loading: true });
      const { per_page, page, query } = this.state;

      if (!query.length) {
        // делаем проверку если квери пустое то не делаем новый запрос
        return;
      }

      const { hits } = await fetchImages({
        // тут мы получаем запрос
        per_page, // тут мы перезаписываем этот запрос
        page,
        q: query,
      });

      this.setState({
        images: [...this.state.images, ...hits],
      });
    } catch (error) {
    } finally {
      this.setState({ loading: false });
    }
  }

  async componentDidUpdate(_, prevState) {
    const { page } = this.state;

    if (prevState.page !== page) {
      this.downloadImages();
    }
  }

  handleSubmit = async () => {
    this.setState({ images: [] });
    this.downloadImages();
  };

  handleLoadMore = () => {
    const { images, hits } = this.state;
    this.setState(prevState => ({ page: prevState.page + 1 })); // Увеличиваем текущую страницу на 1
  };

  handleSearchInput = query => {
    this.setState({ query });
  };

  render() {
    const { images, loading } = this.state;
    console.log(this.state.images);
    return (
      <>
        <Searchbar
          onSearchInput={this.handleSearchInput}
          handleSubmit={this.handleSubmit}
        />
        {<ImageGallery images={images} />}
        {loading && <Loader />}
        {!!images.length && <Button onClick={this.handleLoadMore} />}
      </>
    );
  }
}

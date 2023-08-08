import React from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { fetchImages } from 'service/api';
import { Loader } from './Loader';
import { Modal } from './Modal';
import { Container } from './styled';

export class App extends React.Component {
  state = {
    loading: false,
    error: '',
    images: [],
    page: 1,
    per_page: 12,
    totalHits: 0,
    query: '',
    showloadMore: false,
    currentImage: '',
    isModalOpen: false,
    tags: '',
  };

  async downloadImages() {
    try {
      this.setState({ loading: true });
      const { per_page, page, query } = this.state;

      if (!query.length) {
        // делаем проверку если квери пустое то не делаем новый запрос
        return;
      }

      const { hits, totalHits } = await fetchImages({
        // тут мы получаем запрос
        per_page, // тут мы перезаписываем этот запрос
        page,
        q: query,
      });

      this.setState({
        images: [...this.state.images, ...hits], // тут мы соединяем старые картинки с новыми
        showloadMore: page * per_page < totalHits, // по дефолту фолс но когда делаем проверку с формулой то если условие верное то вернет тру иначе фолс
      });
    } catch (error) {
    } finally {
      this.setState({ loading: false });
    }
  }

  async componentDidUpdate(_, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      // при нажатии на лоад мор, page уже не будет равен prevState.page, потому что ты обновишь это значение в функции handleLoadMore увеличив на один
      this.downloadImages();
    }
  }

  handleSubmit = async () => {
    this.setState({ images: [], page: 1, totalHits: 0 }); // обнуляем стейт чтобы при новом запросе не мешать данные с предыдущими
    this.downloadImages(); // делаем первый запрос при нажатии на кнопку поиска
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 })); // Увеличиваем текущую страницу на 1
  };

  handleSearchInput = query => {
    this.setState({ query });
  };

  toggleModal = imageURL => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
      currentImage: imageURL,
    }));
  };

  render() {
    const { images, loading, showloadMore, isModalOpen, currentImage, tags } =
      this.state;
    return (
      <Container>
        <Searchbar
          onSearchInput={this.handleSearchInput}
          handleSubmit={this.handleSubmit}
        />
        {<ImageGallery toggleModal={this.toggleModal} images={images} />}
        {loading && <Loader />}
        {showloadMore && <Button onClick={this.handleLoadMore} />}
        {isModalOpen && (
          <Modal
            toggleModal={this.toggleModal}
            currentImage={currentImage}
            tags={tags}
          >
            <img src={currentImage} alt="text" onClick={this.getModalImage} />{' '}
          </Modal>
        )}{' '}
        {/* если модалка открытра то мы показываем наше окно */}
      </Container>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper, StyledModalWindow } from './styled';

export class Modal extends React.Component {
  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    toggleModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  state = {
    currentImage: this.props.largeImageURL,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown); // ивенлисенер будет срабатывать каждый раз когда нажимаем на кнопку
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown); //удаляем слушателя
  }

  onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.toggleModal();
    }
  };

  getModalImage = () => {
    const { largeImageURL } = this.props;
    this.setState({ currentImage: largeImageURL });
  };

  render() {
    return (
      <ModalWrapper onClick={this.onBackdropClick}>
        <StyledModalWindow>{this.props.children}</StyledModalWindow>
      </ModalWrapper>
    );
  }
}

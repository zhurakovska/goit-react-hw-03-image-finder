import { styled } from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  flex: 1;
`;

export const StyledButtonSearch = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  border: none;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &hover {
    background-color: #0056b3;
  }
`;

export const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  list-style: none;
`;

export const ImageItemStyled = styled.li`
  width: calc(25% - 10px);
  margin: 0;
  padding: 0;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const StyledModalWindow = styled.div`
  display: flex;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);

  @media screen and (min-width: 768px) {
    max-width: calc(100vw - 248px);
  }

  @media screen and (min-width: 1200px) {
    max-width: calc(100vw - 548px);
    max-height: calc(100vh - 124px);
  }
`;

export const StyledTest = styled.h1`
  background-color: white;
  width: 300px;
  height: 300px;
`;

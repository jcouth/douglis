import styled from 'styled-components';

import ReactPlayerFromLib from 'react-player';

import QR from './assets/qr.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 100%;
  min-height: 100vh;

  overflow: hidden;
`;

export const ReactPlayerWrapper = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;

  background: #000;

  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  }

  iframe {
    width: 100vw;
    height: 100vh;

    transform: scale(1.5);
  }
`;

export const ReactPlayer = styled(ReactPlayerFromLib).attrs({
  width: '100vw',
  height: '100vh',
  playing: true,
  muted: true,
})``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  transition: all 1s;

  &.right {
    transform: translate(-100%, 0);
    opacity: 0;
  }
`;

export const Title = styled.div`
  font-family: 'CityStencil';
  font-size: 8rem;

  color: #cec1e0;
  text-align: center;
  text-shadow: 0.5rem 0.5rem 1rem black;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  transition: all 0.41s ease-in-out;

  &.wrong {
    color: #9e1010;
  }
`;

export const Form = styled.form.attrs({
  autoComplete: 'off',
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  margin-top: 8rem;

  &.shaking {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

export const Input = styled.input.attrs({ type: 'text' })`
  padding: 0.6rem 0.6rem;

  border: none;
  border-bottom: 0.5rem solid #cec1e0;
  background: transparent;

  font-family: 'CityStencil';
  font-size: 4rem;
  color: #cec1e0;
  text-align: center;
  text-shadow: 0.5rem 0.5rem 1rem black;

  outline: none;

  transition: all 0.41s ease-in-out;

  &.wrong {
    border-bottom-color: #9e1010;
    color: #9e1010;
  }
`;

export const Button = styled.button.attrs({ type: 'submit' })`
  padding: 0.6rem 1.6rem;

  width: 100%;

  border: none;
  border-radius: 1.25rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: #cec1e0;

  font-family: 'CityStencil';
  font-size: 2rem;
  color: #090909;
  text-align: center;

  outline: none;

  transition: all 0.41s ease-in-out;

  &.wrong {
    background-color: #9e1010;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const QRCode = styled.img.attrs({
  src: QR,
  alt: 'QR Code secreto',
})`
  position: absolute;
  top: 50%;
  left: 50%;

  height: 40rem;

  transition: all 1s ease-in-out;
  transform: translate(300%, -50%);

  &.right {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

import styled from "styled-components";
// Button Source @Sonuum: https://getcssscan.com/css-buttons-examples

const Button = styled.button`
  backface-visibility: hidden;
  background: #61069e;
  border: 0;
  border-radius: 0.375rem;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1.125rem;
  letter-spacing: -0.01em;
  line-height: 1.3;
  padding: 1rem 1.25rem;
  position: relative;
  text-align: left;
  text-decoration: none;
  transform: translateZ(0) scale(1);
  transition: transform 0.2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:disabled {
    color: #787878;
    cursor: auto;
  }

  &:not(:disabled):hover {
    transform: scale(1.05);
  }

  &:not(:disabled):hover:active {
    transform: scale(1.05) translateY(0.125rem);
  }

  &:focus {
    outline: 0 solid transparent;
  }

  &:focus:before {
    border-width: 0.125rem;
    content: "";
    left: calc(-1 * 0.375rem);
    pointer-events: none;
    position: absolute;
    top: calc(-1 * 0.375rem);
    transition: border-radius;
    user-select: none;
  }

  &:focus:not(:focus-visible) {
    outline: 0 solid transparent;
  }

  &:not(:disabled):active {
    transform: translateY(0.125rem);
  }
`;

export default Button;

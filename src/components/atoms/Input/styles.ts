import styled, { keyframes } from "styled-components";

export const Container = styled.label`
  width: 100%;
  display: block;
  border: 1px solid ${({theme}) => theme.border.primary};
  background-color: ${({theme}) => theme.background.secondary};
  padding: ${({theme}) => theme.padding(1.5)} ${({theme}) => theme.padding(2)};
  ${({theme}) => theme.bigText()};
  input {
    height: 100%;
    width: 80%;
    background: inherit;
    outline: none;
    border: none;
    margin-left: ${({theme}) => theme.margin(2)};
    color: ${({theme}) => theme.text.primary};
    ${({theme}) => theme.bigText()};
  }
`;
export const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
`;

export const Icon = styled.div`
  color: ${({theme}) => theme.text.primary};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.span`
  display: inline-block;
  min-width: 18px;
  min-height: 18px;
  border: 2px solid ${({theme}) => theme.border.primary};
  animation: ${rotate} 1s linear infinite;
  border-top-color: transparent;
  ${({theme}) => theme.radius(200)};
`;

import styled from "styled-components";

export const Container = styled.label`
  width: 100%;
  display: block;
  position: relative;
  cursor: pointer;
  background-color: ${({theme}) => theme.background.secondary};
  input {
    display: none;
  };
`;

export const Header = styled.ul`
  border: 1px solid ${({theme}) => theme.border.primary};
`;

export const OptionsContainer = styled.ul`
  position: absolute;
  top: 100%;
  left: -0;
  width: 100%;
  z-index: 2;
  background-color: ${({theme}) => theme.background.secondary};
  border: 1px solid ${({theme}) => theme.border.primary};
  border-top: none;
  user-select: none;
  box-sizing: border-box;
`;

export const Option = styled.li`
  ${({theme}) =>theme.bigText()};
  display: block;
  box-sizing: border-box;
  padding: ${({theme}) => theme.padding(1.5)} ${({theme}) => theme.padding(2)};

  &:hover{
    background-color: ${({theme}) => theme.background.primary};
  }
`;

export const HeaderOption = styled(Option)`
  color: ${({theme}) => theme.text.placeholder};
`;

export const Icon = styled.div`
  font-size: 7px;
  position: absolute;
  top: 22px;
  right: 16px;
  color: ${({theme}) => theme.text.primary};
`;

export const Loader = styled.span`
  display: inline-block;
  min-width: 15px;
  min-height: 15px;
  border: 2px solid ${({theme}) => theme.border.primary};
  border-top-color: transparent;
  ${({theme}) => theme.radius(200)};
`;

export const ScreenLocker = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`; 
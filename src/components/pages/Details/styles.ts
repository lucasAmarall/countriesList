import styled from "styled-components";

export const Container = styled.section`
  ${({theme}) => theme.container()};
  padding-bottom: ${({theme}) => theme.margin(10)};
`;

export const BackButtonContainer = styled.span`
  ${({theme}) => theme.mediumText()};
  margin: ${({theme}) => theme.padding(5)} 0;
  display: inline-block;
`;

export const BackIcon = styled.span`
  font-size: 15px;
  margin-right: ${({theme}) => theme.margin(2)};
`;
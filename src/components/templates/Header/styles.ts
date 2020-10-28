import styled from "styled-components";

export const Container = styled.header`
  padding: ${({theme}) => theme.padding(3)} 0;
  background-color: ${({theme}) => theme.background.secondary};
  box-shadow: 0 2px 4px 0 ${({theme}) => theme.shadow.primary};
`;

export const ContentContainer = styled.div`
  ${({theme}) => theme.container()};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

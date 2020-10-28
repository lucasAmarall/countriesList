import styled from "styled-components";

export const Container = styled.article`
  ${({theme}) => theme.radius()};
  background-color: ${({theme}) => theme.background.secondary};
  border: 1px solid ${({theme}) => theme.border.primary};
  width: 240px;
  min-height: 303px;
  height: inherit;
  display: inline-block;
  box-sizing: border-box;
  
  ${({theme}) => theme.mobile(`
    width: 100%;
    height: unset;
  `)};
`;

export const Flag = styled.img`
  ${({theme}) => theme.radius()};
  background-size: 100%;
  height: 153px;
  position: relative;
  object-fit: cover;
  width: calc(100% + 1px);
  top: -1px;
  left: -1px;
  margin-bottom: -3px;
  min-height: 153px;
  
  ${({theme}) => theme.mobile(`
    height: unset;
  `)};
`;

export const InformationContainer = styled.div`
  padding: ${({theme}) => theme.padding(3)};
`;

export const Title = styled.h1`
  ${({theme}) => theme.bigText()};
  color: ${({theme}) => theme.text.primary};
  font-weight: 800;
`;

export const InfoList = styled.ul`
  margin-bottom: -${({theme}) => theme.margin()};
`;

export const InfoItem = styled.li`
  margin-bottom: ${({theme}) => theme.margin()};
  span{
    color: ${({theme}) => theme.text.primary};
    ${({theme}) => theme.smallText()};
    
    &:first-child{
      font-weight: 800;
    };
  };
`;
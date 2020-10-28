import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  ${({theme}) => theme.tablet(`
    flex-direction: column;
  `)};
`;

export const Image = styled.img`
  ${({theme}) => theme.radius()};
  width: 414px;
  height: 296px;
  object-fit: cover;
  ${({theme}) => theme.tablet(`
    width: calc(100% + ${theme.containerPadding * 2}px);
    margin-left: -${theme.containerPadding}px;
    height: unset;
  `)};
`;

export const InfoContainer= styled.div`
  max-width: 540px;
  width: 100%;
  padding-left: ${({theme}) => theme.padding(4)};

  ${({theme}) => theme.tablet(`
      padding-left: 0;
  `)};
`;

export const Title = styled.h1`
  ${({theme}) => theme.headText()};
  margin-bottom: ${({theme}) => theme.margin(3)};
  font-weight: 800;

  ${({theme}) => theme.tablet(`
    margin-top: ${theme.margin(4)};
  `)};
`;

export const InfoList = styled.ul`
  width: 241px;
  display: inline-block;
  vertical-align: top;
  margin-bottom: ${({theme}) => theme.margin(4)};
`;

export const InfoItem = styled.li`
  box-sizing: border-box;
  white-space: nowrap;
  display: inline-block;
  margin-bottom: ${({theme}) => theme.margin()};
  ${({theme}) => theme.mediumText()};

  &:nth-child(2n){
    padding-right: ${({theme}) => theme.margin(2)};
  }
`;

export const InfoLabel = styled.span`
  ${({theme}) => theme.mediumText()};
  font-weight: 800;
`;

export const BorderCountriesContainer = styled.div`
  display: block;
  margin-top: ${({theme}) => theme.margin(3)};

  > span{
    margin-right: ${({theme}) => theme.margin(5)};;
  }
`;

export const TagsContainer = styled.div`
  display: inline-block;

  ${({theme}) => theme.mobile(`
    display: block;
  `)};
`;

export const Tag = styled.span`
  display: inline-block;
  border: 2px solid ${({theme}) => theme.border.primary};
  padding: ${({theme}) => theme.padding(.5)} ${({theme}) => theme.padding(2)};
  margin-top: ${({theme}) => theme.margin()};
  margin-right: ${({theme}) => theme.margin()};
  
  &:last-child{
    margin-right: 0;
  };
`;
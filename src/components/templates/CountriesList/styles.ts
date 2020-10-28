import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
  ${({theme}) => theme.container()};
`;

export const FiltersContainer = styled.div`
  margin-bottom: ${({theme}) => theme.margin(5)};
  display: flex;
  justify-content: space-between;
  z-index: 2;
  background: ${({theme}) => theme.background.primary};

  ${({theme}) => theme.mobile(`
    flex-direction: column;
  `)};
`;

export const SearchContainer = styled.div`
  width: 327px;

  ${({theme}) => theme.tablet(`
    width: 48%;
  `)};
  ${({theme}) => theme.mobile(`
    width: 100%;
  `)};
`;

export const DropdownContainer = styled.div`
  width: 242px;
  
  ${({theme}) => theme.tablet(`
    width: 48%;
  `)};
  ${({theme}) => theme.mobile(`
    width: 100%;
    margin-top: ${theme.margin(2)};
  `)};
`;

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-flow: row;
  grid-row-gap: ${({theme}) => theme.gutter(8)};
  grid-column-gap: ${({theme}) => theme.gutter(2)};

  ${({theme}) => theme.mobile(`
    grid-row-gap: 16px;
    grid-template-columns: 1fr;
  `)};
`;

export const ItemContainer = styled(Link)`
  margin: auto;
  height: 100%;
  width: 100%;
`;
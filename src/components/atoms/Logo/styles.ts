import styled from "styled-components";

export const Container = styled.span`
  display: inline-block;
`;

export const SemanticTitle = styled.h1`
  color: transparent;
  font-size: 0.01rem;
  text-indent: -999999px;
  position: absolute;
`;

export const VisualLogo = styled.span`
  font-size: 24px;
  /** override the icommon line-height */
  line-height: 32px !important;
  color: ${({theme}) => theme.text.primary};
  ${({theme}) => theme.mobile(`
    font-size: 13px;
    line-height: 22px;
  `)}
`;
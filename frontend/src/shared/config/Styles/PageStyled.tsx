import styled from "styled-components";
import { sizes } from "./Sizes";

export const PageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  min-height: 100vh;
  min-width: 100%;
  padding: 20px;
  gap: 20px;
  margin-top: ${sizes.headerHeight};
`
import type { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "@shared/config/Styles/Colors";
import { sizes } from "@shared/config/Styles/Sizes";

import { useAuthStore } from "@features/users/authStore";

const HeaderStyled = styled.header`
  top: 0;
  position: fixed; 

  width: 100%;
  height: ${sizes.headerHeight};
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background-color: ${colors.primary};

  z-index: 1000;
`

const HeaderSection = styled.section`
  flex-grow: 1;
  flex-shrink: 0;
  
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: 0 20px;

  &:first-child {
    justify-content: left;
  }

  &:last-child {
    justify-content: right;  
  }
`

export const Header: FC = () => { 
  const user = useAuthStore(state => state.user);

  return (
    <>
      <HeaderStyled>
        <HeaderSection>
          <Link to="/">
            KSUF Games
          </Link>
        </HeaderSection>
        <HeaderSection>
          <Link to="/profile">
            {user ? user.name : "Guest"}
          </Link>
        </HeaderSection>
      </HeaderStyled>
    </>
  )
}
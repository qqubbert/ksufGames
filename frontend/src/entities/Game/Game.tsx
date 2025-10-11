import type { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { router } from "@shared/config/Routes/Routes";

export type GameProps = {
  title: string;
  img: string;
  route: string;
};

export const Game: FC<GameProps> = ({ title = "Default Title", img = '/defaultGameIcon.jpg', route = "/" }) => {
  const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 300px;
    gap: 10px;
  `;

  const GameImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
  `;

  const GameTitle = styled.h1`
  font-size: 10px;
  text-align: center;
  text-decoration: none;
`;

  return (
    <>
      <GameContainer as={Link} to={`/games/${route}`}>
        <GameImage src={img} alt={title} />
        <GameTitle>{title}</GameTitle>
      </GameContainer>
    </>
  );
}
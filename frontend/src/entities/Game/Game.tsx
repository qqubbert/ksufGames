import type { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export type GameProps = {
  id: number;
  title: string;
  img: string;
  name: string;
};

export const Game: FC<GameProps> = ({ title = "Default Title", img = '/defaultGameIcon.jpg', name = "/" }) => {
  const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 250px;
    gap: 5px;
  `;

  const GameImage = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    height: auto;
    border-radius: 10px;
  `;

  const GameTitle = styled.h1`
  font-size: 20px;
  text-align: center;
  text-decoration: none;
`;

  return (
    <>
      <GameContainer as={Link} to={`/games/${name}`}>
        <GameImage src={img} alt={title} />
        <GameTitle>{title}</GameTitle>
      </GameContainer>
    </>
  );
}
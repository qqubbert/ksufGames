import type { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export type GameProps = {
  id: number;
  title: string;
  icon: string;
  name: string;
};

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 250px;
  gap: 10px;
  border-radius: 15px;
  padding: 5px;
`;

const GameImage = styled.img`
  box-shadow: 0px 5px 10px 0px #0000002a;
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

export const Game: FC<GameProps> = ({ title = "Default Title", icon = '/defaultGameIcon.jpg', name = "/" }) => {

  return (
    <>
      <GameContainer as={Link} to={`/games/${name}`}>
        <GameImage src={icon} alt={title} />
        <GameTitle>{title}</GameTitle>
      </GameContainer>
    </>
  );
}
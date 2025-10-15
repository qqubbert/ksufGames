import styled from "styled-components";
import type { FC } from "react";

import { Game, type GameProps } from "@entities/Game/Game";

type GamesListProps = {
  gamesList: GameProps[]
  isLoading: boolean
}

export const GamesList: FC<GamesListProps> = ({ gamesList, isLoading }) => {
  const GamesListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    width: 100%;
    padding: 0 20px;
  `
  
  return (
    <>
    <GamesListContainer>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        gamesList.map((game, index) => (
          <Game key={index} {...game} />
        ))
      )}
    </GamesListContainer>
    </>
  )
}
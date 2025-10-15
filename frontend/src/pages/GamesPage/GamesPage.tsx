import { type FC } from "react"

import { PageTitle } from "@shared/PageTitle/PageTitle"
import { GamesList } from "@widgets/GamesList/Games.List"

import { PageStyled } from "@styles/PageStyled"

import { useGames } from "@features/games/useGames"

export const GamesPage: FC = () => {
  // const gamesList = [
  //   { id: 0, title: "Game 1", img: "/defaultGameIcon.jpg", name: "game1" },
  //   { id: 1, title: "Roulette", img: "/defaultGameIcon.jpg", name: "roulette" },
  // ]
  const {data, isLoading} = useGames();
  const gamesList = data || [];
  
  return (
    <>
      <PageStyled>
        <PageTitle text="Games Page"/>
        <GamesList gamesList={gamesList} isLoading={isLoading}/>
      </PageStyled>
    </>
  )
}
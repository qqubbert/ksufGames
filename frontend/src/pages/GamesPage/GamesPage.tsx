// import styled from "styled-components"
import { type FC } from "react"
import styled from "styled-components"

import { PageTitle } from "@shared/PageTitle/PageTitle"
import { GamesList } from "@widgets/GamesList/Games.List"

export const GamesPage: FC = () => {
  const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

  const gamesList = [
    { title: "Game 1", img: "/defaultGameIcon.jpg", route: "game1" },
    { title: "Roulette", img: "/defaultGameIcon.jpg", route: "roulette" },
  ]
  
  return (
    <>
      <PageContainer>
        <PageTitle text="Games Page"/>
        <GamesList gamesList={gamesList}/>
      </PageContainer>
    </>
  )
}
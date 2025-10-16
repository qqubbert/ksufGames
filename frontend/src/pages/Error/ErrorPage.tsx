import type { FC } from "react"

import { GlobalStyle } from "@styles/GlobalStyle"
import { PageStyled } from "@styles/PageStyled"

import { Header } from "@widgets/Header/Header"

export const ErrorPage: FC = () => {
  return (
    <>
      <Header />
      <PageStyled>
        <GlobalStyle />
        <h1>Page Not Found 404</h1>
      </PageStyled>
    </>
  )
}
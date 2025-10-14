import type { FC } from "react"
import { GlobalStyle } from "@shared/config/Styles/GlobalStyle"

import { PageStyled } from "@shared/config/Styles/PageStyled"

export const ErrorPage: FC = () => {
  return (
    <>
      <PageStyled>
        <GlobalStyle />
        <h1>Page Not Found 404</h1>
      </PageStyled>
    </>
  )
}
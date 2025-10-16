import { type FC } from "react"

import { PageTitle } from "@shared/PageTitle/PageTitle"
import { PageStyled } from "@shared/config/Styles/PageStyled"

export const ProfilePage: FC = () => {
  return (
    <>
      <PageStyled>
        <PageTitle text="Profile Page"/>
      </PageStyled>
    </>
  )
}
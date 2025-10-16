import type { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { GlobalStyle } from '@styles/GlobalStyle'
import { Header } from '@widgets/Header/Header'

export const App: FC = () => {

  return (
    <>
      <Header/>
      <GlobalStyle />
      <Outlet />
    </>
  )
}
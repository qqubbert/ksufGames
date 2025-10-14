import type { FC } from 'react'
import { GlobalStyle } from '@shared/config/Styles/GlobalStyle'
import { Outlet } from 'react-router-dom'

export const App: FC = () => {

  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  )
}
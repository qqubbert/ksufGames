import type { FC } from 'react'
import { GlobalStyle } from './GlobalStyle/GlobalStyle'
import { Outlet } from 'react-router-dom'

export const App: FC = () => {

  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  )
}
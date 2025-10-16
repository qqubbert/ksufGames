import { App } from "@app/App"
import { createBrowserRouter } from "react-router-dom"

import { RoulettePage } from "@pages/RoulettePage/RoulettePage"
import { GamesPage } from "@pages/GamesPage/GamesPage"
import { ErrorPage } from "@pages/Error/ErrorPage"
import { ProfilePage } from "@pages/ProfilePage/ProfilePage"

export const router = createBrowserRouter([{
  path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '',
        errorElement: <ErrorPage/>,
        element: <GamesPage />
      },
      {
        path: '/profile',
        errorElement: <ErrorPage/>,
        element: <ProfilePage />
      },
      {
        path: 'games/roulette',
        errorElement: <ErrorPage/>,
        element: <RoulettePage />
      },
    ]
}])
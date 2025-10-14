import { App } from "@app/App"
import { createBrowserRouter } from "react-router-dom"

import { RoulettePage } from "@pages/RoulettePage/RoulettePage"
import { GamesPage } from "@pages/GamesPage/GamesPage"
import { ErrorPage } from "@pages/Error/ErrorPage"

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
        path: 'games/roulette',
        errorElement: <ErrorPage/>,
        element: <RoulettePage />
      },
    ]
}])
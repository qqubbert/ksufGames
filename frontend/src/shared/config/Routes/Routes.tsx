import { App } from "@app/App"
import { createBrowserRouter } from "react-router-dom"

import { RoulettePage } from "@pages/RoulettePage/RoulettePage"
import { GamesPage } from "@pages/GamesPage/GamesPage"

export const router = createBrowserRouter([{
  path: '/',
    element: <App />,
    errorElement: <></>,
    children: [
      {
        path: '',
        errorElement: <></>,
        element: <GamesPage />
      },
      {
        path: 'games/roulette',
        errorElement: <></>,
        element: <RoulettePage />
      },
    ]
}])
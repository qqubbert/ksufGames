import { App } from "@app/App"
import { RoulettePage } from "@pages/RoulettePage/RoulettePage"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([{
  path: '/',
    element: <App />,
    errorElement: <></>,
    children: [
      {
        path: '/roulette',
        errorElement: <></>,
        element: <RoulettePage />
      },
    ]
}])
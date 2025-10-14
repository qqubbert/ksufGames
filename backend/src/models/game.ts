export type rawGame = {
  title: string
  icon: string
  name: string
}

export type game = rawGame & {
  id: number
}
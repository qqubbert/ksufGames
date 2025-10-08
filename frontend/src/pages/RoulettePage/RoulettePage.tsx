import { useState, type FC } from "react"

import { Roulette } from "@widgets/Roulette/Roulette"
import type { RouletteSectionType } from "@entities/RouletteSection/RouletteSection"

export const RoulettePage: FC = () => {
  const [items, setItems] = useState<RouletteSectionType[]>([
    { text: '0', bgColor: '#50dd50' },
    { text: '32', bgColor: '#dd5050' },
    { text: '15', bgColor: '#333333' },
    { text: '19', bgColor: '#dd5050' },
    { text: '4', bgColor: '#333333' },
    { text: '21', bgColor: '#dd5050' },
    { text: '2', bgColor: '#333333' },
    { text: '25', bgColor: '#dd5050' },
    { text: '17', bgColor: '#333333' },
    { text: '34', bgColor: '#dd5050' },
    { text: '6', bgColor: '#333333' },
    { text: '27', bgColor: '#dd5050' },
    { text: '13', bgColor: '#333333' },
    { text: '36', bgColor: '#dd5050' },
    { text: '11', bgColor: '#333333' },
    { text: '30', bgColor: '#dd5050' },
    { text: '8', bgColor: '#333333' },
    { text: '23', bgColor: '#dd5050' },
    { text: '10', bgColor: '#333333' },
    { text: '5', bgColor: '#dd5050' },
    { text: '24', bgColor: '#333333' },
    { text: '16', bgColor: '#dd5050' },
    { text: '33', bgColor: '#333333' },
    { text: '1', bgColor: '#dd5050' },
    { text: '20', bgColor: '#333333' },
    { text: '14', bgColor: '#dd5050' },
    { text: '31', bgColor: '#333333' },
    { text: '9', bgColor: '#dd5050' },
    { text: '22', bgColor: '#333333' },
    { text: '18', bgColor: '#dd5050' },
    { text: '29', bgColor: '#333333' },
    { text: '7', bgColor: '#dd5050' },
    { text: '28', bgColor: '#333333' },
    { text: '12', bgColor: '#dd5050' },
    { text: '35', bgColor: '#333333' },
    { text: '3', bgColor: '#dd5050' },
    { text: '26', bgColor: '#333333' },
  ])

  return (
    <>
      <Roulette items={items}/>
    </>
  )
}
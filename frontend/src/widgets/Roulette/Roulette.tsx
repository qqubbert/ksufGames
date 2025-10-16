import type { FC } from "react"

import { type RouletteSectionType, RouletteSection } from "@entities/RouletteSection/RouletteSection"

import styled from "styled-components"

type RouletteProps = {
  items: RouletteSectionType[]
}

const RouletteStyled = styled.div`
  all: unset;
  aspect-ratio: 1 / 1;
  direction: ltr;
  display: grid;
  place-content: center start;
  clip-path: inset(0 0 0 0 round 50%);
  container-type: inline-size;
  width: 500px;
  height: 500px;
`

export const Roulette: FC<RouletteProps> = ({ items }) => {
  const sectionCount = items.length


  return (
    <>
      <RouletteStyled className="roulette">
        {items.map((item, index) => (
          <RouletteSection key={index} {...item} sectionIndex={index} sectionCount={sectionCount} />
        ))}
      </RouletteStyled>
    </>
  )
}
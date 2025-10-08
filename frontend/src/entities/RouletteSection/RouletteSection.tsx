import type { FC } from "react"
import styled from "styled-components"

export type RouletteSectionType = {
  text: string,
  bgColor: string,
  sectionIndex?: number,
  sectionCount?: number
}

export const RouletteSection: FC<RouletteSectionType> = ({ text, bgColor, sectionIndex, sectionCount }) => {
  const Section = styled.section`
    background-color: ${bgColor};
    clip-path: ${(sectionCount == 1 || sectionCount == 2) 
      ? "none" 
      : sectionCount == 3 
      ? "polygon(-35% -100%, 100% 50%, 0% 145%)" 
      : "polygon(0% 0%, 100% 50%, 0% 100%)"};
    rotate: ${sectionCount == 1 
      ? "0deg" 
      : `calc(360deg / ${sectionCount} * ${sectionIndex} - 1deg)`};
    align-content: center;
    display: grid;
    font-size: 5cqi;
    grid-area: 1 / -1;
    padding-left: 20px;
    transform-origin: center right;
    width: ${sectionCount == 1 
      ? "100cqi" 
      : "50cqi"};
    aspect-ratio: ${sectionCount == 1 
      ? "1 / 1" 
      : sectionCount == 3 
      ? "1 / 2" 
      : `1/calc(2*tan(180deg/${sectionCount}))`};
    height: ${sectionCount == 2 
      ? "100cqi" 
      : "unset"};
    color: white;
  `

  const Span = styled.span`
    rotate: 90deg;
    width: fit-content;
  `
  
  return (
    <>
      <Section className="roulette-section">
        <Span>{text}</Span>
      </Section>
    </>
  )
}
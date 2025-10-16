import type { FC } from "react";
import styled from "styled-components";
import { colors } from "@shared/config/Styles/Colors";

type ButtonProps = { 
  title: string
  func?: () => void
}

const Btn = styled.button`
  background-color: ${colors.primary};
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.secondary};
  }
`

export const Button: FC<ButtonProps> = ({ title = "Button", func }) => {
  return (
    <>
      <Btn onClick={func}>
        <span>{title}</span>
      </Btn>
    </>
  )
}
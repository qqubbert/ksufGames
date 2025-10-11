import {type FC} from "react"
import styled from "styled-components"

type PageTitleProps = {
  text: string;
};

export const PageTitle: FC<PageTitleProps> = ({ text }) => {
  const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  `;
  
  return (
    <Title>
      {text}
    </Title>
  );  
}
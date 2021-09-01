import { ReactNode } from "react";
import {ContainerStyle}  from './styles/style'

type MainContainerProps = {
  children: ReactNode
}

export const Container = ({children}:MainContainerProps) => {
  return (
    <ContainerStyle>
      {children}
    </ContainerStyle>
  )
}

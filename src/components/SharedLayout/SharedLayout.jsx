import React from 'react'
import { SharedLayoutStyled } from './SharedLayout.styled'

const SharedLayout = ({children}) => {
  return (
      <SharedLayoutStyled>{children}</SharedLayoutStyled>
  )
}

export default SharedLayout
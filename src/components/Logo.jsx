import React from 'react'
import styled from 'styled-components'

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background: ${props => props.theme.colors.secondary};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  font-family: 'Space Grotesk', sans-serif;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 28px;
    height: 28px;
  }
`

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.5px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoIcon>M</LogoIcon>
      <LogoText>mintspace</LogoText>
    </LogoWrapper>
  )
}

import React from 'react'
import styled from 'styled-components'
import { Button } from './common/Button'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  color: white;
  text-align: center;
  padding: 5rem 2rem 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 4rem 1.5rem 2rem;
  }
`

const Content = styled.div`
  max-width: 800px;
  width: 100%;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.25rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.875rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.75rem;
  }
`

const StyledButton = styled(Button)`
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    padding: 0.875rem;
  }
`

export const Hero = () => {
  return (
    <HeroSection>
      <Content>
        <Title>Own, Rent, or Sell Real Estate as NFTs. No Middlemen. Secure. Transparent.</Title>
        <Subtitle>Mintspace bridges traditional real estate with Web3. Powered by blockchain, smart contracts, and the $PRDGM token.</Subtitle>
        <ButtonGroup>
          <StyledButton primary>Explore Properties</StyledButton>
          <StyledButton>Join Waitlist</StyledButton>
        </ButtonGroup>
      </Content>
    </HeroSection>
  )
}

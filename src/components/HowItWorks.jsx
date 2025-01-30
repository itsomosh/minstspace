import React from 'react'
import styled from 'styled-components'
import { FaSearch, FaHandshake, FaCoins } from 'react-icons/fa'

const Section = styled.section`
  padding: 6rem 2rem;
  background: #f5f5f5;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h2`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 4rem;
  font-weight: bold;
`

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`

const Step = styled.div`
  flex: 1;
  text-align: center;
  position: relative;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
  
  &:not(:last-child)::after {
    content: '→';
    position: absolute;
    top: 50%;
    right: -2rem;
    font-size: 2rem;
    color: ${props => props.theme.colors.primary};
    transform: translateY(-50%);
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      content: '↓';
      top: auto;
      bottom: -2rem;
      right: 50%;
      transform: translateX(50%);
    }
  }
`

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  svg {
    font-size: 2rem;
    color: ${props => props.theme.colors.secondary};
  }
`

const StepNumber = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 0.5rem;
  display: block;
`

const StepTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`

const StepDescription = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  line-height: 1.6;
`

export const HowItWorks = () => {
  return (
    <Section>
      <Title>How It Works</Title>
      <StepsContainer>
        <Step>
          <IconWrapper>
            <FaSearch />
          </IconWrapper>
          <StepNumber>STEP 1</StepNumber>
          <StepTitle>Browse & List</StepTitle>
          <StepDescription>
            Browse properties or list your asset on our marketplace with just a few clicks.
          </StepDescription>
        </Step>
        
        <Step>
          <IconWrapper>
            <FaHandshake />
          </IconWrapper>
          <StepNumber>STEP 2</StepNumber>
          <StepTitle>Secure Transaction</StepTitle>
          <StepDescription>
            Complete secure transactions via NFTs and $PRDGM tokens with smart contracts.
          </StepDescription>
        </Step>
        
        <Step>
          <IconWrapper>
            <FaCoins />
          </IconWrapper>
          <StepNumber>STEP 3</StepNumber>
          <StepTitle>Earn & Own</StepTitle>
          <StepDescription>
            Own, rent, or earn rewards seamlessly through our blockchain platform.
          </StepDescription>
        </Step>
      </StepsContainer>
    </Section>
  )
}

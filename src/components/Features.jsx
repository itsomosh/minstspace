import React from 'react'
import styled from 'styled-components'
import { FaHome, FaExchangeAlt, FaBolt } from 'react-icons/fa'

const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background: ${props => props.theme.colors.background};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const Feature = styled.div`
  text-align: center;
  padding: 2rem;
  
  svg {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
  }
`

const Title = styled.h3`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`

export const Features = () => {
  return (
    <FeaturesSection>
      <Grid>
        <Feature>
          <FaHome />
          <Title>Mintspace Rentals</Title>
          <p>Rent properties globally using NFTs.</p>
        </Feature>
        <Feature>
          <FaExchangeAlt />
          <Title>Bazaar</Title>
          <p>Buy, sell, or trade fractional real estate assets.</p>
        </Feature>
        <Feature>
          <FaBolt />
          <Title>Built on Solana</Title>
          <p>Fast, low-cost transactions with smart contracts.</p>
        </Feature>
      </Grid>
    </FeaturesSection>
  )
}

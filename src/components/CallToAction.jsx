import React from 'react'
import styled from 'styled-components'
import { Button } from './common/Button'

const Section = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  color: white;
  text-align: center;
`

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`

const CTAButton = styled(Button)`
  font-size: 1.2rem;
  padding: 1rem 2rem;
`

export const CallToAction = () => {
  return (
    <Section>
      <Title>Start Your Real Estate Journey Today</Title>
      <CTAButton primary>Explore Marketplace</CTAButton>
    </Section>
  )
}

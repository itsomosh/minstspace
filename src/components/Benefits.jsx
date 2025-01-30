import React from 'react'
import styled from 'styled-components'
import { FaMoneyBillWave, FaGlobeAmericas, FaShieldAlt } from 'react-icons/fa'

const Section = styled.section`
  padding: 6rem 2rem;
  background: white;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h2`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 4rem;
`

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`

const Benefit = styled.div`
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`

const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1.5rem;
`

const BenefitTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`

export const Benefits = () => {
  return (
    <Section>
      <Container>
        <Title>Why Choose Mintspace</Title>
        <BenefitsGrid>
          <Benefit>
            <IconWrapper>
              <FaMoneyBillWave />
            </IconWrapper>
            <BenefitTitle>No Middlemen</BenefitTitle>
            <p>Eliminate brokers and fees with direct peer-to-peer transactions.</p>
          </Benefit>
          <Benefit>
            <IconWrapper>
              <FaGlobeAmericas />
            </IconWrapper>
            <BenefitTitle>Global Access</BenefitTitle>
            <p>Access real estate investments from anywhere in the world.</p>
          </Benefit>
          <Benefit>
            <IconWrapper>
              <FaShieldAlt />
            </IconWrapper>
            <BenefitTitle>Secure & Transparent</BenefitTitle>
            <p>Fraud-proof ownership records secured on the blockchain.</p>
          </Benefit>
        </BenefitsGrid>
      </Container>
    </Section>
  )
}

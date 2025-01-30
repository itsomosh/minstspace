import React from 'react'
import styled from 'styled-components'
import { FaTwitter, FaDiscord, FaTelegram, FaGithub } from 'react-icons/fa'

const FooterWrapper = styled.footer`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 4rem 2rem 2rem;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
`

const Column = styled.div`
  h3 {
    color: ${props => props.theme.colors.secondary};
    margin-bottom: 1.5rem;
  }
`

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 0.8rem;
    
    a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: ${props => props.theme.colors.secondary};
      }
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
`

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Column>
          <h3>Company</h3>
          <LinkList>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </LinkList>
        </Column>
        
        <Column>
          <h3>Resources</h3>
          <LinkList>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Documentation</a></li>
          </LinkList>
        </Column>
        
        <Column>
          <h3>Support</h3>
          <LinkList>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms of Service</a></li>
          </LinkList>
        </Column>
        
        <Column>
          <h3>Connect</h3>
          <SocialLinks>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaDiscord /></a>
            <a href="#"><FaTelegram /></a>
            <a href="#"><FaGithub /></a>
          </SocialLinks>
        </Column>
      </Container>
      
      <Copyright>
        © {new Date().getFullYear()} Mintspace. All rights reserved.
      </Copyright>
    </FooterWrapper>
  )
}

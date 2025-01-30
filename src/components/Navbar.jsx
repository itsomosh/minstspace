import React, { useState } from 'react'
import styled from 'styled-components'
import { Logo } from './Logo'
import { FaBars, FaTimes } from 'react-icons/fa'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 1rem;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: ${props => props.theme.colors.primary};
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.1rem;
  }
`

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Nav>
      <Logo />
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>
      <NavLinks isOpen={isOpen}>
        <NavLink href="#features" onClick={() => setIsOpen(false)}>Features</NavLink>
        <NavLink href="#how-it-works" onClick={() => setIsOpen(false)}>How It Works</NavLink>
        <NavLink href="#benefits" onClick={() => setIsOpen(false)}>Benefits</NavLink>
      </NavLinks>
    </Nav>
  )
}

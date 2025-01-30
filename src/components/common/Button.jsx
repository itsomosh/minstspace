import styled from 'styled-components'

export const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  ${props => props.primary ? `
    background: ${props.theme.colors.secondary};
    color: ${props.theme.colors.primary};
    
    &:hover {
      background: ${props.theme.colors.primary};
      color: ${props.theme.colors.secondary};
    }
  ` : `
    background: transparent;
    color: white;
    border: 2px solid white;
    
    &:hover {
      background: white;
      color: ${props.theme.colors.primary};
    }
  `}
`

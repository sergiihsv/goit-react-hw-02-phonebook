import styled from 'styled-components';

export const AddButton = styled.button`
  border-radius: 2px;
  background-color: ${props => props.theme.colors.buttonBg};
  color: ${props => props.theme.colors.buttonText};
  box-shadow: -1px -1px 5px ${props => props.theme.colors.white},
    5px 5px 10px ${props => props.theme.colors.colorShadow};
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: -2px -2px 5px ${props => props.theme.colors.white},
      2px 2px 5px ${props => props.theme.colors.colorShadow};
  }
  &:active {
    background-color: ${props => props.theme.colors.grey};
    color: ${props => props.theme.colors.white};
    box-shadow: inset 1px 1px 2px ${props => props.theme.colors.white},
      inset -1px -1px 2px ${props => props.theme.colors.colorShadow};
  }
`;

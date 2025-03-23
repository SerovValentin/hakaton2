import styled from 'styled-components';

const hexToRgba = (hex, opacity) => {
  if (!hex) return '';
  let r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const StyledButton = styled.button`
  border: none;
  border-radius: ${({ $border }) => `${$border}px`};
  background-color: ${({ color }) => color};
  font-size: 14px;
  font-weight: 600;
  color: #314158;
  cursor: pointer;
  padding: 5px 10px;
  height: 30px;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${({ color }) => (color ? hexToRgba(color, 0.7) : null)};
    text-shadow: 1px 1px 5px black;
  }

  &:active {
    background-color: ${({ color }) => (color ? hexToRgba(color, 0.25) : null)};
  }
`;

export const Button = ({ color, border, children, onClick, props }) => {
  return (
    <StyledButton color={color} $border={border} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const StyledClearButton = styled(Button)`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 787px){
    flex-grow: 1;
  }
`;

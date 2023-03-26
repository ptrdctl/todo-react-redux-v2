import styled from 'styled-components';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const StyledFilter = styled(ButtonGroup)`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 787px){
    flex-grow: 1;
  }
`;

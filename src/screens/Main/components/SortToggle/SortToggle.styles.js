import styled from 'styled-components';
import ToggleButton from 'react-bootstrap/ToggleButton';

export const StyledToggleButton = styled(ToggleButton)`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 787px){
    flex-grow: 1;
  }
`;

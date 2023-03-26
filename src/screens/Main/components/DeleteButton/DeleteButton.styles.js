import styled from 'styled-components';
import CloseButton from 'react-bootstrap/CloseButton';

export const StyledDeleteButton = styled(CloseButton)`
  padding: 2px;
  font-size: 80%;
  @media (max-width: 787px){
    font-size: 65%;
  }
`;

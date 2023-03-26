import styled from 'styled-components';
import InputGroup from 'react-bootstrap/InputGroup';

export const StyledControl = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 0 10px;
  gap: 8px;
`;

export const StyledInput = styled(InputGroup)`
  min-width: 300px;
  flex: 1;
`;

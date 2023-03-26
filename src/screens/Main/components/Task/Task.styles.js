import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

export const StyledTask = styled(ListGroup.Item)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 8px;
  gap: 8px;
  @media (max-width: 787px){
    padding: 6px;
    gap: 6px;
  }
  color: ${(props) => (props?.completed && props.filter === 'showAll' ? 'gray' : 'black')};
  text-decoration-line: ${(props) => (props.completed && props.filter === 'showAll' ? 'line-through' : 'none')};
  &:hover {
    background-color: rgba(0,0,0,0.03);
  }
  
`;

export const StyledText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-wrap: anywhere;
  flex: 1;
`;

export const StyledCheckbox = styled(Form.Check)`
  padding: 2px;
  font-size: 90%;
  @media (max-width: 787px){
    font-size: 75%;
  }
`;

export const StyledDate = styled.div`
  color: #757575;
  font-size: 90%;
  @media (max-width: 787px){
    font-size: 80%;
  }
`;

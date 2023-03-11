import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

export const StyledTask = styled(ListGroup.Item)`
  font-family: "Droid Serif",serif;
  color: ${(props) => (props.completed && props.filter === 'showAll' ? 'gray' : 'black')};
  text-decoration-line: ${(props) => (props.completed && props.filter === 'showAll' ? 'line-through' : 'none')};
  &:hover {
    background-color: rgba(0,0,0,0.03);
  }
`;

export const StyledText = styled.span`
  overflow-wrap: anywhere;
`;

export const StyledRow = styled(Row)`
  display: flex;
  align-items: center;
`;

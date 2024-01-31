import ListGroup from 'react-bootstrap/ListGroup';

function HorizontalExample() {
  return (
    <ListGroup horizontal className='doarHome'>
      <ListGroup.Item>R$10</ListGroup.Item>
      <ListGroup.Item>R$30</ListGroup.Item>
      <ListGroup.Item>R$50</ListGroup.Item>
      <ListGroup.Item>Outro valor</ListGroup.Item>
    </ListGroup>
  );
}

export default HorizontalExample;
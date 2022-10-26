import React from 'react'


import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';


export default function Item(props) {
  const {
    img,
    author,
    price,
  } = props;

  return (
    <Col>
    <Card style={{ width: '15rem' }}  >
      <Card.Img variant="top" src={img} width={238} height={360} />
      <Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Author: {author}</ListGroup.Item>
            <ListGroup.Item>Price: {price}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
    </Col>
  )
}


/* 

<Card.Title>{item.title}</Card.Title>
*/
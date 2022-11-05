import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function ItemDetail({item}) {
    
    const [showProceedToCheckoutBtn, setShowProceedToCheckoutBtn] = useState (false);

    const {addToCart} = useContext(CartContext); 

    const {
      id,  
      img,  
      title,
      summary,
      author,
      price,
      stock,
    } = item;
   

    const onAdd = (count, id) => {
            console.log(`Agregaste ${count} unidades del producto ID N° ${id}`);
            setShowProceedToCheckoutBtn(true);
            addToCart(item, count);
    }


    

    return (
        <Container className='mt-5' >
            <Row>
                    <Col md="auto"><Card.Img variant="top" src={img} style={{ width: '20rem'}}/></Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text style={{ textAlign: 'justify'}}>{summary}</Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='p-0 mb-4'>Author: {author}</ListGroup.Item>
                                <ListGroup.Item className='p-0 mb-4'>Price: {price}</ListGroup.Item>
                            </ListGroup>
                            {showProceedToCheckoutBtn ? 
                                <Button as={Link} variant="primary" to={`/cart/${id}`}>Proceed to checkout</Button> :
                                <ItemCount initial={0} id={id} stock={stock} onAdd={onAdd}/>
                            }
                        </Card.Body>
                    </Col>
                
            </Row>
        </Container>
    
    )
}

/**
 * 

 */
import example_img from '../test/286x180.png'
import { Card, Button, Collapse, ListGroup, ListGroupItem } from "react-bootstrap";
import { useState } from 'react';

function PinCard(props) {

    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={example_img}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle>{props.office} - {props.year}</Card.Subtitle>
            </Card.Body>
            {/* Currently only displaying high-level meta data
            <Button onClick={() => setOpen(!open)}>More Info</Button>
            <Collapse in={open}>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
            </Collapse>
            */}
        </Card>
    );
  }
  export default PinCard;
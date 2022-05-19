import example_img from '../test/286x180.png'
import { Card, Button, Collapse, ListGroup, ListGroupItem } from "react-bootstrap";
import { useState, useEffect } from 'react';

function PinCard(props) {

    function prepCanorgNames(canorgs){

        let canorgNameList = [];

        canorgs.map(canorg =>{
            canorgNameList.push(canorg.canorg_name);
        })
        return canorgNameList;
    }

    function prepOffices(offices){

        let officeList = [];
        offices.map(office =>{
            officeList.push(office.office_name);
        })
        return officeList;
    }

    function prepYear(date){
        if(date){
            const year = date.substr(0,4);
            return year;
        }
        return "";
    }

    return (
        
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={example_img}/>
            <Card.Body>
                <Card.Title>{}</Card.Title>
                    {prepCanorgNames(props.name).map(name => <Card.Title>{name}</Card.Title> )}
                    {prepOffices(props.office).map(office => <Card.Subtitle>{office} - {prepYear(props.year)}</Card.Subtitle> )}
            </Card.Body>
        </Card>
    );
  }
  export default PinCard;
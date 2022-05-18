import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { getAllPins } from "../services/pindexService";
import PinCard from "./pincard";

function PindexAlbum(){
  
  const [pins, setPins] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAllPins()
    .then(items => {
      if(mounted){
        setPins(items)
      }
    })
    return () => mounted = false;
  })

  return (
    <div className="py-5 bg-light">
        <Container>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {pins.map(item => <PinCard name={item.candidate_name} office={item.office} year={2022}/>)}
            </Row>
        </Container>
    </div>
  );
}

export default PindexAlbum;
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import PinCard from "./pincard";

function PindexAlbum(){

  const [pins, setPins] = useState([]);
  const [queryParams, setQueryParams] = useState({});

  const getPins = async(queryParams) => {

    const response = await fetch('http://127.0.0.1:8000/pindex/pins/' + new URLSearchParams(queryParams));    
    const data = await response.json();

    setPins(data)
  }

  useEffect(() => {
    getPins(queryParams)
  }, [])



  return (
    
    <div className="py-5 bg-light">
        <Container>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {console.log(pins)}
              {pins.map(item => <PinCard name={item.canorgs} office={item.offices} year={item.election_date}/>)}
            </Row>
        </Container>
    </div>
  );
}

export default PindexAlbum;
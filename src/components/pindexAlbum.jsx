import { Container, Row } from "react-bootstrap";

function PindexAlbum(pins) {

    const PinCard = (pin, index) => {
        return(
            <PinCard name={pin.name} office={pin.office} year={pin.year}/>
        )
    }

    const pinTable = pins.map((pin, index) => PinCard(pin, index))


    return (
      <div className="py-5 bg-light">
          <Container>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {pinTable}
              </Row>
          </Container>
      </div>
    );
  }
  
  export default PindexAlbum;
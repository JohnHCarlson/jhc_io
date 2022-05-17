import { Row, Col, Button } from "react-bootstrap";

function PindexCenterContainer() {
    return (
      <section className="py-5 text-center">
          <Row className="py-lg-5">
            <Col className="lg-6 md-8 mx-auto">
                <h1 className="fw-light">Album Example</h1>
                <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                <div>
                    <Button className="btn-primary my-2">Submit Pins</Button>
                </div>
            </Col>
          </Row>
      </section>
    );
  }
  
  export default PindexCenterContainer;
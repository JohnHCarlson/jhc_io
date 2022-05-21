import { useState } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";
import PindexModalSubmit from "./pindexModalSubmit";

function PindexCenterContainer() {

  const [showSubmit, setShowSubmit] = useState(false);

  const handleClose = () => setShowSubmit(false);
  const handleShow = () => setShowSubmit(true);

  return (
    <section className="py-5 text-center">
        <Row className="py-lg-5">
          <Col className="lg-6 md-8 mx-auto">
              <h1 className="fw-light">Album Example</h1>
              <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
              <div className="">
                  <Button className="btn-primary my-2" onClick={handleShow}>Submit Pins</Button>
                  <Button className="btn-primary my-2">Search</Button>
              </div>
          </Col>
        </Row>
        <PindexModalSubmit show={showSubmit} onHide={handleClose}/>
    </section>
  );
}
  
export default PindexCenterContainer;
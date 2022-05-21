import { Container, Form, Modal, Row, Col, Button, InputGroup, FormControl, FormSelect, FormText, FormLabel, Option} from "react-bootstrap";
import { useState } from "react";

function PindexModalSubmit(props){

    return(
        <div>
            <Modal size="lg" show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Pin Submission</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form>
                            <Row className="mb-3">
                                <InputGroup className="mb-3">
                                    <FormControl placeholder="Candidate / Organization"/>
                                    <FormControl placeholder="Office"/>
                                    <Button>+</Button>
                                </InputGroup>
                            </Row>
                            <Row className="mb-3">
                                <InputGroup className="mb-3">

                                    <Col>
                                        <FormLabel>State</FormLabel>
                                        <FormSelect>
                                            <option>State</option>
                                        </FormSelect>
                                    </Col>
                                    <Col>
                                        <FormLabel>Election Type</FormLabel>
                                        <FormSelect>
                                            <option>Eleciton Type</option>
                                        </FormSelect>
                                    </Col>
                                    <Col>
                                        <FormLabel>Stance</FormLabel>
                                        <FormSelect>
                                            <option>Stance</option>
                                        </FormSelect>
                                    </Col>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Col>
                                        
                                    </Col>
                                </InputGroup>
                            </Row>
                        </Form>
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    );
}   

export default PindexModalSubmit;
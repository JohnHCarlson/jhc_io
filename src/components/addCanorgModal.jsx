import { Col, Container, Modal, ModalBody, ModalHeader, ModalTitle, Form, FormLabel, FormControl, InputGroup, Button} from "react-bootstrap";
import { useState } from "react";
import StateSelection from "./stateSelection";
import PartySelection from "./partySelection";

function AddCanorgModal(props){

    const [enteredCanorg, setCanorg] = useState(props.fillValue[0]);
    const [enteredState, setState] = useState("");
    const [enteredParty, setParty] = useState("");

    const canorgChangedHandler = (event) =>{
        setCanorg(event.target.value);
    }

    const stateChangedHandler = (event) => {
        setState(event.target.value);
    }

    const partyChangedHandler = (event) => {
        setParty(event.target.value);
    }

    const prepareCanorgData = () => {
        const canorgData = {
            canorg_name: enteredCanorg,
            canorg_state: enteredState,
            canorg_party: enteredParty
        }
        return canorgData;
    }

    async function postData(postData){

        fetch("http://localhost:8000/pindex/canorg/", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(console.error);
    }

    const submitCanorg = (event) => {
        event.preventDefault();

        const canorgData = prepareCanorgData();
        postData(canorgData);
        props.onHide();
    }

    return(
        <div>
            <Modal size="lg" show={props.show} onHide={props.onHide}>
                <ModalHeader>
                    <ModalTitle>Submit New Candidate / Organization</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Container>
                        <Form className="tag-form" onSubmit={submitCanorg}>
                            <InputGroup>
                                <Col>
                                    <FormLabel>Candidate / Organization Name</FormLabel>
                                    <FormControl className="canorg-input" value={enteredCanorg} onChange={canorgChangedHandler} placeHolder="Tag Name"></FormControl>
                                </Col>
                            </InputGroup>
                            <InputGroup>
                                <Col>
                                    <StateSelection value={enteredState} onChange={stateChangedHandler}/>
                                </Col>
                                <Col>
                                    <PartySelection value={enteredParty} onChange={partyChangedHandler}/>
                                </Col>
                            </InputGroup>
                            <Col>
                                <Button className="submit-button" variant="primary" type="submit">Submit</Button>
                                <Button className="clear-button" variant="secondary" type="reset">Clear</Button>
                            </Col>
                        </Form>
                    </Container>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default AddCanorgModal;
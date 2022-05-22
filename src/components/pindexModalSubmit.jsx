import { Container, Form, Modal, Row, Col, Button, InputGroup, FormControl, FormSelect, FormLabel} from "react-bootstrap";
import { useState } from "react";
import StateSelection from "./stateSelection";
import ElectionTypeSelection from "./electionTypeSelection";
import StanceSelection from "./stanceSelection";

function PindexModalSubmit(props){

    const [enteredCanorg, setCanorg] = useState("");
    const [enteredOffice, setOffice] = useState("");
    const [enteredState, setState] = useState("");
    const [enteredElectionType, setElectionType] = useState("");
    const [enteredStance, setStance] = useState("");
    const [enteredImage, setImage] = useState("");
    const [enteredTags, setTags] = useState("");
    const [enteredMonth, setMonth] = useState("");
    const [enteredDate, setDate] = useState("");
    const [enteredYear, setYear] = useState("");
    const [enteredNotes, setNotes] = useState("");

    const canorgChangedHandler = (event) => {
        setCanorg(event.target.value);
    }

    const officeChangedHandler = (event) => {
        setOffice(event.target.value);
    }

    const stateChangedHandler = (event) => {
        setState(event.target.value);
    }

    const electionTypeChangedHandler = (event) => {
        setElectionType(event.target.value);
    }

    const stanceChangedHandler = (event) => {
        setStance(event.target.value);
    }

    const imageChangedHandler = (event) => {
        setImage(event.target.value);
    }

    const tagsChangedHandler = (event) => {
        setTags(event.target.value);
    }

    const monthChangedHandler = (event) => {
        setMonth(event.target.value);
    }

    const dateChangedHandler = (event) => {
        setDate(event.target.value);
    }

    const yearChangedHandler = (event) => {
        setYear(event.target.value);
    }

    const notesChangedHandler = (event) => {
        setNotes(event.target.value);
    }

    const prepareCanorgs = (canorgs) => {
        return [canorgs];
    }

    const prepareOffices = (offices) => {
        return [offices];
    }

    const prepareDate = (day, month, year) => {

        const date = `${year}-${month}-${day}`;
        return date;
    }

    const prepareTags = (tags) => {
        return tags.split(" ");
    }

    const preparePinData = () => {
        const pinData = {
            canorgs: prepareCanorgs(enteredCanorg),
            offices: prepareOffices(enteredOffice),
            pin_state: enteredState,
            election_type: enteredElectionType,
            stance: enteredStance,
            //pin_image: enteredImage,
            election_date: prepareDate(enteredDate, enteredMonth, enteredYear),
            notes: enteredNotes,
            tags: prepareTags(enteredTags)
        };
        return pinData;
    }

    async function postData(pinData){
        
        const response = await fetch("http://localhost:8000/pindex/pins/", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(pinData),
        });
        const data = await response.json();
        console.log(data);
        
    } 


    const submitPin = (event) => {
        event.preventDefault();

        const pinData = preparePinData();
        postData(pinData);
    }

    return(
        <div>
            <Modal size="lg" show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Pin Submission</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form className="pin-form" onSubmit={submitPin}>
                            <Row className="mb-3">
                                <InputGroup className="mb-3">
                                    <Col>
                                        <FormLabel>Candidate / Organization</FormLabel>
                                        <FormControl className="canorg-input" value={enteredCanorg} onChange={canorgChangedHandler} placeholder="Candidate / Organization"/>
                                    </Col>
                                    <Col>
                                        <FormLabel>Office</FormLabel>
                                        <FormControl className="office-input" value={enteredOffice} onChange={officeChangedHandler} placeholder="Office"/>
                                    </Col>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Col>
                                        <StateSelection value={enteredState} onChange={stateChangedHandler}/>
                                    </Col>
                                    <Col>
                                        <ElectionTypeSelection value={enteredElectionType} onChange={electionTypeChangedHandler}/>
                                    </Col>
                                    <Col>
                                        <StanceSelection value={enteredStance} onChange={stanceChangedHandler}/>
                                    </Col>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Col>
                                        <FormLabel>Pin Image</FormLabel>
                                        <FormControl className="image-input"  value={enteredImage} onChange={imageChangedHandler} type="file"></FormControl>
                                    </Col>
                                    <Col>
                                        <FormLabel>Tags (space delimited)</FormLabel>
                                        <FormControl className="tags-input" value={enteredTags} onChange={tagsChangedHandler} placeholder="Tags"></FormControl>
                                    </Col>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Col>
                                        <FormLabel>Election Month</FormLabel>
                                        <FormControl className="month-input" value={enteredMonth} onChange={monthChangedHandler} placeholder="Month"></FormControl>
                                    </Col>
                                    <Col>
                                        <FormLabel>Election Day</FormLabel>
                                        <FormControl className="date-input" value={enteredDate} onChange={dateChangedHandler} placeholder="Day"></FormControl>
                                    </Col>
                                    <Col>
                                        <FormLabel>Election Year</FormLabel>
                                        <FormControl className="year-input" value={enteredYear} onChange={yearChangedHandler} placeholder="Year"></FormControl>
                                    </Col>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Col>
                                        <FormLabel>Notes</FormLabel>
                                        <FormControl className="notes-input" value={enteredNotes} onChange={notesChangedHandler} placeholder="Notes" as="textarea" style={{height: '10rem'}}></FormControl>
                                    </Col>
                                </InputGroup>
                                <Col>
                                    <Button className="submit-button" variant="primary" type="submit">Submit</Button>
                                    <Button className="clear-button" variant="secondary" type="reset">Clear</Button>
                                </Col>

                            </Row>
                        </Form>
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    );
}   

export default PindexModalSubmit;
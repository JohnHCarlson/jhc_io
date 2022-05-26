import { Container, Form, Modal, Row, Col, Button, InputGroup, FormControl, FormSelect, FormLabel} from "react-bootstrap";
import { useState } from "react";
import StateSelection from "./stateSelection";
import ElectionTypeSelection from "./electionTypeSelection";
import StanceSelection from "./stanceSelection";
import CanorgOfficeSelection from "./canorgOfficeselection";
import AddCanorgModal from "./addCanorgModal";
import AddOfficeModal from "./addOfficeModal";
import AddTagModal from "./addTagModal";

function PindexModalSubmit(props){

    const [enteredCanorgs, setCanorgs] = useState([]);
    const [enteredOffices, setOffices] = useState([]);
    const [enteredState, setState] = useState("");
    const [enteredElectionType, setElectionType] = useState("");
    const [enteredStance, setStance] = useState("");
    const [enteredImage, setImage] = useState("");
    const [enteredTags, setTags] = useState("");
    const [enteredMonth, setMonth] = useState("");
    const [enteredDate, setDate] = useState("");
    const [enteredYear, setYear] = useState("");
    const [enteredNotes, setNotes] = useState("");
    
    const [showAddCanorg, setShowAddCanorg] = useState(false);
    const handleCloseAddCanorg = () => setShowAddCanorg(false);
    const handleShowAddCanorg = () => setShowAddCanorg(true);

    const [showAddOffice, setShowAddOffice] = useState(false);
    const handleCloseAddOffice = () => setShowAddOffice(false);
    const handleShowAddOffice = () => setShowAddOffice(true);

    const [showAddTag, setShowAddTag] = useState(false);
    const handleCloseAddTag = () => setShowAddTag(false);
    const handleShowAddTag = () => setShowAddTag(true);

    const canorgsChangedHandler = (event) => {
        setCanorgs(event);
    }

    const officesChangedHandler = (event) => {
        setOffices(event);
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
        return canorgs;
    }

    const prepareOffices = (offices) => {
        return offices;
    }

    const prepareDate = (day, month, year) => {

        const date = `${year}-${month}-${day}`;
        return date;
    }

    const prepareTags = (tags) => {

        if(tags === ""){
            return [];
        }
        return tags.split(',');
    }

    const preparePinData = () => {
        console.log(prepareTags(enteredTags));
        const pinData = {
            canorgs: prepareCanorgs(enteredCanorgs),
            offices: prepareOffices(enteredOffices),
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

        fetch("http://localhost:8000/pindex/pins/", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(pinData),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.canorgs && data.canorgs[0].includes("Object with canorg_name=")){
                handleShowAddCanorg();
            }
            else if(data.offices && data.offices[0].includes("Object with office_name=")){
                handleShowAddOffice();
            }
            else if(data.tags && data.tags[0].includes("Object with tag_name=")){
                handleShowAddTag();
            }
        })
        .catch(console.error);
    } 

    const submitPin = (event) => {
        event.preventDefault();

        const pinData = preparePinData();
        const response = postData(pinData);
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
                                    <CanorgOfficeSelection canorgsOnChange={canorgsChangedHandler} officesOnChange={officesChangedHandler}/>
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
                    <AddCanorgModal show={showAddCanorg} onHide={handleCloseAddCanorg} fillValue={enteredCanorgs}/>
                    <AddOfficeModal show={showAddOffice} onHide={handleCloseAddOffice} fillValue={enteredOffices}/>
                    <AddTagModal show={showAddTag} onHide={handleCloseAddTag}  fillValue={enteredTags}/>
                </Modal.Body>
            </Modal>
        </div>
    );
}   

export default PindexModalSubmit;
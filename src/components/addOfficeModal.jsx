import { Modal, ModalHeader, ModalTitle, Col, Container, Form, InputGroup, Button, FormLabel, FormControl, ModalBody } from "react-bootstrap";
import { useState } from "react";
function AddOfficeModal(props){

    const [enteredOffice, setOffice] = useState("");

    const officeChangedHandler = (event) =>{
        setOffice(event.target.value);
    }

    const prepareOfficeData = () => {
        const officeData = {
            office_name: enteredOffice
        }
        return officeData;
    }

    async function postData(officeData){
        fetch("http://localhost:8000/pindex/office/", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(officeData),
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(console.error);
    }

    const submitOffice = (event) => {
        event.preventDefault();

        const officeData = prepareOfficeData();
        postData(officeData);
        props.onHide();
    }

    return(
        <div>
            <Modal size="lg" show={props.show} onHide={props.onHide}>
                <ModalHeader>
                    <ModalTitle>Submit New Office</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Container>
                        <Form className="office-form" onSubmit={submitOffice}>
                            <InputGroup>
                                <Col>
                                    <FormLabel>Office Name</FormLabel>
                                    <FormControl className="office-input" value={enteredOffice} onChange={officeChangedHandler} placeHolder="Office Name"></FormControl>
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

export default AddOfficeModal;
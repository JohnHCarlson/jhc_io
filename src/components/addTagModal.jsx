import { Col, Container, Modal, ModalBody, ModalHeader, ModalTitle, Form, FormLabel, FormControl, InputGroup, Button} from "react-bootstrap";
import { useState } from "react";

function AddTagModal(props){

    const [enteredTag, setTag] = useState(props.fillValue[0]);

    const tagChangedHandler = (event) => {
        setTag(event.target.value);
    }

    const prepareTagData = () => {
        const tagData = {
            tag_name: enteredTag
        }
        return tagData;
    }

    async function postData(tagData){

        fetch("http://localhost:8000/pindex/tags/", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tagData),
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(console.error);
    }

    const submitTag = (event) => {
        event.preventDefault();

        const tagData = prepareTagData();
        postData(tagData);
        props.onHide();
    }

    return(
        <div>
            <Modal size="lg" show={props.show} onHide={props.onHide}>
                <ModalHeader>
                    <ModalTitle>Submit New Tag</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Container>
                        <Form className="tag-form" onSubmit={submitTag}>
                            <InputGroup>
                                <Col>
                                    <FormLabel>Tag Name</FormLabel>
                                    <FormControl className="tag-input" value={enteredTag} onChange={tagChangedHandler} placeHolder="Tag Name"></FormControl>
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

export default AddTagModal;
import { FormLabel, FormControl, Col, Row, Button, InputGroup} from "react-bootstrap";
import { useState } from "react";

function CanorgOfficeSelection(props){

    const [inputFields, setInputFields] = useState([{canorg: "", office: ""}]);

    const handleFormChange = (index, event) => {
        
        const {name, value} = event.target;
        const list = [...inputFields];
        list[index][name] = value;
        setInputFields(list);

        let canorgs = inputFields.map(obj => obj.canorg);
        let offices = inputFields.map(obj => obj.office);

        props.canorgsOnChange(canorgs);
        props.officesOnChange(offices);
    }

    const addFields = () => {
        let newField = {canorg: "", office: ""};
        setInputFields([...inputFields, newField]);
    }
   return (
        <>
            {inputFields.map((input, index) => {
                return (
                    <InputGroup key={index}>
                        <Col>
                            <FormLabel>Candidate / Organization</FormLabel>
                            <FormControl name="canorg" value={input.canorg} onChange={event => handleFormChange(index, event)} placeholder="Candidate / Organization"></FormControl>
                        </Col>
                        <Col>
                            <FormLabel>Office</FormLabel>
                            <FormControl name="office" value={input.office} onChange={event => handleFormChange(index, event)} placeholder="Office"></FormControl>
                        </Col>
                        <div className="align-self-end">
                            <Button onClick={addFields}>+</Button>
                        </div>
                    </InputGroup>
                );
            })}
        </>
   );
}

export default CanorgOfficeSelection;

/*
            <InputGroup>
                <Col>
                    <FormLabel>Candidate / Organization</FormLabel>
                    <FormControl value={props.canorgValue} onChange={event => onFormUpdate(index, event)} placeholder="Candidate / Organization"></FormControl>
                </Col>
                <Col>
                    <FormLabel>Office</FormLabel>
                    <FormControl value={props.officeValue} onChange={event => onFormUpdate(index, event)} placeholder="Office"></FormControl>
                </Col>
                <div className="align-self-end">
                    <Button onClick={onAddButtonClick}>+</Button>
                </div>
            </InputGroup>
*/
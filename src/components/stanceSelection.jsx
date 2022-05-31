import { FormSelect, FormLabel } from "react-bootstrap";

function StanceSelection(props){

    const stances = [
        { label: 'Pro', value: 'PRO' },
        { label: 'Anti', value: 'ANT' },
        { label: 'Other', value: 'OTH' },
    ];

    return(
        <div>
            <FormLabel>Stance</FormLabel>
            <FormSelect className="state-input" value={props.value} onChange={props.onChange}>
                <option>Stance</option>
                {stances.map((stance) => <option value={stance.value}>{stance.label}</option>)}
            </FormSelect>
        </div>
    );
}

export default StanceSelection;
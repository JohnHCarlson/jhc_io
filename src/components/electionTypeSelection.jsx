import { FormSelect, FormLabel } from "react-bootstrap";

function ElectionTypeSelection(props){

    const elections = [
        { label: 'Primary', value: 'PRM' },
        { label: 'General', value: 'GEN' },
        { label: 'Runoff', value: 'RUN' },
        { label: 'Other', value: 'OTH' },
    ];

    return(
        <div>
            <FormLabel>Election Type</FormLabel>
            <FormSelect className="state-input" value={props.value} onChange={props.onChange}>
                <option>Election Type</option>
                {elections.map((election) => <option value={election.value}>{election.label}</option>)}
            </FormSelect>
        </div>
    );
}

export default ElectionTypeSelection;
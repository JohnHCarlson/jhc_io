import { FormSelect, FormLabel } from "react-bootstrap";

function PartySelection(props){

    const parties = [
        { label: 'Democratic', value: 'DEM' },
        { label: 'Republican', value: 'REP' },
        { label: 'Green', value: 'GRN' },
        { label: 'Libertarian', value: 'LIB' },
        { label: 'Working Families Party', value: 'WFP' },
        { label: 'Democratic Farmer Labor', value: 'DFL' },
    ];

    return(
        <div>
            <FormLabel>Party</FormLabel>
            <FormSelect className="party-input" value={props.value} onChange={props.onChange}>
                <option>Stance</option>
                {parties.map((stance) => <option value={stance.value}>{stance.label}</option>)}
            </FormSelect>
        </div>
    );
}

export default PartySelection;
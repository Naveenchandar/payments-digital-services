import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ApplicationsTable } from './table';
import { applicationsData } from "./data";
// import { MuiChip } from 'components/chip';

export const ApplicationAccordionTable = ({ title, children }) => {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <span className='font-bold'>{title}</span>
                </AccordionSummary>
                <AccordionDetails>
                    {children}
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

// const regions = [
//     "UAE", "Egypt", "Qatar", "Bahrain", "Kuwait", "India", "USA", "UK", "HK", "Pak"
// ]

export const ApplicationsStack = () => {
    return (
        <>
            <br />
            <Typography className='font-bold font-15'>Applications - 183</Typography>
            <br />
            {/* <Typography className='font-bold regions'>
                Regions - &ensp;
                {regions?.map(item => <MuiChip label={item} key={item} />)}
            </Typography> */}
            <div className="application-stack-table">
                {/* <ApplicationAccordionTable title={`BC - ${applicationsData?.length}`}> */}
                <ApplicationsTable data={applicationsData} />
                {/* </ApplicationAccordionTable> */}
            </div>
        </>
    )
}
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ApplicationsTable } from './table';
import { bc0Data, bc1Data, bc2Data } from "./data";
// import { MuiChip } from 'components/chip';
import { useState } from 'react';

export const ApplicationAccordionTable = ({ title, children, contentId, titleId, defaultExpand, panelName }) => {
    const [expanded, setExpanded] = useState(defaultExpand);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === panelName} onChange={handleChange(panelName)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={contentId}
                    id={titleId}
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
            <Typography className='font-bold font-15'>Applications - 24</Typography>
            <br />
            {/* <div className='font-bold regions'>
                Regions - &ensp;
                {regions?.map(item => <MuiChip label={item} key={item} />)}
            </div> */}
            <div className="application-stack-table">
                <ApplicationAccordionTable
                    title={`BC0 - ${bc0Data?.length}`}
                    contentId='panel1-content'
                    titleId='panel1-header'
                    defaultExpand="panel1"
                    panelName='panel1'
                >
                    <ApplicationsTable data={bc0Data} />
                </ApplicationAccordionTable>
                <ApplicationAccordionTable
                    title={`BC1 - ${bc1Data?.length}`}
                    contentId='panel2-content'
                    titleId='panel2-header'
                    panelName='panel2'
                >
                    <ApplicationsTable data={bc1Data} />
                </ApplicationAccordionTable>
                <ApplicationAccordionTable title={`BC2 - ${bc2Data?.length}`}
                    contentId='panel3-content'
                    titleId='panel3-header'
                    panelName='panel3'
                >
                    <ApplicationsTable data={bc2Data} />
                </ApplicationAccordionTable>
            </div>
        </>
    )
}
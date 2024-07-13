import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PaymentIcon from '@mui/icons-material/Payment';
import CallMergeIcon from '@mui/icons-material/CallMerge';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import { ApplicationsStack } from 'pages/teams/payments/applications-stack';
import { ApplicationsStack as OpsApplicationStack } from 'pages/teams/ops-tech/applications-stack';
import { ApplicationsStack as PlatformsApplicationStack } from 'pages/teams/platforms/applications-stack';
import { PaymentUnitDetails } from 'pages/teams/payments/accordion-details';
import { IntegrationsUnitDetails } from 'pages/teams/integrations/accordion-details';
import { OpsTechAccordionDetails } from 'pages/teams/ops-tech/accordion-details';
import { OrganizationChart } from 'pages/teams/payments/org-chart';
import { OrganizationChart as OpsOrgChart } from 'pages/teams/ops-tech/org-chart';
import { OrganizationChart as PlatformsOrgChart } from 'pages/teams/platforms/org-chart';
import { OrganizationChart as IdentityAccessManagementOrgChart } from 'pages/teams/identity-access-management/org-chart';
import { OrganizationChart as EnterpriseArchitectureOrgChart } from 'pages/teams/enterprise-architecture/org-chart';
import { PlatformAccordionDetails } from 'pages/teams/platforms/accordion-details';
import { IdentityAccessManagementAccordionDetails } from 'pages/teams/identity-access-management/accordion-details';
import { EnterpriseArchitectureAccordionDetails } from 'pages/teams/enterprise-architecture/accordion-details';

export function TeamInfoAccordion() {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div id="teams-accordion">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='accordion-type'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    title="Payments"
                >
                    <PaymentIcon /> &ensp;
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Payments
                    </Typography>
                    {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                </AccordionSummary>
                <AccordionDetails>
                    <PaymentUnitDetails />
                </AccordionDetails>
            </Accordion>&ensp;
            {expanded === 'panel1' ?
                <>
                    <ApplicationsStack />
                    <div id="teams-section-org-chart">
                        <OrganizationChart />
                    </div>
                </>
                : null
            }
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='accordion-type'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    title='Integrations'
                >
                    <CallMergeIcon />&ensp;
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Integrations
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <IntegrationsUnitDetails />
                </AccordionDetails>
            </Accordion>&ensp;
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='accordion-type panel3-expanded'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    title='OPS Tech'
                >
                    <DeveloperBoardIcon />&ensp;
                    <Typography sx={{ flexShrink: 0 }}>
                        {/* {expanded === 'panel3' ? "OPS Tech" : "O"} */}
                        OPS Tech
                    </Typography>
                    {/* <Typography sx={{ color: 'text.secondary' }}>
                        Filtering has been entirely disabled for whole web server
                    </Typography> */}
                </AccordionSummary>
                <AccordionDetails>
                    <OpsTechAccordionDetails />
                </AccordionDetails>
            </Accordion>
            {expanded === 'panel3' ?
                <>
                    <OpsApplicationStack />
                    <div id="teams-section-org-chart">
                        <OpsOrgChart />
                    </div>
                </>
                : null
            }&ensp;
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className='accordion-type panel4-expanded'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    title='Platforms'
                >
                    <DeveloperBoardIcon />&ensp;
                    <Typography sx={{ flexShrink: 0 }}>
                        {/* {expanded === 'panel4' ? "Platforms" : "O"} */}
                        Platforms
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <PlatformAccordionDetails />
                </AccordionDetails>
            </Accordion>
            {expanded === 'panel4' ?
                <>
                    <PlatformsApplicationStack />
                    <div id="teams-section-org-chart">
                        <PlatformsOrgChart />
                    </div>
                </>
                : null
            }&ensp;
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className='accordion-type panel5-expanded'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                    title='IAM (Identity Access Management)'
                >
                    <DeveloperBoardIcon />&ensp;
                    <Typography sx={{ flexShrink: 0 }}>
                        {/* {expanded === 'panel4' ? "Platforms" : "O"} */}
                        Identity Access Management
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <IdentityAccessManagementAccordionDetails />
                </AccordionDetails>
            </Accordion>
            {expanded === 'panel5' ?
                <>
                    <PlatformsApplicationStack />
                    <div id="teams-section-org-chart">
                        <IdentityAccessManagementOrgChart />
                    </div>
                </>
                : null
            }&ensp;
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className='accordion-type panel5-expanded'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                    title='EA (Enterprise Architecture)'
                >
                    <DeveloperBoardIcon />&ensp;
                    <Typography sx={{ flexShrink: 0 }}>
                        {/* {expanded === 'panel4' ? "Platforms" : "O"} */}
                        Enterprise Architecture
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <EnterpriseArchitectureAccordionDetails />
                </AccordionDetails>
            </Accordion>
            {expanded === 'panel6' ?
                <>
                    <div id="teams-section-org-chart">
                        <EnterpriseArchitectureOrgChart />
                    </div>
                </>
                : null
            }&ensp;
        </div>
    );
}
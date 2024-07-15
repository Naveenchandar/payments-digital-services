import * as React from 'react';
import { Tabs, Tab, Box, Grid, Typography } from '@mui/material';
import { PaymentUnitDetails } from 'pages/teams/payments/accordion-details';
import { IntegrationsUnitDetails } from 'pages/teams/integrations/accordion-details';
import { OpsTechUnitDetails } from 'pages/teams/ops-tech/accordion-details';
import { IdentityAccessManagementUnitDetails } from 'pages/teams/identity-access-management/accordion-details';
import { EnterpriseArchitectureUnitDetails } from 'pages/teams/enterprise-architecture/accordion-details';
import { PlatformUnitDetails } from 'pages/teams/platforms/accordion-details';
import PaymentIcon from '@mui/icons-material/Payment';
import CallMergeIcon from '@mui/icons-material/CallMerge';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import { ApplicationsStack } from 'pages/teams/payments/applications-stack';
import { ApplicationsStack as OpsApplicationStack } from 'pages/teams/ops-tech/applications-stack';
import { ApplicationsStack as IAMApplicationStack } from 'pages/teams/identity-access-management/applications-stack';
import { ApplicationsStack as PlatformsApplicationStack } from 'pages/teams/platforms/applications-stack';
import { ApplicationsStack as IntegrationsApplicationStack } from 'pages/teams/integrations/applications-stack';
import { OrganizationChart } from 'pages/teams/payments/org-chart';
import { OrganizationChart as IntegrationsOrganizationChart } from 'pages/teams/integrations/org-chart';
import { OrganizationChart as OpsOrgChart } from 'pages/teams/ops-tech/org-chart';
import { OrganizationChart as IdentityAccessManagementOrgChart } from 'pages/teams/identity-access-management/org-chart';
import { OrganizationChart as EnterpriseArchOrgChart } from 'pages/teams/enterprise-architecture/org-chart';
import { OrganizationChart as PlatformsOrgChart } from 'pages/teams/platforms/org-chart';

import { MdPermIdentity } from "react-icons/md";
// import { MdOutlineArchitecture } from "react-icons/md";
import EnterPriseIcon from "images/units/enterprise.png";
import { GiPlatform } from "react-icons/gi";
import { ProductProperties } from './ProductProperties';
import { Underline } from 'components/underline';
import useMediaQuery from '@mui/material/useMediaQuery';

const { TabName, UnitTab } = ProductProperties;

const tabsName = [
    { label: <TabName>Payments</TabName>, Icon: <PaymentIcon className='unit-title-icons' />, },
    { label: <TabName>Platforms</TabName>, Icon: <GiPlatform className="tab-icon unit-title-icons" /> },
    { label: <TabName>Integrations</TabName>, Icon: <CallMergeIcon className="unit-title-icons integration-unit-icon" /> },
    { label: <TabName>OPS Tech</TabName>, Icon: <DeveloperBoardIcon className="unit-title-icons" /> },
    {
        label: <TabName>
            IAM <span className='block'>(Identity Access Management)</span>
        </TabName>, Icon: <MdPermIdentity className="tab-icon unit-title-icons" />
    },
    {
        label: <TabName>EA
            <span className="block">(Enterprise Architecture)</span>
        </TabName>, Icon: <img src={EnterPriseIcon} className="tab-icon enterprise-icon unit-title-icons" alt="enterprise architecture" />
    },
]

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export function Products() {
    const [value, setValue] = React.useState(0);
    const matches = useMediaQuery('(max-width:600px)');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const renderTeamsTitle = (title, width) => {
        return (
            <div>
                <Typography variant="h5" component={'span'} className="fw-bold font-15">{title}</Typography>
                <Underline width={width || "310px"} />
            </div>
        )
    }

    return (
        <Grid container columns={12} id='tabs-grid' className='unit-tabs'>
            <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                <Box sx={{ bgcolor: 'background.paper', display: 'flex', width: "100%" }} className="unit-tabs-tab-parent">
                    <Tabs
                        orientation={matches ? "horizontal" : "vertical"}
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider', minWidth: "250px" }}
                    >
                        {tabsName?.map(({ label, Icon }, index) => {
                            return (
                                <Tab label={label} {...a11yProps(index)} icon={Icon || null} key={index} />
                            )
                        })}
                    </Tabs>
                    {/* payment unit start */}
                    <UnitTab
                        value={value}
                        index={0}
                        basicInformation={<PaymentUnitDetails />}
                        applicationStack={<ApplicationsStack />}
                        orgChart={
                            <div id="teams-section-org-chart">
                                <br />
                                {renderTeamsTitle("Payments Team", "100px")}
                                <br />
                                <OrganizationChart />
                            </div>
                        }
                    />
                    {/* payment unit end */}

                    {/* platforms unit start */}
                    <UnitTab
                        value={value}
                        index={1}
                        basicInformation={<PlatformUnitDetails />}
                        applicationStack={<PlatformsApplicationStack />}
                        orgChart={
                            <div id="teams-section-org-chart">
                                <br />
                                {renderTeamsTitle("Platforms Team", "100px")}
                                <br />
                                <PlatformsOrgChart id="platform-chart" />
                            </div>
                        }
                    />
                    {/* platforms unit end */}

                    {/* integrations unit start */}
                    <UnitTab
                        value={value}
                        index={2}
                        basicInformation={<IntegrationsUnitDetails />}
                        applicationStack={<IntegrationsApplicationStack />}
                        orgChart={
                            <div id="teams-section-org-chart">
                                <br />
                                {renderTeamsTitle("Integrations Team", "140px")}
                                <br />
                                <IntegrationsOrganizationChart />
                            </div>
                        }
                    />
                    {/* integrations unit end */}


                    {/* ops tech unit start */}
                    <UnitTab
                        value={value}
                        index={3}
                        basicInformation={<OpsTechUnitDetails />}
                        applicationStack={<OpsApplicationStack />}
                        orgChart={<div id="teams-section-org-chart ops-tech-org-chart">
                            <br />
                            {renderTeamsTitle("OPS Tech Team", "140px")}
                            <br />
                            <OpsOrgChart id="ops-tech-org-chart" />
                        </div>
                        }
                        className="ops-tech-unit-content"
                    />
                    {/* ops tech unit end */}


                    {/* IAM unit start */}
                    <UnitTab
                        value={value}
                        index={4}
                        basicInformation={<IdentityAccessManagementUnitDetails />}
                        applicationStack={<IAMApplicationStack />}
                        orgChart={<div id="teams-section-org-chart">
                            <br />
                            {renderTeamsTitle("Identity and Access Management Team")}
                            <br />
                            <IdentityAccessManagementOrgChart />
                        </div>
                        }
                    />
                    {/* IAM unit end */}


                    {/* EA unit start */}
                    <UnitTab
                        value={value}
                        index={5}
                        basicInformation={<EnterpriseArchitectureUnitDetails />}
                        orgChart={<div id="teams-section-org-chart">
                            <br />
                            {renderTeamsTitle("Enterprise Architecture Team", "100px")}
                            <br />
                            <EnterpriseArchOrgChart />
                        </div>
                        }
                    />
                    {/* EA unit end */}

                </Box>
            </Grid>
        </Grid >
    );
}
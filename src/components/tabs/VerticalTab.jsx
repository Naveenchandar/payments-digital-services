import * as React from 'react';
import { Tabs, Tab, Typography, Box, Grid, Tooltip } from '@mui/material';
import { PaymentUnitDetails } from 'pages/teams/payments/accordion-details';
import { IntegrationsUnitDetails } from 'pages/teams/integrations/accordion-details';
import { OpsTechUnitDetails } from '../../pages/teams/ops-tech/accordion-details';
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
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { MdPermIdentity } from "react-icons/md";
import { MdOutlineArchitecture } from "react-icons/md";
import { GiPlatform } from "react-icons/gi";

const tabsName = [
    { label: <span className="font-12">Payments</span>, Icon: <PaymentIcon />, },
    { label: <span className="font-12">Platforms</span>, Icon: <GiPlatform className="tab-icon" /> },
    { label: <span className="font-12">Integrations</span>, Icon: <CallMergeIcon /> },
    { label: <span className="font-12">OPS Tech</span>, Icon: <DeveloperBoardIcon /> },
    { label: <span className="font-12">IAM (Identity Access Management)</span>, Icon: <MdPermIdentity className="tab-icon" /> },
    { label: <span className="font-12">EA (Enterprise Architecture)</span>, Icon: <MdOutlineArchitecture className="tab-icon" /> },
]

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, pt: 0 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const scrollToTop = () => {
        window.scrollTo({
            behavior: 'smooth', top: 0
        });
    }

    return (
        <Grid container columns={12} id='tabs-grid'>
            <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                <Box sx={{ bgcolor: 'background.paper', display: 'flex', width: "100%" }}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider', minWidth: "250px" }}
                    >
                        {tabsName?.map(({ label, Icon }, index) => {
                            return (
                                <Tab label={label} {...a11yProps(index)} icon={Icon || null} key={label} />
                            )
                        })}
                    </Tabs>
                    {/* payment unit start */}
                    <TabPanel value={value} index={0}>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <PaymentUnitDetails />
                        </Grid>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <ApplicationsStack />
                        </Grid>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <div id="teams-section-org-chart">
                                <OrganizationChart />
                            </div>
                        </Grid>
                    </TabPanel>
                    {/* payment unit end */}

                    {/* platforms unit start */}
                    <TabPanel value={value} index={1}>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <PlatformUnitDetails />
                        </Grid>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <PlatformsApplicationStack />
                        </Grid>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <div id="teams-section-org-chart">
                                <PlatformsOrgChart />
                            </div>
                        </Grid>
                    </TabPanel>
                    {/* platforms unit end */}

                    {/* integrations unit start */}
                    <TabPanel value={value} index={2}>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <IntegrationsUnitDetails />
                        </Grid>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <IntegrationsApplicationStack />
                        </Grid>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <div id="teams-section-org-chart">
                                <IntegrationsOrganizationChart />
                            </div>
                        </Grid>
                    </TabPanel>
                    {/* integrations unit end */}


                    {/* ops tech unit start */}
                    <TabPanel value={value} index={3}>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <OpsTechUnitDetails />
                        </Grid>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <OpsApplicationStack />
                        </Grid>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <div id="teams-section-org-chart">
                                <OpsOrgChart />
                            </div>
                        </Grid>
                    </TabPanel>
                    {/* ops tech unit end */}


                    {/* IAM unit start */}
                    <TabPanel value={value} index={4}>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <IdentityAccessManagementUnitDetails />
                        </Grid>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <IAMApplicationStack />
                        </Grid>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <div id="teams-section-org-chart">
                                <IdentityAccessManagementOrgChart />
                            </div>
                        </Grid>
                    </TabPanel>
                    {/* IAM unit end */}


                    {/* EA unit start */}
                    <TabPanel value={value} index={5}>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <EnterpriseArchitectureUnitDetails />
                        </Grid>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                            <div id="teams-section-org-chart">
                                <EnterpriseArchOrgChart />
                            </div>
                        </Grid>
                    </TabPanel>
                    {/* EA unit end */}

                </Box>
            </Grid>
            <div>
                <Tooltip title="Scroll to top">
                    <KeyboardArrowUpIcon
                        style={{
                            position: "fixed",
                            bottom: 10,
                            right: 10,
                            display: "block",
                            backgroundColor: "#f49214",
                            borderRadius: "50%",
                            width: "24px",
                            height: "24px",
                            cursor: "pointer"
                        }}
                        onClick={scrollToTop}
                    />
                </Tooltip>
            </div>
        </Grid>
    );
}
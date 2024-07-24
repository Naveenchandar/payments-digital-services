import { Box, Grid, Tabs, Tab, Typography } from "@mui/material";
import { LocalCard } from "components/card";
import { rewardsImages } from "content/rewards-recognitions";
import React from "react";
// import { yearTabs } from "../tabs";
import { LocalSelect } from "components/select";
import "./index.css";
import { QuerterChampionsSlider } from "./quarter-champions";
import useMediaQuery from '@mui/material/useMediaQuery';


const monthsValues = [
    {
        name: "january",
        value: 0,
    },
    {
        name: "february",
        value: 1,
    },
    {
        name: "march",
        value: 2,
    },
    {
        name: "april",
        value: 3,
    },
    {
        name: "may",
        value: 4,
    },
    {
        name: "june",
        value: 5,
    },
    {
        name: "july",
        value: 6,
    },
    {
        name: "august",
        value: 7,
    },
    {
        name: "september",
        value: 8,
    },
    {
        name: "october",
        value: 9,
    },
    {
        name: "november",
        value: 10,
    },
    {
        name: "december",
        value: 11,
    }
]

const options = [
    { label: "January", value: "January", },
    { label: "February", value: "February" },
    { label: "March", value: "March", },
    { label: "April", value: "April", },
    { label: "May", value: "May", },
    { label: "June", value: "June", },
    // { label: "July", value: "July", },
    // { label: "August", value: "August", },
    // { label: "September", value: "September", },
    // { label: "October", value: "October", },
    // { label: "November", value: "November", },
    // { label: "December", value: "December", },
]

const TabName = ({ children }) => {
    return (
        <span className="font-12">
            {children}
        </span>)
}

export const yearTabs = [
    { label: "2024", text: "2024" },
]

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export const TabPanel = (props) => {
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
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export const RewardsAndRecognitions = () => {
    const matches = useMediaQuery('(max-width:600px)');
    // const currentMonth = monthsValues.find(item => item.value === new Date().getMonth() - 1);
    const currentYear = `${new Date().getFullYear()}`;
    // rewardsImages[currentYear][currentMonth] - 1
    const [currentTabValue, setCurrentTabValue] = React.useState("2024");
    const [selectedValue, setSelectedValue] = React.useState('June');
    const [currentTabContent, setCurrentTabContent] = React.useState(rewardsImages?.[currentYear]?.["june"]);

    const handleSelectChange = (event, newValue) => {
        setCurrentTabContent(rewardsImages?.[currentYear]?.[newValue?.toLowerCase()])
        setSelectedValue(newValue);
    };

    const handleChange = (event, newValue) => {
        setCurrentTabValue(newValue);
    };

    const renderCardContent = () => {
        if (currentTabContent) {
            return currentTabContent?.map((item, index) => {
                return (
                    <Box key={item.id}>
                        <LocalCard
                            isEven={index % 2 === 0}
                            {...item}
                        />
                        <br />
                    </Box>
                )
            })
        }
        return null;
    }

    const tabsName = yearTabs.map(item => {
        return {
            ...item, label: <TabName>{item?.label}</TabName>
        }
    })
    
    const mobileYearDropdown = yearTabs.map(item => {
        return {
            ...item, label: item?.label, value: item?.text
        }
    })

    return (
        <Grid container columns={12} className='reward-tabs' id="reward-tabs">
            {/* <Grid item xs={12} lg={1} md={1} sm={12} xl={1}></Grid> */}
            <Grid item xs={12} lg={12} md={12} sm={12} xl={12} mb={10} id="reward-tabs-quarter-champions-grid">
                <QuerterChampionsSlider />
            </Grid>
            <br />
            <br />
            <Grid item xs={12} lg={2} md={2} sm={12} xl={2}></Grid>
            {matches
                ? (
                    <>
                        <Grid item xs={5} md={5} sm={5} className="mobile-select">
                            <LocalSelect
                                handleSelectChange={(e) => handleSelectChange(e, e.target.value)}
                                selectedValue={selectedValue}
                                label="Month"
                                options={options}
                            />
                        </Grid>&nbsp;&nbsp;
                        <Grid item xs={5} md={5} sm={5} className="mobile-select">
                            <LocalSelect
                                handleSelectChange={(e) => handleChange(e, e.target.value)}
                                selectedValue={currentTabValue}
                                label="Year"
                                options={mobileYearDropdown}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} id="reward-tabs-content">
                            {renderCardContent()}
                        </Grid>
                    </>
                )
                : (
                    <>
                        <Grid item xs={12} lg={10} md={10} sm={10} xl={10} className="month-select-grid">
                            <Tabs
                                variant="scrollable"
                                value={selectedValue}
                                onChange={handleSelectChange}
                                aria-label="Month tab"
                            >
                                {options?.map(({ label, value }, index) => {
                                    return (
                                        <Tab label={label} {...a11yProps(index)} key={label} value={value} />
                                    )
                                })}
                            </Tabs>
                        </Grid>
                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12} id="reward-tabs-vertical">
                            <Box sx={{ bgcolor: 'background.paper', display: 'flex', width: "100%" }}>
                                <Tabs
                                    orientation="vertical"
                                    variant="scrollable"
                                    value={currentTabValue}
                                    onChange={handleChange}
                                    aria-label="Vertical tabs example"
                                    sx={{ borderRight: 1, borderColor: 'divider', minWidth: "250px" }}
                                >
                                    {tabsName?.map(({ label, text, Icon }, index) => {
                                        return (
                                            <Tab label={label} {...a11yProps(index)} key={text} value={text} />
                                        )
                                    })}
                                </Tabs>
                                <TabPanel value={currentTabValue} index={currentTabValue}>
                                    {renderCardContent()}
                                </TabPanel>
                            </Box>
                        </Grid>
                    </>
                )
            }
            {/* <Grid item xs={12} lg={10} md={10} sm={10} xl={10} className="month-select-grid">
                <Tabs
                    variant="scrollable"
                    value={selectedValue}
                    onChange={handleSelectChange}
                    aria-label="Month tab"
                >
                    {options?.map(({ label, value }, index) => {
                        return (
                            <Tab label={label} {...a11yProps(index)} key={label} value={value} />
                        )
                    })}
                </Tabs>
            </Grid>
            <Grid item xs={12} lg={12} md={12} sm={12} xl={12} id="reward-tabs-vertical">
                <Box sx={{ bgcolor: 'background.paper', display: 'flex', width: "100%" }}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={currentTabValue}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider', minWidth: "250px" }}
                    >
                        {tabsName?.map(({ label, text, Icon }, index) => {
                            return (
                                <Tab label={label} {...a11yProps(index)} key={text} value={text} />
                            )
                        })}
                    </Tabs>
                    <TabPanel value={currentTabValue} index={currentTabValue}>
                        {renderCardContent()}
                    </TabPanel>
                </Box>
            </Grid> */}
        </Grid>
    )
}
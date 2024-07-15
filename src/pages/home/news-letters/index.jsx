import { Box, Grid, Tabs, Tab, Typography } from "@mui/material";
import { VerticalTimeline } from "components/timeline";
import { newsLetters } from "content/news-letters";
import React from "react";
import { yearTabs } from "../tabs";
import useMediaQuery from '@mui/material/useMediaQuery';

const TabName = ({ children }) => {
    return (
        <span className="font-12">
            {children}
        </span>)
}

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

export const NewsLetters = () => {
    const [currentTabValue, setCurrentTabValue] = React.useState("2024");
    const matches = useMediaQuery('(max-width:600px)');

    const handleChange = (event, newValue) => {
        setCurrentTabValue(newValue);
    };

    const renderTimelineContent = () => {
        if (newsLetters?.[currentTabValue]) {
            return <VerticalTimeline items={newsLetters?.[currentTabValue]} matches={matches} />
        }
        return null;
    }

    const tabsName = yearTabs.map(item => {
        return {
            ...item, label: <TabName>{item?.label}</TabName>
        }
    })

    return (
        <Grid container columns={12} className='reward-tabs' id="news-letter-tab">
            <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                <Box sx={{ bgcolor: 'background.paper', display: 'flex', width: "100%", flexDirection: matches ? 'column' : 'row' }}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={currentTabValue}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider', minWidth: "250px" }}
                        id="news-letter-tab-year"
                    >
                        {tabsName?.map(({ label, text, Icon }, index) => {
                            return (
                                <Tab label={label} {...a11yProps(index)} key={text} value={text} />
                            )
                        })}
                    </Tabs>
                    <TabPanel value={currentTabValue} index={currentTabValue} className="w-100" id="news-letter-tab-timeline-wrapper">
                        {renderTimelineContent()}
                    </TabPanel>
                </Box>
            </Grid>
        </Grid>
    )
}
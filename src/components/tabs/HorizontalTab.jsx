
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 1 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const HorizontalTabs = ({ currentTabvalue = 1, handleChange, tabs = [], children }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={currentTabvalue} onChange={handleChange} aria-label="basic tabs example" id={`current-active-tab-${currentTabvalue}`}>
                    {tabs.map(item => {
                        return (
                            <Tab label={item?.name} {...a11yProps(item.value)} value={item.value} key={item.value}/>
                        )
                    })}
                </Tabs>
            </Box>
            <CustomTabPanel value={currentTabvalue} index={currentTabvalue}>
                {children}
            </CustomTabPanel>
        </Box>
    )
}
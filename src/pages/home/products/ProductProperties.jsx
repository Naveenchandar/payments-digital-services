import { Box, Grid } from "@mui/material";

const TabName = ({ children }) => {
    return (
        <span className="font-12">
            {children}
        </span>)
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
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

export const UnitTab = ({ value, basicInformation, applicationStack, orgChart, index, className }) => {
    return (
        <TabPanel value={value} index={index} className={className || ""}>
            {basicInformation && (
                <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                    {basicInformation}
                </Grid>
            )}
            {applicationStack && (
                <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                    {applicationStack}
                </Grid>
            )}
            {orgChart && (
                <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                    {orgChart}
                </Grid>
            )}
        </TabPanel>
    )
}

export const ProductProperties = {
    TabName,
    TabPanel,
    UnitTab
}
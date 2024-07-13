import { Box, Grid, Typography } from "@mui/material";
import { Underline } from "components/underline";
import { TeamImages } from "pages/teams/images";

export const AboutUs = () => {
    return (
        <Grid container columns={12} id='tabs-grid' className='unit-tabs'>
            <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                <Box component="div">
                    <Typography variant="h5" component={'span'} className="fw-bold font-15">Payments & Digital Services</Typography>
                    <Underline width="140px" />
                </Box>
            </Grid>
            <Grid item xs={12} lg={3} md={6} sm={12} xl={3}>
                <div className="tree-avatar">
                    <img src={TeamImages.Santosh} alt='team-leader' />
                </div>
            </Grid>
            <Grid item xs={12} lg={9} md={6} sm={12} xl={9}>
                <div id="who-we-are">
                    <Typography paragraph className='about-us'>
                        <span className="font-bold font-14">
                            Mashreq's Digital Backbone:  Payments & Digital Services Hub!.
                        </span>
                        <span>
                            This is your central platform for everything powering the bank's digital transformation journey. We're the team crafting the secure and innovative technology that keeps us ahead of the curve.
                        </span>
                        <ul className="about-us-subtitle">
                            <li className="font-bold font-14">
                                Our Mission is to have an:
                            </li>
                        </ul>
                        <ul>
                            <li className="line-height-20 margin-v8">
                                <span className="font-bold">Unified Infrastructure:</span> where we seamlessly integrate all the building blocks - architecture, platforms, integrations, identity management, and cutting-edge payments and operations technology.
                            </li>
                            <li className="line-height-20 margin-v8">
                                <span className="font-bold">AI-Powered Future:</span> We leverage the power of AI and Machine Learning to deliver secure solutions that optimize processes, personalize experiences, and safeguard the bank's future.
                            </li>
                            <li className="line-height-20 margin-v8">
                                <span className="font-bold">Constant Evolution:</span> We embrace a pioneering spirit, continuously adapting to the dynamic digital landscape and redefining global banking standards.
                            </li>
                        </ul>
                        <ul className="about-us-subtitle">
                            <li className="font-bold font-14">
                                Our key areas of expertise encompass:
                            </li>
                        </ul>
                        <ul>
                            <li className="line-height-20 margin-v8">
                                <span className="font-bold">Payments Technology - </span>
                                Strive for a robust and reliable payments platform while fostering innovation in the Payments domain.
                            </li>
                            <li className="line-height-20 margin-v8">
                                <span className="font-bold">Operations Technology - </span>
                                Strengthen operations with digital solutions and innovation, promoting re-use, efficiency, and excellence.
                            </li>
                            <li className="line-height-20 margin-v8">
                                <span className="font-bold">Digital Platforms - </span>
                                Ensure stable platforms through Digital Worker upgrades, Legacy Rewrite, and Business Automation Workflow enhancement.
                            </li>
                            <li className="line-height-20 margin-v8">
                                <span className="font-bold">Integrations - </span>
                                Optimize Integrations with a focus on Open API Banking, while maintaining performance for AppConnectEnterprise and API Connect.
                            </li>
                            <li className="line-height-20 margin-v8">
                                <span className="font-bold">Enterprise Architecture - </span>
                                Guiding business growth through strategic standards, governance, and innovative technologies in Enterprise Architecture.
                            </li>
                            <li className="line-height-20 margin-v8">
                                <span className="font-bold">Identity and Access Management (IAM) - </span>
                                Implementing Identity and Access Management (IAM) application for enhanced security, streamlined operations, and improved user experience.
                            </li>
                        </ul>
                        <Typography><span className="font-bold">Join the Movement!</span> Become part of the team shaping the future of banking.</Typography>
                        <Typography><span className="font-bold">Stay Connected!</span> This intranet portal will keep you updated on our latest advancements as we relentlessly pursue operational excellence in every aspect of our work..</Typography>
                        <i>Best wishes,</i>
                        <i><b>Santosh Vaidya,</b></i>
                        <i>Group Head of Payments & Digital Services,</i>
                    </Typography >
                </div>
            </Grid >
        </Grid >
    )
}
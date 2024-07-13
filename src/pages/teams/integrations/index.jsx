import React from 'react';
import Typography from '@mui/material/Typography';
import { TeamInfoAccordion } from '../components/accordion';
import { OrganizationChart } from './payments/org-chart';
import TeamLeaderImage from "../images/image 1.png";

export const Integrations = () => {
    return (
        <section id="teams-section">
            <div id="who-we-are">
                <div className="right"> </div>
                <div className="tree-avatar">
                    <img src={TeamLeaderImage} alt='team-leader' />
                </div>
                <Typography paragraph className='about-us'>
                    <span style={{ position: "relative" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac.
                    </span>
                </Typography>
            </div>
            <TeamInfoAccordion />
            <div id="teams-section-org-chart">
                <OrganizationChart />
            </div>
        </section>
    )
}
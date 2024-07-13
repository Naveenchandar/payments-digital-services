import { Typography } from '@mui/material'
import React from 'react'

export const IdentityAccessManagementUnitDetails = () => {
    return (
        <div className='accordion-details scale-in-hor-right' id="platform-overview">
            <Typography className='text-focus-in text-align-left font-bold margin-v8 font-15 text-center' mb={1}>
                Welcome to the Identity & Access Management (IAM)
            </Typography>
            <Typography className='text-focus-in text-align-left' mb={1}>Who We Are?</Typography>
            <div>
                <ul className="scale-in-hor-right">
                    <li className="text-align-left">
                        The Identity and Access Management (IAM) Technology Team is dedicated to securing and managing digital identities and access within our organization. We ensure that the right individuals have the appropriate access to resources at the right times and for the right reasons.
                    </li>
                </ul>
            </div>
            <Typography className='text-focus-in text-align-left'>Our Mission</Typography>
            <div>
                <ul className="scale-in-hor-right ">
                    <li className="text-align-left">
                        Our mission is to protect our organization’s digital assets by implementing robust identity management solutions that enhance security, ensure compliance, and streamline user experiences. To achieve this, we thrive to deploy all the applications to centralized Identity management and strengthen the entire user life cycle management and governance while collaborating with IAM Business owner (ISG).
                    </li>
                </ul>
            </div>
            <Typography className='text-focus-in text-align-left' mb={1}>What we Support?</Typography>
            <Typography className='text-focus-in text-align-left'>BAU & Run for IAM Integrations</Typography>
            <div>
                <ul className="scale-in-hor-right ">
                    <li className="text-align-left">
                        Maintenance and Enhancement of existing 100+ integrations, Joiners, Movers & Leavers, Recertification and ensure seamless interoperability between SailPoint and Source applications.
                    </li>
                </ul>
            </div>
            <Typography className='text-focus-in text-align-left'>Ongoing Integration and Scalability</Typography>
            <div>
                <ul className="scale-in-hor-right ">
                    <li className="text-align-left">
                        We ensure IAM Integration & Adherence to support organization's large program like Pakistan Digital Bank setup, Oman setup, T24 replacement for US, UK, HK.
                    </li>
                    <li className="text-align-left">
                        As part of IAM Evolution we collaborate with IAM Business owner (ISG) to define way forward journey to Implement Role Based access control, Segregation of Duties, Strengthen the access recertification process.
                    </li>
                    <li className="text-align-left">
                        Ensure that the integration process is scalable and repeatable.
                    </li>
                </ul>
            </div>
        </div>
    )
}

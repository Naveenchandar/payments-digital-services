import { Typography } from '@mui/material'
import React from 'react'

export const IntegrationsUnitDetails = () => {
    return (
        <div className='accordion-details scale-in-hor-right text-align-left' id="integration-unit-details">
            <Typography className='text-focus-in font-bold text-center font-15 margin-v8'>
                Integrations Team.
            </Typography>
            <Typography mb={2} className="text-align-left line-height-20 margin-v8">
                <span className='font-bold'>Integration</span> platforms unify and secure data flow across diverse applications, simplifying complexities and ensuring efficient management. By orchestrating multiple providers, we enhance reliability, interoperability, flexibility, scalability, and security. Presently integrated in six regions—UAE, Qatar, Bahrain, Egypt, India, Kuwait—with ongoing expansion into Pakistan, Oman, US, HK, and UK.
            </Typography>
            {/* <Typography mb={1} className="text-align-left">
                <span className='font-bold'>Integration</span> platform offers the reliability, interoperability, flexibility, scalability and compatibility across applications with enhanced security. Currently we have the integrations in all 6 regions – UAE, Qatar, Bahrain, Egypt, India, and Kuwait. Integration is in progress for other regions such as Pakistan, Oman, US, HK and UK.
            </Typography> */}
            <div>
                <ul className="text-align-left scale-in-hor-right">
                    <li>
                        <span className="font-bold">Online Middleware:</span> is an enterprise service layer primarily for enabling the integration between applications in many different messaging types, implemented with formats SOAP, RESTful (Synchronous, Asynchronous ), JSON, XML, using protocols  HTTPS, MQ, FTP, TCPIP, Websocket, DB interactions etc.
                        <ul>
                            <li className='line-height-20 margin-v8'>
                                Implemented the IBM App Connect Enterprise v12..x and IBM MQ 9.x on  complete On-Prem AIX instances on local and secured zones of network to handle the internal and external interactions.
                            </li>
                            <li className='line-height-20 margin-v8'>
                                Utility Bill providers (21) interactions and Quick remittance for multiple corridors(India, Pakistan and European countries) have implemented the complete automation with retries and failure debit reversals. SMPP protocol interactions with several external SMS providers implemented.
                            </li>
                            <li className='line-height-20 margin-v8'>
                                Total 1600+  integrations including the  REST APIs and Soap services are exposed to 100+ consumer applications bank wide by  integrating with 85+ unique  provider applications within and outside bank.
                            </li>
                            <li className='line-height-20 margin-v8'>
                                Handles the volume of 150 million hits monthly.
                            </li>
                            <li className='line-height-20 margin-v8'>
                                E2E log monitoring and alerting enabled with ELK platforms.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="text-align-left scale-in-hor-right">
                    <li>
                        <span className="font-bold">Mashreq API Gateway(MAG):</span> API lifecycle managing platform to create, securely expose, manage and socialize APIs across multiple environments.
                        <ul>
                            <li className='line-height-20 margin-v8'>
                                Implemented the platform with IBM API connect v10.x in Azure Kubernetes and in on-prem VMware.
                            </li>
                            <li className='line-height-20 margin-v8'>
                                API can be published for consumption over intranet and to the external world with approved security standards and authorization layers.
                            </li>
                            <li className='line-height-20 margin-v8'>
                                Securely exposed the APIs with native oAuth2 security and client credentials. JWT based interactions also supported for data integrity.
                            </li>
                            <li className='line-height-20 margin-v8'>
                                Rates and Burst limit policies configured to control the volume and capacity overloads.
                            </li>
                            <li className='line-height-20 margin-v8'>
                                Self service sandbox portal enabled for socializing the APIs within organization and enabled to external consumers customized with Mashreq business branding. Also Advanced analytics of API interactions throughout the platforms enabled.
                            </li>
                            <li className='line-height-20 margin-v8'>
                                Implemented multiple API gateway instances and segregated based on the  consumers and business demands.
                            </li>
                            <li className='line-height-20 margin-v8'>
                                2K+ APIs with 150+ product packaging enabled currently for internal consumers and 100+ APIs with 10+ products packaging enabled currently for external consumers.
                            </li>
                            <li className='line-height-20 margin-v8'>
                                Handles the volume of 50 million hits monthly.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="text-align-left scale-in-hor-right">
                    <li className='line-height-20 margin-v8'>
                        <span className="font-bold">Microservices:</span> These are small units of service components handling definite business use case with top tech standards and flexible design patterns achieving great fault tolerance enabling very minimal to zero failure helping us achieve business continuity.
                        <ul>
                            <li className='line-height-20 margin-v8'>
                                MOFT - This is a homegrown framework built primarily leveraging open-source technologies. It allows us to independently deploy microservices and micro frontends, leading to a highly reliable and modular system architecture. This translates to faster development cycles and quicker time-to-market for our digital products which avoids lot of boiler plate by building required digital assets.
                            </li>
                            <li className='line-height-20 margin-v8'>
                                Platform at the moment holds around 12 plug and play digital assets (4 Micro frontends), and other 50+ application driven microservices, Microservice driven platforms - Eagle Eye, Transaction monitoring systems, Court Case - Qatar, Document Tracking System, Unusual Activity Reporting, Court Case - UAE, with many more automations in progress.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

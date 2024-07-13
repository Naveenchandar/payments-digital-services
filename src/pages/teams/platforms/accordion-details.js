import { Typography } from '@mui/material'
import React from 'react'

export const PlatformUnitDetails = () => {
    return (
        <div className='accordion-details scale-in-hor-right' id="platform-overview">
            <Typography className='text-focus-in font-bold text-center font-15 margin-v8'>
                Platforms Team.
            </Typography>
            <Typography className='text-focus-in text-align-left'>
                The Digital Automation Platform provides a base for advanced digital technology solutions that runs through and touches almost all aspects of Mashreq Bank.
            </Typography>
            <Typography className='text-focus-in text-align-left'>
                This unit manages and maintains the following technology Platforms.
            </Typography>
            <div>
                <ul className='scale-in-hor-right'>
                    <li className='text-focus-in text-align-left'><span className="font-bold">Workflow Platform:</span> We leverage the power of IBM's Business Automation Workflow (BAW) as the central orchestrator. Through this technology, we design and automate complex business processes, along with handling unstructured, dynamic cases. IBM BAW's flexibility allows us to seamlessly manage both standardized and non-standard workflows, ensuring efficient task execution and collaboration across teams.
                        <ul className='nested-ul'>
                            <li>IBM's Business Automation Workflow version 7.3.1</li>
                        </ul>
                    </li>
                    <li className='text-focus-in text-align-left'><span className="font-bold">Robotic Automation Platform:</span> We provide and manage the technology that ushers in capabilities for intelligent automation. The platform enables software robots, mimicking human actions across digital systems, to tackle repetitive and high-volume tasks. This frees up human workforce to focus on more strategic initiatives. By automating these processes, the platform enhances efficiency, minimizes errors, and streamlines workflows, ultimately propelling our organization towards its digital transformation goals.
                        <ul className='nested-ul'>
                            <li>Blue Prism 7.1</li>
                            <li>Microsoft Power Automate version 2.45</li>
                        </ul>
                    </li>
                    <li className='text-focus-in text-align-left'><span className="font-bold">Document Management Platform :</span>
                        Electronic Document Management System (EDMS) acts as a central hub for storing, organizing, and managing all digital documents of Mashreq. It is secure, digital filing cabinet that's accessible from anywhere. The platform goes beyond just storage though. It offers features like version control, access control, workflow capabilities and powerful search functionalities, making it easy to set a business process, store and find the exact document based on needs and demands. This translates to increased efficiency, improved collaboration, and
                        reduced reliance on physical documents.
                        <ul className='nested-ul'>
                            <li>Newgen Tech's EDMS iBPS</li>
                        </ul>
                    </li>
                    <li className='text-focus-in text-align-left'><span className="font-bold">Cognitive Technology Platform :</span> Its the brain behind the power of automation. It harnesses the power of AI, specifically machine learning and natural language processing, to mimic human cognitive abilities. The platform enables capabilities to analyze vast amounts of data, identify patterns, and make intelligent decisions. This platform helps Mashreq to transforms business processes by automating complex tasks, extracting insights from data, and enabling smarter decision-making.
                        <ul className='nested-ul'>
                            <li>Microsoft Azure Cognitive Services</li>
                        </ul>
                    </li>
                    <li className='text-focus-in text-align-left'><span className="font-bold">Utility Platform :</span> Provides
                        <span className="font-bold"> Java services/utility functions</span> that offers multiple functionalities enabling simplification of tasks for other applications. The platform hosts multiple Java services providing capabilities, as mentioned below.
                        <ul className='nested-ul'>
                            <li><span className="font-bold">File processing:</span> Uploading, downloading, or manipulating files</li>
                            <li><span className="font-bold">Data conversion:</span>Converting data between different formats.</li>
                            <li><span className="font-bold">Task scheduling:</span>Triggering actions at specific times or intervals.</li>
                            <li><span className="font-bold">Log management:</span>Centralized collection and analysis of logs from various applications.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <Typography className='text-focus-in text-align-left'>
                The Digital Automation Platform unit provides production support function for all the above Digital Technology platforms. In addition to that, they also provide application support for some of the
                business and operations applications build on these platforms.
            </Typography>
            <Typography className='text-focus-in text-align-left'>
                Their primary objective is to keep the platforms healthy and make it available for all the required bank operations, during the agreed business hours, 24/7.
            </Typography>
        </div>
    )
}

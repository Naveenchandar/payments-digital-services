import ApiLink from "images/architecture/api_landscape.png";
import MicroServiceLink from "images/architecture/microservice_arch.png";
import MiddlewareLink from "images/architecture/middleware_arch.png";

export const applicationsData = [
    {
        appName: 'Online Middleware',
        description:
            'A centralized integration platform integrates the multiple applications bank wide.',
        availability: '24 hrs x 7 days',
        adaption: 'UAE, Qatar, Bahrain, Egypt, India, Kuwait., Pakistan, Oman',
        link: MiddlewareLink
    },
    {
        appName: 'Mashreq API Gateway',
        description:
            'API lifecycle management platform.',
        availability: '24 hrs x 7 days',
        adaption: 'UAE, Qatar, Bahrain, Egypt, India, Kuwait, Pakistan, Oman',
        link: ApiLink
    },
    {
        appName: 'Microservices',
        description:
            'Platform which builds the reusable components for handling definite business use case.',
        availability: '24 hrs x 7 days',
        adaption: 'UAE, Qatar',
        link: MicroServiceLink
    },
    // {
    //     appName: 'Frontend',
    //     description:
    //         '',
    //     availability: '16 hrs x 5 days',
    //     adaption: '-',
    //     link: ""
    // },
];
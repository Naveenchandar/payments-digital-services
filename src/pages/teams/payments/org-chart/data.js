import { TeamImages } from "pages/teams/images";

export const orgChartData = [
    // {
    //     "id": "main",
    //     "name": "Mohamed Abdel Razek",
    //     "post": "Technology Group ead",
    //     // "phone": "(405) 000-00-00",
    //     // "mail": "some@mail.com",
    //     "photo": MoPng,
    //     "type": "template",
    //     "height": 115,
    //     "width": 330,
    //     "x": 1110,
    //     "y": 0,
    //     "fixed": false,
    //     "stroke": "#FF9800",
    //     "headerColor": "#FF9800",
    //     "dx": 0,
    //     "dy": 0,
    //     "open": true
    // },
    // {
    //     "id": "u1714552354397",
    //     "parent": "main",
    //     "text": "",
    //     "dx": 0,
    //     "dy": 0,
    //     "type": "template",
    //     "name": "Santosh Vaidya",
    //     "post": "Unit Head",
    //     // "phone": "(405) 000-00-00",
    //     // "mail": "some@mail.com",
    //     "photo": Santosh,
    //     "height": 115,
    //     "width": 330,
    //     "x": 1110,
    //     "y": 160,
    //     "fixed": false,
    //     "stroke": "#607D8B",
    //     "headerColor": "#607D8B",
    //     "open": true
    // },
    // {
    //     "from": "main",
    //     "to": "u1714552354397",
    //     "id": "u1714552354398",
    //     "type": "line",
    //     "connectType": "elbow",
    //     "stroke": "#CCC",
    //     "strokeWidth": 2,
    //     "cornersRadius": 0,
    //     "points": [
    //         {
    //             "x": 1275,
    //             "y": 115
    //         },
    //         {
    //             "x": 1275,
    //             "y": 135.5
    //         },
    //         {
    //             "x": 1275,
    //             "y": 135.5
    //         },
    //         {
    //             "x": 1275,
    //             "y": 160
    //         }
    //     ],
    //     "width": 0,
    //     "height": 45,
    //     "x": 1275,
    //     "y": 115
    // },
    {
        "id": "u1714552354464",
        // "parent": "u1714552354397",
        "text": "",
        "dx": 0,
        "dy": 0,
        "type": "template",
        "name": "Hrishikesh W",
        "post": "VP- Payment Platforms ",
        // "phone": "(405) 000-00-00",
        // "mail": "some@mail.com",
        "photo": TeamImages.Hrishi,
        "height": 115,
        "width": 330,
        "x": 1110,
        "y": 310,
        "fixed": false,
        "stroke": "#00C7B5",
        "headerColor": "#00C7B5",
        "open": true,
        "dir": "horizontal"
    },
    // {
    //     "from": "u1714552354397",
    //     "to": "u1714552354464",
    //     "id": "u1714552354465",
    //     "type": "line",
    //     "connectType": "elbow",
    //     "stroke": "#CCC",
    //     "strokeWidth": 2,
    //     "cornersRadius": 0,
    //     "points": [
    //         {
    //             "x": 1275,
    //             "y": 275
    //         },
    //         {
    //             "x": 1275,
    //             "y": 295.5
    //         },
    //         {
    //             "x": 1275,
    //             "y": 295.5
    //         },
    //         {
    //             "x": 1275,
    //             "y": 310
    //         }
    //     ],
    //     "width": 0,
    //     "height": 35,
    //     "x": 1275,
    //     "y": 275
    // },
    {
        "id": "u1714552354511",
        "parent": "u1714552354464",
        "text": "",
        "dx": 0,
        "dy": 0,
        "type": "template",
        "name": "Instant Payment Platforms",
        // "post": "Position held",
        // "phone": "(405) 000-00-00",
        // "mail": "some@mail.com",
        // "photo": "../common/big_img/big-avatar-1.jpg",
        "height": 50,
        "width": 330,
        "x": 190,
        "y": 470,
        "fixed": false,
        "stroke": "#03A9F4",
        "headerColor": "#03A9F4",
        "open": false,
        "dir": "vertical"
    },
    {
        "from": "u1714552354464",
        "to": "u1714552354511",
        "id": "u1714552354512",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "points": [
            {
                "x": 1275,
                "y": 425
            },
            {
                "x": 1275,
                "y": 445.5
            },
            {
                "x": 355,
                "y": 445.5
            },
            {
                "x": 355,
                "y": 470
            }
        ],
        "width": 920,
        "height": 45,
        "x": 1275,
        "y": 425
    },
    {
        "id": "u1714552354547",
        "parent": "u1714552354464",
        "text": "",
        "dx": 0,
        "dy": 0,
        "type": "template",
        "name": "Digitization and Reconciliation Platforms",
        // "post": "Position held",
        // "phone": "(405) 000-00-00",
        // "mail": "some@mail.com",
        // "photo": "../common/big_img/big-avatar-1.jpg",
        "height": 50,
        "width": 330,
        "x": 930,
        "y": 470,
        "fixed": false,
        "stroke": "#03A9F4",
        "headerColor": "#03A9F4",
        "open": false,
        "dir": "vertical"
    },
    {
        "from": "u1714552354464",
        "to": "u1714552354547",
        "id": "u1714552354548",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "points": [
            {
                "x": 1275,
                "y": 425
            },
            {
                "x": 1275,
                "y": 445.5
            },
            {
                "x": 1095,
                "y": 445.5
            },
            {
                "x": 1095,
                "y": 470
            }
        ],
        "width": 180,
        "height": 45,
        "x": 1275,
        "y": 425
    },
    {
        "id": "u1714552354563",
        "parent": "u1714552354464",
        "text": "",
        "dx": 0,
        "dy": 0,
        "type": "template",
        "name": "Local Payments",
        // "post": "Position held",
        // "phone": "(405) 000-00-00",
        // "mail": "some@mail.com",
        // "photo": "../common/big_img/big-avatar-1.jpg",
        "height": 50,
        "width": 330,
        "x": 1480,
        "y": 470,
        "fixed": false,
        "stroke": "#03A9F4",
        "headerColor": "#03A9F4",
        "open": false,
        "dir": "vertical"
    },
    {
        "from": "u1714552354464",
        "to": "u1714552354563",
        "id": "u1714552354564",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "points": [
            {
                "x": 1275,
                "y": 425
            },
            {
                "x": 1275,
                "y": 445.5
            },
            {
                "x": 1645,
                "y": 445.5
            },
            {
                "x": 1645,
                "y": 470
            }
        ],
        "width": 370,
        "height": 45,
        "x": 1275,
        "y": 425
    },
    {
        "id": "u1714552354579",
        "parent": "u1714552354464",
        "text": "",
        "dx": 0,
        "dy": 0,
        "type": "template",
        "name": "Cross Border Payments",
        // "post": "Position held",
        // "phone": "(405) 000-00-00",
        // "mail": "some@mail.com",
        // "photo": "../common/big_img/big-avatar-1.jpg",
        "height": 50,
        "width": 330,
        "x": 2040,
        "y": 470,
        "fixed": false,
        "stroke": "#03A9F4",
        "headerColor": "#03A9F4",
        "open": false,
        "dir": "vertical"
    },
    {
        "from": "u1714552354464",
        "to": "u1714552354579",
        "id": "u1714552354580",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "points": [
            {
                "x": 1275,
                "y": 425
            },
            {
                "x": 1275,
                "y": 445.5
            },
            {
                "x": 2205,
                "y": 445.5
            },
            {
                "x": 2205,
                "y": 470
            }
        ],
        "width": 930,
        "height": 45,
        "x": 1275,
        "y": 425
    },
    {
        "id": "u1714552354707",
        "parent": "u1714552354511",
        "text": "",
        "dx": 0,
        "dy": 0,
        "type": "template",
        "name": "Aarthy A",
        "post": "Assistant Manager",
        // "phone": "(405) 000-00-00",
        // "mail": "some@mail.com",
        // "photo": "../common/big_img/big-avatar-1.jpg",
        "height": 115,
        "width": 330,
        "x": 0,
        "y": 780,
        "fixed": false,
        "stroke": "#F06292",
        "headerColor": "#F06292"
    },
    {
        "from": "u1714552354511",
        "to": "u1714552354707",
        "id": "u1714552354708",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "points": [
            {
                "x": 165,
                "y": 735
            },
            {
                "x": 165,
                "y": 755.5
            },
            {
                "x": 165,
                "y": 755.5
            },
            {
                "x": 165,
                "y": 780
            }
        ],
        "width": 0,
        "height": 45,
        "x": 165,
        "y": 735
    },
    {
        "id": "u1714552354626",
        "parent": "u1714552354511",
        "text": "",
        "dx": 0,
        "dy": 0,
        "type": "template",
        "name": "Namoju Dheeraj",
        "post": "AVP",
        // "phone": "(405) 000-00-00",
        // "mail": "some@mail.com",
        // "photo": "../common/big_img/big-avatar-1.jpg",
        "height": 115,
        "width": 330,
        "x": 0,
        "y": 620,
        "fixed": false,
        "stroke": "#9575CD",
        "headerColor": "#9575CD",
        "open": true
    },
    {
        "from": "u1714552354511",
        "to": "u1714552354626",
        "id": "u1714552354627",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "points": [
            {
                "x": 355,
                "y": 585
            },
            {
                "x": 355,
                "y": 605.5
            },
            {
                "x": 165,
                "y": 605.5
            },
            {
                "x": 165,
                "y": 620
            }
        ],
        "width": 190,
        "height": 35,
        "x": 355,
        "y": 585
    },
    {
        "id": "u1714552354681",
        "parent": "u1714552354511",
        "text": "",
        "dx": 0,
        "dy": 0,
        "type": "template",
        "name": "Sai Goutham S",
        "post": "AVP",
        // "phone": "(405) 000-00-00",
        // "mail": "some@mail.com",
        // "photo": "../common/big_img/big-avatar-1.jpg",
        "height": 115,
        "width": 330,
        "x": 370,
        "y": 620,
        "fixed": false,
        "stroke": "#9575CD",
        "headerColor": "#9575CD",
        "open": true
    },
    {
        "from": "u1714552354511",
        "to": "u1714552354681",
        "id": "u1714552354682",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "points": [
            {
                "x": 355,
                "y": 585
            },
            {
                "x": 355,
                "y": 605.5
            },
            {
                "x": 535,
                "y": 605.5
            },
            {
                "x": 535,
                "y": 620
            }
        ],
        "width": 180,
        "height": 35,
        "x": 355,
        "y": 585
    },
    {
        "id": "u1714552354690",
        "parent": "u1714552354511",
        "text": "",
        "dx": 0,
        "dy": 0,
        "type": "template",
        "name": "Shashank Ashar",
        "post": "Assistant Manager",
        // "phone": "(405) 000-00-00",
        // "mail": "some@mail.com",
        // "photo": "../common/big_img/big-avatar-1.jpg",
        "height": 115,
        "width": 330,
        "x": 370,
        "y": 780,
        "fixed": false,
        "stroke": "#F06292",
        "headerColor": "#F06292"
    },
    {
        "from": "u1714552354511",
        "to": "u1714552354690",
        "id": "u1714552354691",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "points": [
            {
                "x": 535,
                "y": 735
            },
            {
                "x": 535,
                "y": 755.5
            },
            {
                "x": 535,
                "y": 755.5
            },
            {
                "x": 535,
                "y": 780
            }
        ],
        "width": 0,
        "height": 45,
        "x": 535,
        "y": 735
    },
    {
        "id": "u1714552354748",
        "parent": "u1714552354547",
        "text": "",
        "dx": 0,
        "dy": 0,
        "type": "template",
        "name": "Brajesh Kumar",
        "post": "AVP",
        // "phone": "(405) 000-00-00",
        // "mail": "some@mail.com",
        // "photo": "../common/big_img/big-avatar-1.jpg",
        "height": 115,
        "width": 330,
        "x": 740,
        "y": 620,
        "fixed": false,
        "stroke": "#9575CD",
        "headerColor": "#9575CD",
        "open": true
    },
    {
        "from": "u1714552354547",
        "to": "u1714552354748",
        "id": "u1714552354749",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "points": [
            {
                "x": 1095,
                "y": 585
            },
            {
                "x": 1095,
                "y": 605.5
            },
            {
                "x": 905,
                "y": 605.5
            },
            {
                "x": 905,
                "y": 620
            }
        ],
        "width": 190,
        "height": 35,
        "x": 1095,
        "y": 585
    },
    {
        "id": "u1714552354765",
        "parent": "u1714552354547",
        "text": "",
        "dx": 0,
        "dy": 0,
        "type": "template",
        "name": "Ankit Sinha",
        "post": "Manager",
        // "phone": "(405) 000-00-00",
        // "mail": "some@mail.com",
        // "photo": "../common/big_img/big-avatar-1.jpg",
        "height": 115,
        "width": 330,
        "x": 1110,
        "y": 620,
        "fixed": false,
        "stroke": "#9575CD",
        "headerColor": "#9575CD",
        "open": true
    },
    {
        "from": "u1714552354547",
        "to": "u1714552354765",
        "id": "u1714552354766",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "points": [
            {
                "x": 1095,
                "y": 585
            },
            {
                "x": 1095,
                "y": 605.5
            },
            {
                "x": 1275,
                "y": 605.5
            },
            {
                "x": 1275,
                "y": 620
            }
        ],
        "width": 180,
        "height": 35,
        "x": 1095,
        "y": 585
    },
    {
        "id": "u1714552354774",
        "parent": "u1714552354765",
        "text": "",
        "dx": 0,
        "dy": 0,
        "type": "template",
        "name": "Ashwin NA",
        "post": "Assistant Manager",
        // "phone": "(405) 000-00-00",
        // "mail": "some@mail.com",
        // "photo": "../common/big_img/big-avatar-1.jpg",
        "height": 115,
        "width": 330,
        "x": 1110,
        "y": 780,
        "fixed": false,
        "stroke": "#F06292",
        "headerColor": "#F06292"
    },
    {
        "from": "u1714552354765",
        "to": "u1714552354774",
        "id": "u1714552354775",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "points": [
            {
                "x": 1275,
                "y": 735
            },
            {
                "x": 1275,
                "y": 755.5
            },
            {
                "x": 1275,
                "y": 755.5
            },
            {
                "x": 1275,
                "y": 780
            }
        ],
        "width": 0,
        "height": 45,
        "x": 1275,
        "y": 735
    },
    {
        "id": "u1714552354792",
        "parent": "u1714552354748",
        "text": "",
        "dx": 0,
        "dy": 0,
        "type": "template",
        "name": "Jayakrishnan C",
        "post": "Assistant Manager",
        // "phone": "(405) 000-00-00",
        // "mail": "some@mail.com",
        // "photo": "../common/big_img/big-avatar-1.jpg",
        "height": 115,
        "width": 330,
        "x": 740,
        "y": 780,
        "fixed": false,
        "stroke": "#F06292",
        "headerColor": "#F06292"
    },
    {
        "from": "u1714552354748",
        "to": "u1714552354792",
        "id": "u1714552354793",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "points": [
            {
                "x": 905,
                "y": 735
            },
            {
                "x": 905,
                "y": 755.5
            },
            {
                "x": 905,
                "y": 755.5
            },
            {
                "x": 905,
                "y": 780
            }
        ],
        "width": 0,
        "height": 45,
        "x": 905,
        "y": 735
    },
    {
        "id": "u1714552354809",
        "parent": "u1714552354563",
        "text": "",
        "dx": 0,
        "dy": 0,
        "type": "template",
        "name": "Muhammad Anwar",
        "post": "AVP",
        // "phone": "(405) 000-00-00",
        // "mail": "some@mail.com",
        // "photo": "../common/big_img/big-avatar-1.jpg",
        "height": 115,
        "width": 330,
        "x": 1480,
        "y": 620,
        "fixed": false,
        "stroke": "#9575CD",
        "headerColor": "#9575CD"
    },
    {
        "from": "u1714552354563",
        "to": "u1714552354809",
        "id": "u1714552354810",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "points": [
            {
                "x": 1645,
                "y": 585
            },
            {
                "x": 1645,
                "y": 605.5
            },
            {
                "x": 1645,
                "y": 605.5
            },
            {
                "x": 1645,
                "y": 620
            }
        ],
        "width": 0,
        "height": 35,
        "x": 1645,
        "y": 585
    },
    {
        "id": "u17145523548091",
        "parent": "u1714552354809",
        "text": "",
        "dx": 0,
        "dy": 0,
        "type": "template",
        "name": "Shubham Prakash",
        "post": "Manager",
        // "phone": "(405) 000-00-00",
        // "mail": "some@mail.com",
        // "photo": "../common/big_img/big-avatar-1.jpg",
        "height": 115,
        "width": 330,
        "x": 1480,
        "y": 620,
        "fixed": false,
        "stroke": "#9575CD",
        "headerColor": "#9575CD"
    },
    {
        "from": "u1714552354809",
        "to": "u17145523548091",
        "id": "u171455235480911",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "points": [
            {
                "x": 1645,
                "y": 585
            },
            {
                "x": 1645,
                "y": 605.5
            },
            {
                "x": 1645,
                "y": 605.5
            },
            {
                "x": 1645,
                "y": 620
            }
        ],
        "width": 0,
        "height": 35,
        "x": 1645,
        "y": 585
    },
    {
        "id": "u1714552354842",
        "parent": "u1714552354579",
        "text": "",
        "dx": 0,
        "dy": 0,
        "type": "template",
        "name": "Prasanna S",
        "post": "Senior Manager",
        // "phone": "(405) 000-00-00",
        // "mail": "some@mail.com",
        // "photo": "../common/big_img/big-avatar-1.jpg",
        "height": 115,
        "width": 330,
        "x": 2220,
        "y": 620,
        "fixed": false,
        "stroke": "#9575CD",
        "headerColor": "#9575CD",
        "open": true
    },
    {
        "from": "u1714552354579",
        "to": "u1714552354842",
        "id": "u1714552354843",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "points": [
            {
                "x": 2205,
                "y": 585
            },
            {
                "x": 2205,
                "y": 605.5
            },
            {
                "x": 2385,
                "y": 605.5
            },
            {
                "x": 2385,
                "y": 620
            }
        ],
        "width": 180,
        "height": 35,
        "x": 2205,
        "y": 585
    },
    {
        "id": "u1714552354858",
        "parent": "u1714552354579",
        "text": "",
        "dx": 0,
        "dy": 0,
        "type": "template",
        "name": "Aniket Bhosale",
        "post": "Manager",
        // "phone": "(405) 000-00-00",
        // "mail": "some@mail.com",
        // "photo": "../common/big_img/big-avatar-1.jpg",
        "height": 115,
        "width": 330,
        "x": 1850,
        "y": 780,
        "fixed": false,
        "stroke": "#F06292",
        "headerColor": "#F06292"
    },
    {
        "from": "u1714552354579",
        "to": "u1714552354858",
        "id": "u1714552354859",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "points": [
            {
                "x": 2015,
                "y": 735
            },
            {
                "x": 2015,
                "y": 755.5
            },
            {
                "x": 2015,
                "y": 755.5
            },
            {
                "x": 2015,
                "y": 780
            }
        ],
        "width": 0,
        "height": 45,
        "x": 2015,
        "y": 735
    },
    {
        "id": "u1714552354874",
        "parent": "u1714552354579",
        "text": "",
        "dx": 0,
        "dy": 0,
        "type": "template",
        "name": "Kailash Sundar",
        "post": "Manager",
        // "phone": "(405) 000-00-00",
        // "mail": "some@mail.com",
        // "photo": "../common/big_img/big-avatar-1.jpg",
        "height": 115,
        "width": 330,
        "x": 2220,
        "y": 780,
        "fixed": false,
        "stroke": "#F06292",
        "headerColor": "#F06292"
    },
    {
        "from": "u1714552354579",
        "to": "u1714552354874",
        "id": "u1714552354875",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "points": [
            {
                "x": 2385,
                "y": 735
            },
            {
                "x": 2385,
                "y": 755.5
            },
            {
                "x": 2385,
                "y": 755.5
            },
            {
                "x": 2385,
                "y": 780
            }
        ],
        "width": 0,
        "height": 45,
        "x": 2385,
        "y": 735
    },
    {
        "id": "u1714552354826",
        "parent": "u1714552354579",
        "text": "",
        "dx": 0,
        "dy": 0,
        "type": "template",
        "name": "Mayur Thakur",
        "post": "Module Lead",
        // "phone": "(405) 000-00-00",
        // "mail": "some@mail.com",
        // "photo": "../common/big_img/big-avatar-1.jpg",
        "height": 115,
        "width": 330,
        "x": 1850,
        "y": 620,
        "fixed": false,
        "stroke": "#9575CD",
        "headerColor": "#9575CD",
        "open": true
    },
    {
        "from": "u1714552354579",
        "to": "u1714552354826",
        "id": "u1714552354827",
        "type": "line",
        "connectType": "elbow",
        "stroke": "#CCC",
        "strokeWidth": 2,
        "cornersRadius": 0,
        "points": [
            {
                "x": 2205,
                "y": 585
            },
            {
                "x": 2205,
                "y": 605.5
            },
            {
                "x": 2015,
                "y": 605.5
            },
            {
                "x": 2015,
                "y": 620
            }
        ],
        "width": 190,
        "height": 35,
        "x": 2205,
        "y": 585
    },
]
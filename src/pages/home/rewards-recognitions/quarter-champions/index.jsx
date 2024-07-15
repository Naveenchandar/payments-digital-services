import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import ChampionsImage1 from "images/awards/champions/image_1.png";
import ChampionsImage2 from "images/awards/champions/image_2.jpg";
import ChampionsImage3 from "images/awards/champions/image_3.jpg";
export function QuerterChampionsSlider() {
    const settings = {
        className: "slider_section",
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // speed: 3000,
        autoplaySpeed: 10000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 319,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <Box className="slider-container_slider_section_champions_image">
                    <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiCard-root local_card flex border-radius-7 gap1rem align-center flex-row-reverse">
                        <div>
                            <img
                                className="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img local_card_card_media"
                                src={ChampionsImage2}
                                alt="champion 1"
                            />
                        </div>
                        <div>
                            <div className="MuiCardContent-root">
                                <div className="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom container_slider_section_champions_title">
                                    iValue - Champions of the Quarter for Q4 2023 - <b>Namoju Dheeraj Kumar</b>
                                </div>
                                <p className="MuiTypography-root MuiTypography-body2 container_slider_section_champions_message">
                                    For his remarkable achievements spanning across multiple projects including Microservices and API Delivery for NPSS IPP Implementation, Cognitive Services Migration, and Leading OBPM Implementation for Payment's Project. Dheeraj's remarkable achievements are even more impressive considering his existing workload. He consistently goes above and beyond, making him an invaluable asset to the team, and his willingness to take on extra tasks, such as overseeing the ELK dashboard implementation and middleware configuration for log monitoring, showcases his dedication to the team's success.
                                </p>
                            </div>
                        </div>
                    </div>
                </Box>
                <Box className="slider-container_slider_section_champions_image">
                    <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiCard-root local_card flex border-radius-7 gap1rem align-center flex-row-reverse">
                        <div>
                            <img
                                className="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img local_card_card_media"
                                src={ChampionsImage3}
                                alt="champion 2"
                            />
                        </div>
                        <div>
                            <div className="MuiCardContent-root">
                                <div className="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom container_slider_section_champions_title">
                                    iValue - Ace Performers of the Month for October 2023 - <b>Sandeep Tavva</b>
                                </div>
                                <p className="MuiTypography-root MuiTypography-body2 container_slider_section_champions_message">
                                   His remarkable role in establishing the in-house Microservices team from scratch, complete with the necessary tech stacks (REACT, Springboot, DevOps, Microservices), aligns with the latest digital standards and the enterprise's digital strategy. Under his guidance, the team has enriched the organization's Digital asset catalog with over 20 reusable components, ensuring efficiency and consistency in future application deliverables.
                                </p>
                            </div>
                        </div>
                    </div>
                </Box>
                <Box className="slider-container_slider_section_champions_image">
                    <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiCard-root local_card flex border-radius-7 gap1rem align-center flex-row-reverse">
                        <div>
                            <img
                                className="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img local_card_card_media"
                                src={ChampionsImage1}
                                alt="champion 3"
                            />
                        </div>
                        <div>
                            <div className="MuiCardContent-root">
                                <div className="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom container_slider_section_champions_title">
                                    iValue - Ace Performers of the Month for August 2023 - <b>Asim Amitabh Mohapatra</b>
                                </div>
                                <p className="MuiTypography-root MuiTypography-body2 container_slider_section_champions_message">
                                    Instrumental in the successful execution of the EDMS Upgrade project. Tasked with the intricate migration of the Old EDMS Application Server to a New Application Server, he adapted the system to incorporate cutting-edge document vault features, allowing for streamlined document storage and retrieval via API.
                                </p>
                            </div>
                        </div>
                    </div>
                </Box>
            </Slider>
        </div>
    );
}
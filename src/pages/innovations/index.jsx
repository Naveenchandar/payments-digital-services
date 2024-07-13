import React from "react";
import { Chrono } from "react-chrono";

const events = [
    {
        title: "Event 1",
        cardTitle: "Event 1",
        cardSubtitle: "January 1, 2022",
    },
    {
        title: "Event 2",
        cardTitle: "Event 2",
        cardSubtitle: <a href="www.google.com" target="_blank">FEB</a>,
    },
    {
        title: "Event 3",
        cardTitle: "Event 3",
        cardSubtitle: "March 1, 2022",
    },
];

export const Innovations = () => {
    return <Chrono items={events} mode="VERTICAL_ALTERNATING" enableOutline onClick={(event) => {
        console.log("event", event);
    }} />
}
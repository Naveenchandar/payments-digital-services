import React from 'react';
import { Chrono } from 'react-chrono';
import "./index.css";

export const VerticalTimeline = ({ items, matched }) => {
    return (
        <Chrono
            items={items}
            mode={matched ? "VERTICAL" : "VERTICAL_ALTERNATING"}
            itemWidth={200}
            allowDynamicUpdate
            enableLayoutSwitch={false}
            enableQuickJump={false}
            activeItemIndex={0}
        />
    );
};
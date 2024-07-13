import React from 'react';
import { Chrono } from 'react-chrono';
import "./index.css";

export const VerticalTimeline = ({ items }) => {
    return (
        <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            itemWidth={200}
            allowDynamicUpdate
            enableLayoutSwitch={false}
            enableQuickJump={false}
            activeItemIndex={0}
        />
    );
};
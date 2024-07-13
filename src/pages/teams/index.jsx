import React, { useCallback } from 'react';
import { BaseTabs } from 'components/tabs';
import { AboutUs } from 'pages/home/about';
import { Products } from 'pages/home/products';
import { ScrollToTop } from 'components/scroll-top';
import { RewardsAndRecognitions } from 'pages/home/rewards-recognitions';
import { NewsLetters } from 'pages/home/news-letters';

const tabs = [
    { name: "About Payments & Digital Services", value: 1 },
    { name: "Tech Streams", value: 2 },
    { name: "Rewards & Recognition", value: 3 },
    { name: "News letter", value: 4 },
]


export const Teams = () => {
    const [currentTabvalue, setCurrentTabValue] = React.useState(1);

    const handleChange = useCallback((event, newValue) => {
        setCurrentTabValue(newValue);
    }, []);

    const renderCurrentTabContent = () => {
        if (currentTabvalue === 2) {
            return <Products />
        }
        if (currentTabvalue === 3) {
            return <RewardsAndRecognitions />
        }
        if (currentTabvalue === 4) {
            return <NewsLetters />
        }
        return <AboutUs />
    }

    const props = {
        row: true,
        tabs: tabs,
        handleChange: handleChange,
        currentTabvalue: currentTabvalue
    }

    return (
        <section id="teams-section">
            <div className="about-us">
                <BaseTabs {...props}>
                    {renderCurrentTabContent()}
                </BaseTabs>
            </div>
            <ScrollToTop />
        </section>
    )
}
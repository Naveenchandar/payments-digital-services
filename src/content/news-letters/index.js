// May
import May24NewsLetterPdf from "images/news-letters/pdf/2024/may_24.pdf";
import BannerMayImage from "images/news-letters/may/banner.png";

// APRIL
import April24NewsLetterPdf from "images/news-letters/pdf/2024/april_24.pdf";
import BannerAprilImage from "images/news-letters/april/banner.png";

// MARCH
import BannerMarchImage from "images/news-letters/march/banner.png";
import March24NewsLetterPdf from "images/news-letters/pdf/2024/march_24.pdf";

// FEBRUARY
import BannerFebruaryImage from "images/news-letters/february/banner.png";
import February24NewsLetterPdf from "images/news-letters/pdf/2024/february_24.pdf";

// JANUARY
import BannerJanuaryImage from "images/news-letters/january/banner.png";
import January24NewsLetterPdf from "images/news-letters/pdf/2024/january_24.pdf";

// 2023
import EndOfYear2023Pdf from "images/news-letters/pdf/2023/eoy.pdf";
import Banner2023Image from "images/news-letters/pdf/2023/banner.png";


export const newsLetters = {
    "2024": [
        {
            title: "May, 24",
            cardTitle: "May Key Notes",
            url: May24NewsLetterPdf,
            media: {
                source: {
                    url: BannerMayImage
                },
                type: "IMAGE"
            },
            cardSubtitle: ``,
            cardDetailedText: ``
        },
        {
            title: "April, 24",
            cardTitle: "April Key Notes",
            url: April24NewsLetterPdf,
            media: {
                // name: "Battle of britain",
                source: {
                    url: BannerAprilImage
                },
                type: "IMAGE"
            },
            cardSubtitle: ``,
            cardDetailedText: ``
        },
        {
            title: "March, 24",
            cardTitle: "March Key Notes",
            url: March24NewsLetterPdf,
            media: {
                source: {
                    url: BannerMarchImage
                },
                type: "IMAGE"
            },
            cardSubtitle: ``,
            cardDetailedText: ``
        },
        {
            title: "February, 24",
            cardTitle: "February key notes.",
            url: February24NewsLetterPdf,
            media: {
                source: {
                    url: BannerFebruaryImage
                },
                type: "IMAGE"
            },
            cardSubtitle: ``,
            cardDetailedText: ``
        },
        {
            title: "January, 24",
            cardTitle: "January key notes.",
            url: January24NewsLetterPdf,
            media: {
                source: {
                    url: BannerJanuaryImage
                },
                type: "IMAGE"
            },
            cardSubtitle: ``,
            cardDetailedText: ``
        },
    ],
    "2023": [
        {
            title: "2023",
            cardTitle: "2023 Key Notes",
            url: EndOfYear2023Pdf,
            media: {
                // name: "Battle of britain",
                source: {
                    url: Banner2023Image
                },
                type: "IMAGE"
            },
            cardSubtitle: ``,
            cardDetailedText: ``
        },
    ]
}
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Tooltip } from '@mui/material';

export const ScrollToTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
            behavior: 'smooth', top: 0
        });
    }

    return (
        <div>
            <Tooltip title="Scroll to top">
                <KeyboardArrowUpIcon
                    style={{
                        position: "fixed",
                        bottom: 10,
                        right: 10,
                        display: "block",
                        backgroundColor: "#f49214",
                        borderRadius: "50%",
                        width: "24px",
                        height: "24px",
                        cursor: "pointer"
                    }}
                    onClick={scrollToTop}
                />
            </Tooltip>
        </div>
    )
}
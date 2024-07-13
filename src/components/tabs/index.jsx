import { HorizontalTabs } from "./HorizontalTab"
import { VerticalTabs } from "./VerticalTab"

export const BaseTabs = ({ row, ...rest }) => {
    if (row) return <HorizontalTabs {...rest} />
    return <VerticalTabs {...rest} />
}
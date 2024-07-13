export const Underline = ({ width }) => {
    if (!width) return null;
    return (
        <div
            className="my-2"
            style={{ height: "4px", width, backgroundColor: "#f49214", margin: "auto" }}
        ></div>
    )
}
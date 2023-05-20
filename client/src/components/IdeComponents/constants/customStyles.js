export const customStyles = {
    control: (styles) => ({
        ...styles,
        width: "100%",
        maxWidth: "10rem",
        minWidth: "8rem",
        borderRadius: "5px",
        fontSize: "0.5 rem",
        fontWeight: "500",
        lineHeight: "1.75 rem",
        cursor: "pointer",
        border: "2px solid blue",
    }),
    option: (styles) => {
        return {
            ...styles,
            color: "#000",
            fontSize: "0.8rem",
            lineHeight: "1.75rem",
            width: "100%",
            background: "#fff"
        };
    },
    menu: (styles) => {
        return {
            ...styles,
            backgroundColor: "#fff",
            maxWidth: "14rem",
            border: "2px solid blue",
            borderRadius: "5px",
        };
    },

    placeholder: (defaultStyles) => {
        return {
            ...defaultStyles,
            color: "#000",
            fontSize: "0.8rem",
            lineHeight: "1.75rem",
        };
    },
};
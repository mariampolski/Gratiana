const breakpoints = {
    desktop: 1280,
    tablet: 768,
    mobile: 480,
}
const media = {
    desktop: `(min-width: ${breakpoints.desktop}px)`,
    tablet: `(min-width: ${breakpoints.tablet}px)`,
    mobile: `(min-width: ${breakpoints.mobile}px)`,
}
const colors = {
    primaryColor: "#FF7839",
    primaryBlack: "#1C1B1F",
}

const typography = {
    navbar: {
        buttons: {
            fontFamily: "Comic Neue",
            fontSize: 24,
            fontStyle: "italic",
            fontWeight: 700,
            lineHeight: 28,
            letterSpacing: 0,
            textAlign: "left",
        },
    },
}
export const theme = {
    media,
    colors,
    typography,
}

const breakpoints = {
    desktop: 1440,
    tablet: 768,
    mobile: 320,
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

export const theme = {
    media,
    colors,
}

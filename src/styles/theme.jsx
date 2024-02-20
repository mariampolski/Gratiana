const breakpoints = {
    largeDesktop: 1920,
    middleDesktop: 1440,
    smallDesktop: 1024,
    tablet: 768,
    largeMobile: 480,
    mobile: 320,
}
const media = {
    largeDesktop: `(max-width: ${breakpoints.largeDesktop}px)`,
    middleDesktop: `(max-width: ${breakpoints.middleDesktop}px)`,
    smallDesktop: `(max-width: ${breakpoints.smallDesktop}px)`,
    tablet: `(max-width: ${breakpoints.tablet}px)`,
    largeMobile: `(max-width: ${breakpoints.largeMobile}px)`,
    mobile: `(min-width: ${breakpoints.mobile}px)`,
}
const colors = {
    primaryColor: "255, 120, 57",
    primaryBlack: "#1C1B1F",
}

const typography = {
    navbar: {
        buttons: {
            fontSize: 24,
            fontStyle: "italic",
            fontWeight: 700,
            lineHeight: 27.6,
            letterSpacing: 0,
            textAlign: "center",
        },
    },
    hero: {
        title: {
            largeDesktopMiddleDesktop: {
                fontSize: 64,
                fontStyle: "italic",
                fontWeight: 700,
                lineHeight: 73.6,
                letterSpacing: 0,
                textAlign: "left",
            },
            smallDesktop: {
                fontSize: 48,
                fontStyle: "italic",
                fontWeight: 700,
                lineHeight: 55.2,
                letterSpacing: 0,
                textAlign: "left",
            },
            tablet: {
                fontSize: 48,
                fontStyle: "italic",
                fontWeight: 700,
                lineHeight: 55.2,
                letterSpacing: 0,
                textAlign: "left",
            },
            mobile: {
                fontSize: 40,
                fontStyle: "italic",
                fontWeight: 700,
                lineHeight: 46,
                letterSpacing: 0,
                textAlign: "left",
            },
        },
        subTitle: {
            largeDesktopMiddleDesktop: {
                fontSize: 40,
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: 46,
                letterSpacing: 0,
                textAlign: "left",
            },
            smallDesktop: {
                fontSize: 36,
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: 41,
                letterSpacing: 0,
                textAlign: "left",
            },
            tablet: {
                fontSize: 36,
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: 41,
                letterSpacing: 0,
                textAlign: "left",
            },
            mobile: {
                fontSize: 24,
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: 27.6,
                letterSpacing: 0,
                textAlign: "left",
            },
        },
        heroButton: {
            largeDesktopMiddleDesktop: {
                fontSize: 32,
                fontStyle: "italic",
                fontWeight: 700,
                lineHeight: 37,
                letterSpacing: 0,
                textAlign: "center",
            },
            smallDesktopTablet: {
                fontSize: 24,
                fontStyle: "italic",
                fontWeight: 700,
                lineHeight: 28,
                letterSpacing: 0,
                textAlign: "center",
            },
            mobile: {
                fontSize: 20,
                fontStyle: "italic",
                fontWeight: 700,
                lineHeight: 23,
                letterSpacing: 0,
                textAlign: "center",
            },
        },
    },
}
export const theme = {
    breakpoints,
    media,
    colors,
    typography,
}

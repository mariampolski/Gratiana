import styled from "styled-components"

import { theme } from "../../styles/theme"
import ViewportCalculator from "../../styles/viewportCalculator"

export const MainContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1340px;
    height: fit-content;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid red;
    margin-top: 410px;
    margin-bottom: 20px;

    @media ${theme.media.smallDesktop} {
        width: 100%;
        margin-top: ${ViewportCalculator(400, "tablet")};
        margin-left: 5px;
        margin-right: auto;
    }
    @media ${theme.media.middleDesktop} {
        flex-direction: column;
        width: fit-content;
        margin-top: ${ViewportCalculator(250, "tablet")};
        margin-left: 10px;
        margin-right: auto;
    }
`
export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 852px;
    height: fit-content;
    border: 2px solid purple;

    @media ${theme.media.middleDesktop} {
        width: fit-content;
    }
`
export const Title = styled.div`
    display: flex;
    width: 779px;
    height: fit-content;
    margin-bottom: 10px;
    font-size: ${theme.typography.hero.title.largeDesktopMiddleDesktop
        .fontSize}px;
    font-style: ${theme.typography.hero.title.largeDesktopMiddleDesktop
        .fontStyle};
    font-weight: ${theme.typography.hero.title.largeDesktopMiddleDesktop
        .fontWeight};
    line-height: ${theme.typography.hero.title.largeDesktopMiddleDesktop
        .lineHeight}px;
    letter-spacing: ${theme.typography.hero.title.largeDesktopMiddleDesktop
        .letterSpacing}em;
    text-align: ${theme.typography.hero.title.largeDesktopMiddleDesktop
        .textAlign};
    border: 2px solid lime;

    @media ${theme.media.middleDesktop} {
        font-size: ${ViewportCalculator(48, "smallDesktop")};
        line-height: ${ViewportCalculator(55.2, "smallDesktop")};
        width: ${ViewportCalculator(718, "smallDesktop")};
    }
    @media ${theme.media.smallDesktop} {
        font-size: ${ViewportCalculator(48, "tablet")};
        line-height: ${ViewportCalculator(55.2, "tablet")};
        width: 100%;
    }
    @media ${theme.media.tablet} {
        font-size: ${ViewportCalculator(36, "largeMobile")};
        line-height: ${ViewportCalculator(41, "largeMobile")};
        width: 100%;
    }
    @media ${theme.media.largeMobile} {
        font-size: ${ViewportCalculator(36, "mobile")};
        line-height: ${ViewportCalculator(41, "mobile")};
        width: 100%;
    }
`

export const SubTitle = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    font-size: ${theme.typography.hero.subTitle.largeDesktopMiddleDesktop
        .fontSize}px;
    font-style: ${theme.typography.hero.subTitle.largeDesktopMiddleDesktop
        .fontStyle};
    font-weight: ${theme.typography.hero.subTitle.largeDesktopMiddleDesktop
        .fontWeight};
    line-height: ${theme.typography.hero.subTitle.largeDesktopMiddleDesktop
        .lineHeight}px;
    letter-spacing: ${theme.typography.hero.subTitle.largeDesktopMiddleDesktop
        .letterSpacing}em;
    text-align: ${theme.typography.hero.subTitle.largeDesktopMiddleDesktop
        .textAlign};
    border: 2px solid green;

    @media ${theme.media.middleDesktop} {
        font-size: ${ViewportCalculator(36, "smallDesktop")};
        line-height: ${ViewportCalculator(41, "smallDesktop")};
        width: ${ViewportCalculator(718, "smallDesktop")};
    }
    @media ${theme.media.smallDesktop} {
        font-size: ${ViewportCalculator(36, "tablet")};
        line-height: ${ViewportCalculator(41, "tablet")};
        width: ${ViewportCalculator(718, "tablet")};
    }
    @media ${theme.media.tablet} {
        font-size: ${ViewportCalculator(24, "largeMobile")};
        line-height: ${ViewportCalculator(27.6, "largeMobile")};
        width: 100%;
    }
    @media ${theme.media.largeMobile} {
        font-size: ${ViewportCalculator(24, "mobile")};
        line-height: ${ViewportCalculator(27.6, "mobile")};
        width: 100%;
    }
`
export const HeroButton = styled.button`
    display: flex;
    width: fit-content;
    height: fit-content;
    padding: 10px 20px;
    font-size: ${theme.typography.hero.heroButton.largeDesktopMiddleDesktop
        .fontSize}px;
    font-style: ${theme.typography.hero.heroButton.largeDesktopMiddleDesktop
        .fontStyle};
    font-weight: ${theme.typography.hero.heroButton.largeDesktopMiddleDesktop
        .fontWeight};
    line-height: ${theme.typography.hero.heroButton.largeDesktopMiddleDesktop
        .lineHeight}px;
    letter-spacing: ${theme.typography.hero.heroButton.largeDesktopMiddleDesktop
        .letterSpacing}em;
    text-align: ${theme.typography.hero.heroButton.largeDesktopMiddleDesktop
        .textAlign};

    @media ${theme.media.middleDesktop} {
        font-size: ${ViewportCalculator(24, "smallDesktop")};
        line-height: ${ViewportCalculator(28, "smallDesktop")};
        width: ${ViewportCalculator(295, "smallDesktop")};
        margin: 20px auto 15px 0;
        padding: ${ViewportCalculator(10, "smallDesktop")};
        ${ViewportCalculator(20, "smallDesktop")};
        justify-content: center;
    }
    @media ${theme.media.smallDesktop} {
        font-size: ${ViewportCalculator(24, "tablet")};
        line-height: ${ViewportCalculator(28, "tablet")};
        width: ${ViewportCalculator(295, "tablet")};
        margin: 20px auto 15px 0;
        padding: ${ViewportCalculator(10, "tablet")};
        ${ViewportCalculator(20, "tablet")};
        justify-content: center;
    }
    @media ${theme.media.largeMobile} {
        font-size: ${ViewportCalculator(16, "mobile")};
        line-height: ${ViewportCalculator(18.4, "mobile")};
        width: ${ViewportCalculator(210, "mobile")};
        margin: 20px auto 15px 0;
        padding: ${ViewportCalculator(10, "mobile")};
        ${ViewportCalculator(20, "tamobileblet")};
        justify-content: center;
    }
`

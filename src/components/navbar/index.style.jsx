import styled from "styled-components"

import LogoImg from "../../assets/logo.png"
import { theme } from "../../styles/theme"

import ViewportCalculator from "../../styles/viewportCalculator"

export const NavbarWrapper = styled.nav`
    display: flex;
    width: 100%;
    max-width: 1620px;
    height: fit-content;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 30px 50px;
    border: 2px solid purple;

    @media ${theme.media.smallDesktop} {
        padding: 10px 15px;
    }
`
export const NavbarLogo = styled.div`
    width: 88.68px;
    height: 41.42px;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${LogoImg});
`
export const NavbarButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: fit-content;
    width: 664px;
    border: 2px solid green;

    @media ${theme.media.smallDesktop} {
        width: 564px;
    }
    @media ${theme.media.tablet} {
        display: none;
    }
`

export const NavbarButton = styled.button`
    background-color: transparent;
    width: fit-content;
    height: fit-content;
    font-size: ${theme.typography.navbar.buttons.fontSize}px;
    font-style: ${theme.typography.navbar.buttons.fontStyle};
    font-weight: ${theme.typography.navbar.buttons.fontWeight};
    line-height: ${theme.typography.navbar.buttons.lineHeight}px;
    letter-spacing: ${theme.typography.navbar.buttons.letterSpacing}em;
    text-align: ${theme.typography.navbar.buttons.textAlign};
    border: 2px solid lime;
`
export const HamburgerNavbarButton = styled.button`
    position: relative;
    width: 30px;
    height: 3px;
    background-color: #1c1b1f;
    border: none;
    outline: none;
    display: none;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 10px;
        width: 30px;
        height: 3px;
        background-color: #1c1b1f;
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 10px;
        width: 30px;
        height: 3px;
        background-color: #1c1b1f;
    }
    @media ${theme.media.tablet} {
        display: block;
    }
`

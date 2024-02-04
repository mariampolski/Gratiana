import styled from "styled-components"

import LogoImg from "../../assets/logo.png"
import { theme } from "../../styles/theme"

export const NavbarWrapper = styled.nav`
    display: flex;
    width: 100%;
    height: fit-content;
    padding: 30px 50px 30px 50px;
    justify-content: space-between;
    align-items: center;
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
    width: 664px;
    height: fit-content;
`

export const NavbarButton = styled.button`
    background-color: transparent;
    width: fit-content;
    height: fit-content;
    font-family: ${theme.typography.navbar.buttons.fontFamily};
    font-size: ${theme.typography.navbar.buttons.fontSize}px;
    font-style: ${theme.typography.navbar.buttons.fontStyle};
    font-weight: ${theme.typography.navbar.buttons.fontWeight};
    line-height: ${theme.typography.navbar.buttons.lineHeight}px;
    letter-spacing: ${theme.typography.navbar.buttons.letterSpacing}em;
    text-align: ${theme.typography.navbar.buttons.textAlign};
    border: none;
`
export const navbarButtonsList = [
    "Home",
    "Benefits",
    "Cuisine",
    "Testimonials",
    "Reservation",
]

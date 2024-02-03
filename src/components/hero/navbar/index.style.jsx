import styled from "styled-components"

import { theme } from "../../../styles/theme"

import LogoIcon from "../../../assets/logo.png"
import CloseIcon from "../../../assets/close.png"

export const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px 0 15px;
    width: 100%;
    height: 70px;
    background-color: ${theme.colors.primaryColor};
`
const LogoIconWrapper = styled.div`
    height: fit-content;
    width: fit-content;
`

export const NavbarLogo = () => {
    return (
        <LogoIconWrapper>
            <img src={LogoIcon} alt="Gratiana" />
        </LogoIconWrapper>
    )
}

const CloseIconWrapper = styled.div`
    display: flex;
    height: fit-content;
    width: fit-content;
`
export const NavbarClose = () => {
    return (
        <CloseIconWrapper>
            <img src={CloseIcon} alt="Gratiana" />
        </CloseIconWrapper>
    )
}

const HamburgerMenuBars = styled.div`
    width: 30px;
    height: 3px;
    background-color: ${theme.colors.primaryBlack};
`

const HamburgerMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: fit-content;
    height: 20px;
`

export const NavbarHamburgerMenu = () => {
    return (
        <>
            <HamburgerMenuWrapper>
                <HamburgerMenuBars></HamburgerMenuBars>
                <HamburgerMenuBars></HamburgerMenuBars>
                <HamburgerMenuBars></HamburgerMenuBars>
            </HamburgerMenuWrapper>
        </>
    )
}

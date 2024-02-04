import {
    NavbarButton,
    NavbarButtonsWrapper,
    NavbarLogo,
    NavbarWrapper,
    navbarButtonsList,
} from "./index.style"

const Navbar = () => {
    const NavbarButtonMap = ({ label }) => <NavbarButton>{label}</NavbarButton>

    return (
        <NavbarWrapper>
            <NavbarLogo />
            <NavbarButtonsWrapper>
                {navbarButtonsList.map((buttonLabel, index) => (
                    <NavbarButtonMap key={index} label={buttonLabel} />
                ))}
            </NavbarButtonsWrapper>
        </NavbarWrapper>
    )
}

export default Navbar

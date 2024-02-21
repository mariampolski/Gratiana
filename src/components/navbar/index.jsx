import { useState } from "react"
import {
    NavbarButton,
    NavbarButtonsWrapper,
    NavbarLogo,
    NavbarWrapper,
    HamburgerNavbarButton,
} from "./index.style"

const navbarButtonsList = [
    {
        id: 1,
        title: "Home",
        link: "home",
    },
    {
        id: 2,
        title: "Benefits",
        link: "benefits",
    },
    {
        id: 3,
        title: "Cuisine",
        link: "cuisine",
    },
    {
        id: 4,
        title: "Testimonials",
        link: "testimonials",
    },
    {
        id: 5,
        title: "Reservation",
        link: "reservation",
    },
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        console.log({ isMenuOpen })
    }

    return (
        <NavbarWrapper>
            <NavbarLogo />
            <NavbarButtonsWrapper>
                {navbarButtonsList.map((item) => (
                    <NavbarButton key={item.id}>{item.title}</NavbarButton>
                ))}
            </NavbarButtonsWrapper>
            <HamburgerNavbarButton onClick={toggleMenu} />
        </NavbarWrapper>
    )
}

export default Navbar

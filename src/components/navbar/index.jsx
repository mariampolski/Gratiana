import {
    NavbarButton,
    NavbarButtonsWrapper,
    NavbarLogo,
    NavbarWrapper,
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
    return (
        <NavbarWrapper>
            <NavbarLogo />
            <NavbarButtonsWrapper>
                {navbarButtonsList.map((item) => (
                    <NavbarButton key={item.id}>{item.title}</NavbarButton>
                ))}
            </NavbarButtonsWrapper>
        </NavbarWrapper>
    )
}

export default Navbar

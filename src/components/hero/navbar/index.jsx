import styled from "styled-components"

import { media, Colors } from "../../layout/layout.style"

const Navbar = styled.div`
    @media ${media} {
        width: 100%;
        height: 70px;
        background-color: ${Colors.primaryColor};
    }
`

export default Navbar

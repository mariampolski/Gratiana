import styled from "styled-components"

import { theme } from "../../../styles/theme"
import HeroBackground from "../../../assets/hero-background.png"
export const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: auto;
    padding-right: auto;
    background: linear-gradient(
            rgba(${theme.colors.primaryColor}, 0.93),
            rgba(${theme.colors.primaryColor}, 0.93)
        ),
        url(${HeroBackground});
    background-size: cover;
    background-repeat: no-repeat;
`

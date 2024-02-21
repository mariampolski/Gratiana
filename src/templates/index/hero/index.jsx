import Navbar from "../../../components/navbar/index"
import HeroMainContent from "../../../components/mainContent"
import { HeroWrapper } from "./index.style"

const Hero = () => {
    return (
        <>
            <HeroWrapper>
                <Navbar />
                <HeroMainContent />
            </HeroWrapper>
        </>
    )
}

export default Hero

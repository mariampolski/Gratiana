import {
    MainContentWrapper,
    TitleWrapper,
    Title,
    SubTitle,
    HeroButton,
} from "./index.style"

const HeroMainContent = () => {
    return (
        <MainContentWrapper>
            <TitleWrapper>
                <Title>
                    <p>Dine in a World of Culinary Delights at Gratiana</p>
                </Title>
                <SubTitle>
                    <p>
                        Experience a fusion of flavors and ambiance that will
                        tantalize your taste buds and leave you wanting more.
                    </p>
                </SubTitle>
            </TitleWrapper>
            <HeroButton>Make a Reservation Now</HeroButton>
        </MainContentWrapper>
    )
}
export default HeroMainContent

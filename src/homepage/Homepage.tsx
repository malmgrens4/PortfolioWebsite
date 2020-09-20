import React, {useState} from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import { Menu } from "../menu/basic_menu"
import ScrollAnimation from 'react-animate-on-scroll';
import {ContactTile} from "../centertile/ContactTile";
import {BoxedText} from "../BoxedText/BoxedText";
import {ScrollDownMarker} from "../ScrollDownMarker/ScrollDownMarker";
import {About} from "../About/About";
import {Projects} from "../Projects/Projects";
import {Timeline} from "../Timeline/Timeline";

const HomePageStyle = styled.div`
  display: flex;
  flex-flow: column;
  background-color: ${props => props.theme.primaryColor};
  max-width: 100%;
`

const MainContent = styled.div`
  position: relative;
  background: ${props => props.theme.gradient};
  width: 100%;
  display: flex;
  flex-flow: column;
`

const IntroSection = styled.div`
  display: flex;
  flex-flow: column;
  align-content: center;
  justify-content: center;
  background: ${props => props.theme.primaryColor};
  background-size: cover;
  flex-grow: 1;
  height: 100vh;
  overflow: hidden;
`

const TitleTextContainer = styled.div`
    justify-self: center;
    align-self: center;
    user-select: none;
`

const FirstMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  .MuiButton-textSecondary {
    color: ${props => props.theme.primaryText};
  }
  
`

const ScrollMarkerContainer = styled.div`
  position: absolute;
  height: 8vh;
  padding-left: 2em;
  justify-content: flex-end;
  align-self: flex-start;
  bottom: 0;
`

const Section = styled.div`
  position: relative;
  justify-content: center;
  align-content: center;
  display: flex;
`

const AboutContainer = styled.div`
  height: 100vh;
  position: relative;
  justify-content: center;
  align-content: center;
  display: flex;
`

const TimelineContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`

const FlipContainer = styled.div`
  perspective: 1000px;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 150px;
`

const FlipCard = styled.div`
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  .flipped {
    transform: rotateY(180deg);
   }
   display: flex;
`


const FlipFront = styled.div`
  backface-visibility: hidden;
  transition: transform 0.6s;
`

const FlipBack = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  backface-visibility: hidden;
  transition: transform 0.6s;
`


export const HomePage = () => {

    const [isFlipped, setIsFlipped] = useState(true)

    return (
        <HomePageStyle>
            <IntroSection>
                <FlipContainer>
                    <FlipCard>
                        <FlipFront className={isFlipped ? 'flipped' : ''}>
                        <TitleTextContainer>
                        <ScrollAnimation animateIn='fadeIn'
                                         animateOut='fadeOut'
                                         initiallyVisible={false}>
                            <BoxedText title={'Steven Malmgren'}/>
                        </ScrollAnimation>
                        </TitleTextContainer>
                        </FlipFront>
                        <FlipBack className={isFlipped ? '' : 'flipped'}>
                            <ContactTile onFlip={() => setIsFlipped(!isFlipped)}/>
                        </FlipBack>
                    </FlipCard>

                </FlipContainer>
                        <ScrollAnimation animateIn='fadeIn'
                                         animateOut='fadeOut'
                                         initiallyVisible={false}>
                            <FirstMenuContainer>
                            <Menu onContactClick={() => setIsFlipped(!isFlipped)}/>
                            </FirstMenuContainer>
                        </ScrollAnimation>
                        {/*<ContactTile onFlip={() => setIsFlipped(false)}/>*/}

                <ScrollAnimation animateIn='fadeIn'
                                 initiallyVisible={false}
                                 animateOnce={true}>
                    <ScrollMarkerContainer>
                        <ScrollDownMarker/>
                    </ScrollMarkerContainer>
                </ScrollAnimation>

            </IntroSection>

            <MainContent>
                <Section>
                    <AboutContainer>
                        <About title={'About'}/>
                    </AboutContainer>
                </Section>
                <Section>
                    <TimelineContainer>
                        <Timeline title={'Experience'}/>
                    </TimelineContainer>
                </Section>
                <Section>
                    <Projects title={'Projects'}/>
                </Section>
            </MainContent>

        </HomePageStyle>
    )
}
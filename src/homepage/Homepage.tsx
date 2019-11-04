import React, {ReactNode, useEffect, useState} from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import { VSplit } from "../vertical_split/VerticalSplit"
import { Menu } from "../menu/basic_menu"
import ReactCardFlip from 'react-card-flip';
import { CenterTile } from "../centertile/CenterTile";
import camping from '../images/camping.jpg'
import flare_orange from '../images/flare.png'
import flare_white from '../images/flare2.png'
import ScrollAnimation from 'react-animate-on-scroll';
import propic from '../images/profile_picture.png'
import {stringLiteral} from "@babel/types";
import {ContactTile} from "../centertile/ContactTile";
import {Button} from "@material-ui/core";
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

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-self: center;
  justify-self: center;
  height: 100vh;
  width: 100%;
`

const LeftPaneAboutStyle = styled.div`
    display: flex;
    flex-flow: column;
    align-content: center;
    justify-content: center;
    background: ${props => props.theme.primaryColor};
    width: 100%;
    text-align: center;
`

const ProfilePicture = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    justify-self: flex-end;
    position: absolute;
    right: -50px;
    top: 50px;
    @media (max-width: 768px) {
     display: none;
    }
`

const TitleText = styled.div`
  font-size: 3em;
`

const BottomMenuContainer = styled.div`
  position: absolute;
  bottom: 0;
  align-content: center;
  justify-content: center;
  width: 100%;
`

const LeftPaneAbout = () => {
    return(
        <StickyContainer>
            <ProfilePicture>
                <img width='100px' height='100px' src={propic}/>
            </ProfilePicture>
            <LeftPaneAboutStyle>
                   <TitleText>About</TitleText>
            </LeftPaneAboutStyle>
            <BottomMenuContainer>
                <Menu/>
            </BottomMenuContainer>
        </StickyContainer>
    )
}

const LeftPaneProjectsStyle = styled.div`
    display: flex;
    flex-flow: column;
    align-content: center;
    justify-content: center;
    background: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.secondaryText};
    width: 100%;
    text-align: center;
`

const RightPaneProjectStyle = styled.div`
    display: flex;
    flex-flow: column;
    align-content: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`

const RightPaneImages = styled.div`
    display: flex;
    width: 100%;
    flex-grow: 1;
`

//TODO update parallax on window resize
const LeftPaneProjects = () => {
    return (
        <StickyContainer>
            <LeftPaneProjectsStyle>
                <TitleText>Projects</TitleText>
            <BottomMenuContainer>
                <Menu/>
            </BottomMenuContainer>
            </LeftPaneProjectsStyle>
        </StickyContainer>
    )
}

const RightPaneProjects = () => {
    const wow: string[] = ['https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://media.npr.org/assets/img/2019/04/15/pyrenees_wide-b6131add57a389ff6f44cf54e1643db8086048fe-s1100-c15.jpg',
        'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    ]

    return(
        <RightPaneProjectStyle id='projects'>
        {
            wow.map( (image: any) => {
                return <img width={'100%'} src={image}/>
            })
        }
        </RightPaneProjectStyle>
    )
}

const TextPadding = styled.div`
  height: 100%;
  padding: 4em;
`

const RightPaneAboutStyle = styled.div`
  color: ${props => props.theme.secondaryText};
  background-color: ${props => props.theme.secondaryColor};
  height: 100%;
`

const RightPaneAbout = () => {
    return (
        <RightPaneAboutStyle id='about'>
            <TextPadding>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis felis sed orci tristique varius ut sit amet enim. Maecenas lectus felis, pulvinar ullamcorper finibus quis, mollis in dolor. Vivamus ut erat euismod, tincidunt odio quis, sodales felis. Cras vitae diam eu arcu suscipit consequat. In eu diam id quam accumsan sollicitudin non id velit. In mattis ac massa sit amet tincidunt. Nam eu ullamcorper elit, in fringilla lacus. Sed et elit ut arcu convallis bibendum. Fusce eu placerat mauris. Etiam semper lectus quis tortor imperdiet, quis maximus erat eleifend. Vivamus luctus libero augue, ut dapibus metus egestas quis. Duis gravida ligula a nunc fermentum, rutrum euismod ligula porttitor. Phasellus vel facilisis nulla. Donec non leo dolor. Phasellus dui arcu, pretium molestie vehicula quis, venenatis sit amet justo.

                    Integer fringilla posuere ligula. Donec at arcu dolor. Aliquam feugiat eleifend mauris, a lacinia dolor pellentesque eget. Duis nibh ex, consequat in tempus vitae, hendrerit in enim. Morbi nec nisl urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat diam quis nunc luctus, et venenatis dolor faucibus. Donec ac pellentesque ex. In hac habitasse platea dictumst.

                    Nam auctor ipsum tristique porta sodales. Integer mollis risus et nunc luctus, eget accumsan nulla consectetur. Vestibulum et nisl ac nulla bibendum lacinia. In placerat, purus non sollicitudin blandit, enim tellus imperdiet mauris, et tincidunt erat dolor vel massa. Cras justo nulla, aliquam a commodo ac, ultrices id turpis. Pellentesque sem dolor, venenatis eu commodo id, rutrum sed leo. Nunc a consequat arcu, vel feugiat nunc. Ut convallis eu justo vel sollicitudin. Vestibulum eleifend, nibh vel sodales vehicula, sem diam euismod libero, ac dapibus dolor ex a dolor.

                    Sed id nisl elit. Fusce eu urna orci. Suspendisse vehicula tristique tortor, non suscipit ante pretium non. Nullam et libero ultrices, feugiat leo sit amet, ullamcorper tortor. Vestibulum eu nisi a lorem facilisis vulputate. Sed rutrum enim eu sapien sollicitudin, at rhoncus odio consectetur. Sed ultrices viverra luctus. Vivamus pharetra vulputate odio, vitae tristique dui porta in. Vestibulum vel consequat velit, ac elementum elit. Pellentesque id risus dolor. Fusce non dui porttitor, varius quam vitae, pharetra sapien.

                    Ut vestibulum ornare ultricies. Morbi eget viverra nunc, a suscipit felis. Nunc ut tincidunt sem. Nullam accumsan dui ac vehicula rutrum. Fusce finibus et justo sed elementum. Ut ac velit varius, auctor felis et, venenatis ipsum. Mauris dignissim rutrum ipsum ac malesuada. Duis eget felis at risus iaculis semper.
                </p>
            </TextPadding>
        </RightPaneAboutStyle>
    )
}

const AboutSection = {
    leftContent: (<LeftPaneAbout/>),
    rightContent: (<RightPaneAbout/>)
}

const ProjectsSection = {
    leftContent: (<LeftPaneProjects/>),
    rightContent: (<RightPaneProjects/>)
}

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


const getRandomFlares = (numFlares: number) => {
    const flarePics = [flare_orange, flare_white];
    // Randomly select x of each type of flare, then randomly assign them a depth
    // the depth will determine the blur, closer = more blur
    let flares = [];
    for(let i = 0; i < numFlares; i++){
        let x = (Math.random() * 100) + 'vw'
        let y = (Math.random() * 100) + 'vh'
        let depth = (Math.random() * 5.5) + .9
        let flare = flarePics[Math.floor(Math.random() * flarePics.length)]
        flares.push(<Flare src={flare_white} depth={depth} x={x} y={y}/>)
    }
    return flares
}


type FlareProps = {
    src: string,
    depth: number,
    x: string,
    y: string,
}

const FlareParallax = styled(Parallax)`
  position: absolute;  
`

const Flare = ({src, depth, x, y}: FlareProps) => {

    const depthConstant = 20;
    const dimensionsScale = 90;
    const yScrollNumerator = 400;
    const yScrollMin = 10;
    const xScrollNumerator = 10;
    const xScrollMin = 1;
    const width = dimensionsScale/depth + 'px'
    const height = dimensionsScale/depth + 'px'

    const negative = () => {
        return Math.random() <= .5 ? -1 : 1
    }

    const yRandomParallaxScroll = (yScrollNumerator/depth + yScrollMin) * negative()
    const yParallaxRange = [-yRandomParallaxScroll, yRandomParallaxScroll];

    const xRandomParallaxScroll = (xScrollNumerator/depth + xScrollMin) * negative()
    const xParallaxRange = [-xRandomParallaxScroll, xRandomParallaxScroll];



    const getBlur = () => {
        return 'blur(' + (depthConstant / depth) + 'px' + ')';
    }


    return(
        <FlareParallax y={yParallaxRange} x={xParallaxRange} styleOuter={{left: x, top: y}}>
            <FlareStyle >
                <img src={src} style={{filter: getBlur(), width: width, height: height}}/>
            </FlareStyle>
        </FlareParallax>
    )

}

const FlareStyle = styled.div`
  width: 100vw;
  height: 100%;
`

const FlareContainer = styled.div`
  position: relative;
  max-width: 100%;
  width: 100vw;
`

const MainMenuContainer = styled.div`
  justify-self: center;
  align-self: center;
`

const FlexGrow = styled.div`
  flex-grow: 1;
`

const Centered = styled.div`
  position: absolute;
  align-self: center;
  justify-self: center;
  display: flex;
  height: 35vh;
  padding-bottom: 50vh;
`
const flares: ReactNode[] = getRandomFlares(60)

const TitleTextContainer = styled.div`
    width: 25vw;
    justify-self: center;
    align-self: center;
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

const AboutParallax = styled(Parallax)`
  display: flex;
  justify-content: center;
  align-content: center;
  justify-self: center;
  align-self: center;
  width: 100%;
`


const TimelineContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`

export const HomePage = () => {

    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <HomePageStyle>
            <IntroSection>
                <TitleTextContainer>
                <ScrollAnimation animateIn='fadeIn'
                                 animateOut='fadeOut'
                                 initiallyVisible={false}>
                    <BoxedText title={'Steven Malmgren'}/>
                </ScrollAnimation>
                </TitleTextContainer>

                <ScrollAnimation animateIn='fadeIn'
                                 animateOut='fadeOut'
                                 initiallyVisible={false}>
                    <FirstMenuContainer>
                    <Menu/>
                    </FirstMenuContainer>
                </ScrollAnimation>

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
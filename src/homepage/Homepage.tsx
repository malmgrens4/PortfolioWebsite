import React from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import { VSplit } from "../vertical_split/VerticalSplit"
import mountains from '../images/mountains.png'
import moon from '../images/moon.png'
import propic from '../images/profile_picture.png'
import {Menu} from "../menu/basic_menu"

const HomePageStyle = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column;
  background-color: ${props => props.theme.primaryColor};
  max-width:100%;
`

const ParallaxSection = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-flow: column;
  padding: 0;
  margin: 0;
  height: 100vh;
`

const MoonContainer = styled.div`
  display: flex;
  width: 100vw;
  max-width: 100%;
  justify-content: flex-end;
  position: absolute;
`

const Moon = styled.div`
  display: flex;
  width: 60vw;
  justify-content: center;
`

const MainContent = styled.div`
  position: relative;
  background: ${props => props.theme.primaryColor};
  width: 100%;
  display: flex;
  flex-flow: column;
`

const StickyContainer = styled.div`
  position: -webkit-sticky;
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

const MenuContainer = styled.div`
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
            <MenuContainer>
                <Menu/>
            </MenuContainer>
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
            <MenuContainer>
                <Menu/>
            </MenuContainer>
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

const testImage: string = './fractal_tree.png'
const testBackground: string  = 'https://miro.medium.com/max/3840/1*_kL-szqqP_Xw4ChHyIsoww.jpeg';
const testBackground2: string = 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/phoenix/15_Night_Camelback_from_MummyMtn_be017d0c-0452-41ca-926f-b38c0ce0205a.jpg'
export const HomePage = () => {

    return (
        <HomePageStyle>
            <ParallaxSection>
                <MoonContainer>
                    <Moon>
                        <Parallax y={['10', '-150']}>
                            <img height="100" width="100"
                                src={moon}
                            />
                        </Parallax>
                    </Moon>
                </MoonContainer>
                <Parallax y={['0', '5']}>
                    <img style={{}}
                               height={'500px'}
                               width={'100%'}
                               src={mountains}/>
                </Parallax>
            </ParallaxSection>
            <Menu/>
            <MainContent>
                <VSplit {...AboutSection}/>
                <VSplit {...ProjectsSection}/>
            </MainContent>

        </HomePageStyle>
    )
}
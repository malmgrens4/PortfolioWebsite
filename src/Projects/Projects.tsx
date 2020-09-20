import React, { useState } from 'react'
import styled from "styled-components"
import ScrollAnimation from 'react-animate-on-scroll';
import {Card} from "@material-ui/core";
import {classes} from "istanbul-lib-coverage";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import telegram_logo from '../images/telegram_logo.png'
import discord from '../images/discord_gif.gif'
import led from '../led_demo.gif'
import path_finder from '../path_find_demo.gif'
import koala from '../koala_demo.gif'
import camping from '../images/camping.jpg'
import {Parallax} from "react-scroll-parallax/cjs";
import {SectionTitle} from "../SectionTitle/SectionTitle";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

type ProjectProps = {
    title: string
}

const ProjectContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  justify-self: center;
  align-self: center;
  text-align: center;
  li {
    background: transparent !important;
  }
`

type ProjectGridProps = {
    children: any[]
}

const ProjectGridContainer = styled.div`
  display: flex;
  flex-flow: column;
`

const GridItemContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: ${props => props.theme.spacing};
  flex-grow: 1;
`

const ScrollFlex = styled(ScrollAnimation)`
  display: flex;
`


type ProjectTileProps = {
    img: any,
    title: string,
    description: string
}


const ProjectTileContainer = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  overflow: hidden;

`

const ProjectInfo = styled.div`
  justify-self: center;
  align-self: flex-end;
  max-width: 50vw;
  margin-top: -10%;
  margin-right: 10%;
`

const ProjectImageContainer = styled.div`
    align-self: center;
`

const ProjectImage = styled.img`
  min-height: 65vh;
  max-height: 65vh;
  max-width: 100%;
`

const ProjectTile = (props: ProjectTileProps) => {
    const {img, title, description} = props
    return(
        <ProjectTileContainer>
            <ProjectImageContainer>
                <ScrollFlex animateIn='slideInLeft'
                            initiallyVisible={false}
                            animateOnce={true}
                >
                    <ProjectImage src={img}/>
                </ScrollFlex>
            </ProjectImageContainer>
            <ProjectInfo>
                <ScrollFlex animateIn='slideInRight'
                            initiallyVisible={false}
                            animateOnce={true}
                            >
                    <Parallax x={[20, 0]}>
                        <Card>
                        <CardActionArea>
                            <CardMedia
                                image={img}
                                title={title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                View More
                            </Button>
                        </CardActions>
                    </Card>
                    </Parallax>
                </ScrollFlex>
            </ProjectInfo>

        </ProjectTileContainer>
    )
}

export const Projects = (props: ProjectProps) => {
    return(
        <ProjectContainer id='projects' style={{width: '100vw'}}>
            <SectionTitle title={props.title} animateIn={'fadeIn'} animateOut={'fadeOut'}/>
            <Carousel
                      swipeable
                      stopOnHover
                      emulateTouch
                      centerSlidePercentage={75}
                      centerMode
                      showIndicators={false}
                      showStatus={false}
                      selectedItem={1}
                      useKeyboardArrows
                      >
                <div style={{userSelect: 'none', margin: '10%'}}>
                    <div style={{boxShadow: '0px 0px 40px -10px rgba(0,0,0,0.75)'}}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Koala Demo"
                                    image={koala}
                                    title="Koala Demo"
                                />
                                <CardContent style={{textAlign: 'left', padding: '24px'}}>
                                    <Typography gutterBottom variant="h5" component="h2" style={{paddingBottom: '12px'}}>
                                        KOALA
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Discord bot allowing users to bet on other member's games. Users earn currency based on performance and bet on other users.
                                        In addition to the discord bot a user facing application can be used to place bets, review bet history, and view charts.
                                        Python, Flask, SQLite3, React, and GraphQL.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
                <div style={{userSelect: 'none', margin: '10%'}}>
                    <div style={{boxShadow: '0px 0px 40px -10px rgba(0,0,0,0.75)'}}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="LED Matrix Demo"
                                    image={led}
                                    title="LED MATRIX"
                                />
                                <CardContent style={{textAlign: 'left', padding: '24px'}}>
                                    <Typography gutterBottom variant="h5" component="h2" style={{paddingBottom: '12px'}}>
                                        LED MATRIX
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        LED Matrix controllable over WIFI or Bluetooth. Allows users to set the matrix and create custom animations. C++ and way too much solder.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
                <div style={{userSelect: 'none', margin: '10%'}}>
                    <div style={{boxShadow: '0px 0px 40px -10px rgba(0,0,0,0.75)'}}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Path Finder"
                                    title="Path Finder"
                                    image={path_finder}
                                />
                                <CardContent style={{textAlign: 'left', padding: '24px'}}>
                                    <Typography gutterBottom variant="h5" component="h2" style={{paddingBottom: '12px'}}>
                                        Path Finder
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Application for visualizing different pathing algorithms. User can create custom mazes and watch each step the algorithm takes to solve it. Javascript, React, and Redux.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
                {/*<ProjectTile img={discord} title={'Beeven Bot'} description={'Discord Bot to manage live betting system.'}/>*/}
                {/*<ProjectTile img={camping} title={'Path Finder'} description={'Interactive web application to learn different pathing algorithms.'}/>*/}
                {/*<ProjectTile img={led} title={'LED Grid'} description={'Websocket updates to grid of leds.'}/>*/}
                {/*<ProjectTile img={camping} title={'Untitled'} description={'I have to make up a project that sounds really impressive here.'}/>*/}
            </Carousel>
        </ProjectContainer>
    )
}

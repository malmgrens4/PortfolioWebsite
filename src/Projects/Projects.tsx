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
import camping from '../images/camping.jpg'
import {Parallax} from "react-scroll-parallax/cjs";



type TitleProps = {
    title:string
}

const TitleContainer = styled.div`
  justify-self: center;
  align-self: center;
`

const Title = styled.div`
  font-size: 1em;
  border-bottom: ${props => props.theme.secondaryColor} solid 2px;
  padding: ${props => props.theme.spacing};
`

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
`


const SectionTitle = (props: TitleProps) => {
    const {title} = props
    return (
        <TitleContainer>
            <ScrollAnimation animateIn={'flipInX'} animateOut={'fadeOut'} animateOnce={true}>
                <Title>{title}</Title>
            </ScrollAnimation>
        </TitleContainer>
    )
}


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

const ProjectGrid = (props: ProjectGridProps) => {
    const {children} = props
    return(

        <ProjectGridContainer>
            {children.map((project) => {return <GridItemContainer>

                                                                    {project}

                                                            </GridItemContainer>})}
        </ProjectGridContainer>
    )
}

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
  margin-top: -10%;
  margin-right: 10%;
`

const ProjectImageContainer = styled.div`
    align-self: center;
`

const ProjectImage = styled.img`
  max-height: 50vh;
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
    const projects = [ <ProjectTile img={camping} title={'Beeven Bot'} description={'Discord Bot to manage live betting system.'}/>,
                       <ProjectTile img={camping} title={'Beeven Bot'} description={'Discord Bot to manage live betting system.'}/>,
                       <ProjectTile img={camping} title={'Beeven Bot'} description={'Discord Bot to manage live betting system.'}/>,
                       <ProjectTile img={camping} title={'Beeven Bot'} description={'Discord Bot to manage live betting system.'}/>];

    return(
        <ProjectContainer id='projects'>
            <SectionTitle title={props.title}/>
            <ProjectGrid children={projects}/>
        </ProjectContainer>
    )
}

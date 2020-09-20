import React, { useState } from 'react'
import styled from "styled-components"
import ScrollAnimation from 'react-animate-on-scroll';
import {SectionTitle} from "../SectionTitle/SectionTitle";
import Typography from "@material-ui/core/Typography";

type AboutProps = {
    title: string
}

const AboutContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  justify-self: center;
  align-self: center;
  text-align: center;
`

const Description = styled.div`
  font-size: ${props => props.theme.largeFont};
  text-align: center;
  padding-top: ${props => props.theme.spacing};
`

const DescriptionContainer = styled.div`
  justify-self: center;
  align-self: center;
`

const SubDescription = styled.div`
  padding-top: ${props => props.theme.spacing};
  justify-self: center;
  align-self: center;
  text-align: center;
`


export const About = (props: AboutProps) => {
    return(
        <AboutContainer id='about'>
            <SectionTitle title={props.title} animateIn={'slideInUp'} animateOut={'fadeOut'}/>
            <DescriptionContainer>
                <Description>
                    <ScrollAnimation animateIn={'slideInUp'} animateOut={'fadeOut'} duration={1} animateOnce={true}>
                        <div style={{textAlign: 'left', padding: "16px"}}>
                        <Typography variant="h5">
                            I'm a Software Engineer interested in software architecture,
                            UX design,
                            and embedded systems.
                        </Typography>
                        </div>
                    </ScrollAnimation>
                </Description>
                <SubDescription>
                    <ScrollAnimation animateIn={'slideInUp'} animateOut={'fadeOut'} duration={1} animateOnce={true}>
                        <div style={{textAlign: 'left', padding: "16px"}}>I started writing software for friends with small Java applications. <br/>
                        I've built tools to help us track finances and settle our bets with fake currency. <br/>
                        Professionally, I've maintained databases for auto production lines, and helped to create in-house supervisory control and data acquisition applications.<br/>
                        This year I've worked on full stack applications for government contracts as a developer and Scrum Master. <br/>
                        In my free time I've been exploring IOT with micro-controllers.</div>
                    </ScrollAnimation>
                </SubDescription>
            </DescriptionContainer>
        </AboutContainer>
    )
}


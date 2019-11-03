import React, { useState } from 'react'
import styled from "styled-components"
import ScrollAnimation from 'react-animate-on-scroll';
import {SectionTitle} from "../SectionTitle/SectionTitle";

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
  width: 50%;
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
                        I'm a Software Engineer interested in software architecture,
                        UX design,
                        and embedded systems.
                    </ScrollAnimation>
                </Description>
                <SubDescription>
                    <ScrollAnimation animateIn={'slideInUp'} animateOut={'fadeOut'} duration={1} animateOnce={true}>
                        With 3 years of experience I've maintained databases for auto production lines, designed features for government entities, and a few other things in my spare time.
                    </ScrollAnimation>
                </SubDescription>
            </DescriptionContainer>
        </AboutContainer>
    )
}


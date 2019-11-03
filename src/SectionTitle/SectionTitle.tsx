import React, { useState } from 'react'
import styled from "styled-components";
import ScrollAnimation from 'react-animate-on-scroll';

type TitleProps = {
    title:string
    animateIn?:string
    animateOut?:string
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

export const SectionTitle = (props: TitleProps) => {
    const {title, animateIn, animateOut} = props
    return (
        <TitleContainer>
            <ScrollAnimation animateIn={animateIn} animateOut={animateOut} animateOnce={true}>
                <Title>{title}</Title>
            </ScrollAnimation>
        </TitleContainer>
    )
}
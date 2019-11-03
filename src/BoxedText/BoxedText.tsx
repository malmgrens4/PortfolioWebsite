import React, { useState } from 'react'
import styled from "styled-components"


type BoxProps = {
    title: string
}

const BorderedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  border: .1em solid ${props => props.theme.secondaryColor};
`

const Title = styled.h1`
  font-size: 2em;
  padding: 1em;
`

export const BoxedText = (props: BoxProps) => {
    const {title} = props

    return(
        <BorderedContainer>
            <Title>{title}</Title>
        </BorderedContainer>
    )

}
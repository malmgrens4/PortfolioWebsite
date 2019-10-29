import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-grow: 1;
`

const IconViewContainer = styled.a`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-content: center;
  padding: 1em;
  a{
    unset: all;
  }
`

const IconStyle = styled.img`
  max-width: 2.78em;
  max-height: 2.78em;
`

const LabelStyle = styled.div`
  flex-grow: 4;
  justify-content: flex-start;
  align-content: center;
  display:flex;
`

const Label = styled.div`
  justify-self: flex-start;
  align-self: center;
  padding-left: .5em;
  font-size: .9em;
`

type IconViewProps = {
    src: string
    link?: string
    label?: string
    onClick?: Function
}

export const IconView = ({src, link, label}: IconViewProps) => {
    return (
        <Container>
            <IconViewContainer href={link} target="_blank">
                <IconStyle src={src}/>
                {!!label ?
                    <LabelStyle>
                        <Label>{label}</Label>
                    </LabelStyle>
                    : ''
                }
            </IconViewContainer>
        </Container>
    )
}
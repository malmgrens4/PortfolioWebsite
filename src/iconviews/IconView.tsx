import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-grow: 1;
`

const IconViewContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-content: center;
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
  padding-left: 1em;
  font-size: .9em;
`

type IconViewProps = {
    src: string
    link: string
    label?: string
}

export const IconView = ({src, link, label}: IconViewProps) => {
    return (
        <Container>
            <a href={link}>
                <IconViewContainer>
                    <IconStyle src={src}/>
                    {label ?
                        <LabelStyle>
                            <Label>{label}</Label>
                        </LabelStyle>
                        : ''
                    }
                </IconViewContainer>
            </a>
        </Container>
    )
}
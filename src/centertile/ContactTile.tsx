import React from 'react'
import styled from 'styled-components'
import {FormControl} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import BackArrow from "@material-ui/icons/ArrowBack";
import Paper from '@material-ui/core/Paper'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'

const TileContainer = styled(Paper)`
  height: 100%;
  flex: 1;
  display: flex;
  justify-self: center;
  align-self: center;
  flex-flow: row;
  color: ${props => props.theme.primaryText};
  @media (max-width: 768px) {
     flex-flow: column;
     width: 80vw;
  }
  
`

const StyledBackArrow = styled(BackArrow)`
  position: absolute;
  padding: .5em;
`

type TileProps = {
    onFlip: any,
}

const Logos = () => {
    return (<div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-between', fontSize: '48px'}}>
        <a style={{color: 'inherit'}} href="https://www.linkedin.com/in/steven-malmgren-01/"><LinkedInIcon fontSize="inherit"/></a>
        <a style={{color: 'inherit'}} href="https://github.com/malmgrens4"><GitHubIcon fontSize="inherit"/></a>
        <a style={{color: 'inherit'}} href="mailto:4smalmgren@gmail.com"><MailIcon fontSize="inherit"/></a>
    </div>)
}

export const ContactTile = ({onFlip}: TileProps) => {
    return (
        <TileContainer elevation={1}>
            <StyledBackArrow onClick={onFlip}/>
            <div style={{display: 'flex', flex: 1, padding: '0px 40px'}}>
            <Logos/>
            </div>
        </TileContainer>
    )
}

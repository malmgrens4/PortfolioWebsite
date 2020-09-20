import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';
import { IconView } from "../iconviews/IconView";
import propic from '../images/profile_picture.png'
import resume_logo from '../images/resume_logo.png'
import github_logo from '../images/github.png'
import linkedin_logo from '../images/linkin.png'
import mail_logo from '../images/mail_logo.png'

const TileContainer = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  flex-flow: row;
  box-shadow: 0px 0px 20px -4px rgba(0,0,0,0.75);
  width: 30vw;
  height: 100%;
  @media (max-width: 768px) {
     flex-flow: column;
     width: 80vw;
  }
`

const ProfileHeader = styled.div`
  background-color: ${props => props.theme.primaryColor};
  height: 100%;
  width: 100%;
  display: flex;  
  flex-flow: column;
  align-self: center;
  justify-self: center;
  flex-grow: 1;
  padding-left: 1em;
  padding-right: 1em;  
`

const IconSection = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-self: flex-end;
  align-self: flex-end;
  padding-bottom: 1em;
  @media (max-width: 768px) {
     flex-flow: row wrap;
  }
`

const IconContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    @media (max-width: 768px) {
     justify-content: center;
    }
    @media (height: 768px) {
     flex-flow: row;
    }
    
`

const ProfileTitle = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-content: flex-end;
  flex-grow: 1;
  font-size: 2em;
  padding-bottom: .5em;
  border-bottom: 2px solid;
`

const LinkButton = styled.button`
  all: unset;
`

const ProfileDescription = styled.div`
  padding-top: .5em;
  font-size: 1.4em;
  justify-self: center;
  align-self: center;
  flex-grow: 1;
`

const HighlightSpan = styled.span`
  align-self: flex-end;
  color: ${props => props.theme.secondaryColor}
`

type TileProps = {
    onFlip: any,
    children: never[]
}

export const CenterTile = ({onFlip}: TileProps) => {
    return (
        <TileContainer>

        <ProfileHeader>
            <ProfileTitle>
                <HighlightSpan> Steven Malmgren</HighlightSpan>
            </ProfileTitle>
            <ProfileDescription>
                Software Engineer
            </ProfileDescription>
        </ProfileHeader>
            <IconContainer>
                <IconSection>
                    <IconView src={github_logo} link='https://github.com/malmgrens4'/>
                    <IconView src={resume_logo} link='#blank'/>
                    <IconView src={linkedin_logo} link='https://www.linkedin.com/in/steven-malmgren-01/'/>
                    <LinkButton onClick={onFlip}><IconView src={mail_logo}/></LinkButton>
                </IconSection>
            </IconContainer>
        </TileContainer>
    )
}

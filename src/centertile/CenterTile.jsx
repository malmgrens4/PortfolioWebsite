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
  position: absolute;
  display: flex;
  justify-self: center;
  align-self: center;
  flex-flow: column wrap;
  max-width: 810px;
  min-height: 500px;
  width: 75vw;
  height: 40vh;
  box-shadow: 0px 0px 20px -4px rgba(0,0,0,0.75);
`

const ProfileHeader = styled.div`
  display: flex;  
  height: 50%;
`

const ProPic = styled.img`
  width: 100px;
  height: 100px;
  padding: .5em 2em 0em 2em;
`

const HeaderLabels = styled.div`
  display: flex;
  flex-flow: column;
  padding-top: 1.2em ;

  h2{
    font-size: 1em;
  }
  h3 {
    font-size: .9em;
  }
`

const IconSection = styled.div`
  display: flex;
  flex-flow: row;
  justify-self: flex-end;
  align-self: flex-end;
  padding-bottom: 1em;
  
`

const IconContainer = styled.div`
    display: flex;
    background: white;
    height: 100%;
    justify-content: flex-end;
    padding-right: 2em;
`

const ProfileTitle = styled.div`
  display: flex;
  flex-grow: 1;
  align-self: center;
  justify-content: flex-start;
  align-content: center;
`

export const CenterTile = () => {
    return (
        <TileContainer>

        <ProfileHeader>
            <ProfileTitle>
                <ProPic src={propic}/>
                <HeaderLabels>
                    <h2>Steven Malmgren</h2>
                    <h3>Software Engineer</h3>
                </HeaderLabels>
            </ProfileTitle>
        </ProfileHeader>
            <IconContainer>
                <IconSection>
                    <IconView src={github_logo} link='https://fonts.google.com/'/>
                    <IconView src={resume_logo} link='https://fonts.google.com/'/>
                    <IconView src={linkedin_logo} link='https://fonts.google.com/'/>
                    <IconView src={mail_logo} link='https://fonts.google.com/'/>
                </IconSection>
            </IconContainer>

        </TileContainer>
    )
}

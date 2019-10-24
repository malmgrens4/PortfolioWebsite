import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';
import { IconView } from "../iconviews/IconView";
import propic from '../images/profile_picture.png'
import resume_logo from '../images/resume_logo.png'

const TileContainer = styled.div`
  position: absolute;
  display: flex;
  justify-self: center;
  align-self: center;
  flex-flow: column;
  width: 75vh;
  height: 40vh;
  border: 2px solid black;
`

const ProfileHeader = styled.div`
  display: flex;  
  width: 75%;
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
  flex-flow: row-reverse;
  justify-self: flex-end;
  align-self: flex-end;
  border: 2px solid pink;
`

const IconContainer = styled.div`
    display: flex;
    background: white;
    height: 100%;
    justify-content: flex-end;
`



export const CenterTile = () => {
    return (
        <TileContainer>

        <ProfileHeader>
                <ProPic src={propic}/>
                <HeaderLabels>
                    <h2>Steven Malmgren</h2>
                    <h3>Software Engineer</h3>
                </HeaderLabels>
            </ProfileHeader>
            <IconContainer>
                <IconSection>
                    <IconView src={resume_logo} link='https://fonts.google.com/'/>
                    <IconView src={resume_logo} link='https://fonts.google.com/'/>
                    <IconView src={resume_logo} link='https://fonts.google.com/'/>
                    <IconView src={resume_logo} link='https://fonts.google.com/'/>
                </IconSection>
            </IconContainer>

        </TileContainer>
    )
}

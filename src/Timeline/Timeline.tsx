import React, { useState } from 'react'
import styled from "styled-components"
import StepConnector from '@material-ui/core/StepConnector';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import resume_logo from '../images/resume_logo.png'
import 'react-vertical-timeline-component/style.min.css';
import {SectionTitle} from "../SectionTitle/SectionTitle";
import {Typography} from "@material-ui/core";


const TimelineContainer = styled.div` 
  min-height: 100vh;
  overflow-x: hidden;
  padding: 2em;
  display: flex;
  flex-flow: column;
  align-content: center;
`


const VTimelineElement = styled(VerticalTimelineElement)`
  color: ${props => props.theme.primaryText};
  background-color: ${props => props.theme.gradient};
  .vertical-timeline-element-content {
    background: none;
    border: none !important;
  }
  .vertical-timeline-element-date {
    padding-left: 1em !important;
    padding-right: 1em !important;
  }
  
  .vertical-timeline-element-content-arrow {
    display: none;
  }
  
  .vertical-timeline-element-icon {
    background-color: ${props => props.theme.secondaryColor} !important;
  }
  
`

const VTimelineContainer = styled(VerticalTimeline)`
  margin-top: 4em !important;
  margin-bottom: 4em !important;
`

type TimelineProps = {
    title: string
}

export const Timeline = (props: TimelineProps) => {
    return(
        <TimelineContainer id='experience'>
            <SectionTitle title={props.title} animateIn={'fadeIn'} animateOut={'fadeOut'}/>
            <VTimelineContainer>
                <VTimelineElement
                    className="vertical-timeline-element--work"
                    date="2014-2019"
                    icon={<div style={{display: 'flex', flex: '1', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff'}}><img src="/RIT.png" width={50} height={50}/></div>}
                    iconStyle={{overflow: 'hidden', display: 'flex', justifyContent: 'center'}}
                >
                    <h3 className="vertical-timeline-element-title"><Typography variant="h5">Rochester Institute of Technology</Typography></h3>
                    <h4 className="vertical-timeline-element-subtitle">B.S. Software Engineering</h4>
                    <h4 className="vertical-timeline-element-subtitle">Rochester, NY</h4>
                    <p>
                        <i>Relevant Courses</i>: Engineering of Software Subsystems, Mathematical Models of Software, Engineering Embedded Systems•Engineering of Concurrent Distributed Systems,
                        Software Testing, Analysis of Algorithms, Cryptography <br/>
                        <i>Extracurriculars</i>: Swimming, Badminton, Weight Lifting
                    </p>
                </VTimelineElement>
                <VTimelineElement
                    className="vertical-timeline-element--work"
                    date="2015-2016"
                    icon={<div style={{display: 'flex', flex: '1', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff'}}><img src="/rheonix_logo.png" width={60} height={50}/></div>}
                    iconStyle={{overflow: 'hidden', display: 'flex', justifyContent: 'center'}}
                >
                    <h3 className="vertical-timeline-element-title"><Typography variant="h5">Rheonix</Typography></h3>
                    <h4 className="vertical-timeline-element-title">Testing Engineer</h4>
                    <h4 className="vertical-timeline-element-subtitle">Ithaca, NY</h4>
                    <p>
                        Worked with a multidisciplinary team of software, electrical, and biomedical engineers.
                        Generated verification and validation protocols for the Rheonix Encompass MDx instrument.
                        Wrote JUnit tests for embedded software on the instrument.

                    </p>
                </VTimelineElement>

                <VTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017-2019"
                    icon={<div style={{display: 'flex', flex: '1', justifyContent: 'center', alignItems: 'center', backgroundColor: '#22559E'}}><img src="/gm_logo.png" width={50} height={50}/></div>}
                    iconStyle={{overflow: 'hidden', display: 'flex', justifyContent: 'center'}}
                >
                    <h3 className="vertical-timeline-element-title"><Typography variant="h5">General Motors</Typography></h3>
                    <h4 className="vertical-timeline-element-title">Software Developer</h4>
                    <h4 className="vertical-timeline-element-subtitle">Rochester, NY</h4>
                    <p>
                        Working alongside a team of controls engineers I developed a website for workers on the floor to track parts on the assembly line.
                        The project grew allowing users to track defects on the production line in real time, file reports explaining equipment downtime, and even automatically shut down machines if too many defects were detected.
                        This was done with Python (Flask), JS/HTML/CSS, and SQL-Server.
                    </p>
                </VTimelineElement>

                <VTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019 - present"
                    icon={<div style={{display: 'flex', flex: '1', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff'}}><img src="/octo-consulting.png" width={50} height={50}/></div>}
                    iconStyle={{overflow: 'hidden', display: 'flex', justifyContent: 'center'}}
                >
                    <h3 className="vertical-timeline-element-title"><Typography variant="h5">Connexta/Octo Consulting</Typography></h3>
                    <h3 className="vertical-timeline-element-subtitle">Software Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Phoenix, AZ</h4>
                    <p>
                        With a team of five other software engineers I helped build a final solution for a government contract. Six months after starting I moved into the Scrum Master role in addition to my development position.
                        I developed full-stack application features using Java, GraphQL, and React.
                    </p>
                </VTimelineElement>

            </VTimelineContainer>
        </TimelineContainer>
    )

}
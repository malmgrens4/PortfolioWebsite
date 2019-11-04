import React, { useState } from 'react'
import styled from "styled-components"
import StepConnector from '@material-ui/core/StepConnector';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import resume_logo from '../images/resume_logo.png'
import 'react-vertical-timeline-component/style.min.css';
import {SectionTitle} from "../SectionTitle/SectionTitle";


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
                    date="2017-2019"
                >
                    <h3 className="vertical-timeline-element-title">B.S. Software Engineering</h3>
                    <h4 className="vertical-timeline-element-subtitle">Rochester, NY</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VTimelineElement>

                <VTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017-2019"
                >
                    <h3 className="vertical-timeline-element-title">Software Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Rochester, NY</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VTimelineElement>

                <VTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019 - present"
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Phoenix, AZ</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VTimelineElement>

            </VTimelineContainer>
        </TimelineContainer>
    )

}
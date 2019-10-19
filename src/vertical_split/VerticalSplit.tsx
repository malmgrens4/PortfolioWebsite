import React, {ReactComponentElement} from 'react'
import styled from 'styled-components'

const SplitContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftPane = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  width: 50%;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const RightPane = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  display: flex;
  width: 50%;
  background: white;
  @media (max-width: 768px) {
    width: 100%;
  }
`


type VSplitsProps = {
    leftContent?: React.ReactNode
    rightContent?: React.ReactNode
}

export const VSplit = (props: VSplitsProps) => {
    return(
        <SplitContainer>
            <LeftPane>
                {props.leftContent}
            </LeftPane>
            <RightPane>
                {props.rightContent}
            </RightPane>
        </SplitContainer>
    )
}
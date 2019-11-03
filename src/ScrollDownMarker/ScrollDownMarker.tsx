import React, {ReactNode, useEffect, useState} from 'react'
import styled from 'styled-components'

const ScrollContainer = styled.div`
  display: flex;  
  border-left: ${props => props.theme.secondaryColor} solid 3px;
  height: 100%;
`

const ScrollText = styled.div`
   display: flex;
   align-self: center;
   padding-left: .5em;
`

export const ScrollDownMarker = () => {
    return (
        <ScrollContainer>
            <ScrollText>Scroll Down</ScrollText>
        </ScrollContainer>

    )
}

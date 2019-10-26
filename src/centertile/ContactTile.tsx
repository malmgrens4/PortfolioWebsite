import React from 'react'
import styled from 'styled-components'
import {FormControl} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";


const TileContainer = styled.div`
  position: absolute;
  display: flex;
  justify-self: center;
  align-self: center;
  flex-flow: row;
  max-width: 810px;
  min-height: 500px;
  width: 75vw;
  height: 40vh;
  box-shadow: 0px 0px 20px -4px rgba(0,0,0,0.75);
  color: ${props => props.theme.primaryText};
`

const SubmitFormContainer = styled.div`
   display: flex;
   flex-flow: column;
   flex-grow: 1;
   justify-content: flex-start;
   align-content: center;
   background-color: ${props => props.theme.primaryColor};
   border: 1px solid pink;
`

const SubmitForm = styled(FormControl)`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-content: center;
  flex-grow: 1;
`

const SubmitFormParent = styled.div`
  padding-left: 1em;
`

const MailToContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-content: center;
`

export const ContactTile = () => {
    return (
        <TileContainer>
            <SubmitFormContainer>
                <SubmitFormParent>
                    <h1>Leave Contact info</h1>
                <SubmitForm>
                    <TextField
                        id="standard-with-placeholder"
                        label="Email"
                        margin="normal"
                    />
                </SubmitForm>
                </SubmitFormParent>
            </SubmitFormContainer>
            <MailToContainer>
                <a>Mail to</a>
            </MailToContainer>
        </TileContainer>
    )
}

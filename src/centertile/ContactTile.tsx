import React from 'react'
import styled from 'styled-components'
import {FormControl} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import telegram_logo from '../images/telegram_logo.png';
import BackArrow from "@material-ui/icons/ArrowBack";

const TileContainer = styled.div`
  display: flex;
  justify-self: center;
  justify-self: center;
  align-self: center;
  flex-flow: row;
  width: 30vw;
  box-shadow: 0px 0px 20px -4px rgba(0,0,0,0.75);
  color: ${props => props.theme.primaryText};
  @media (max-width: 768px) {
     flex-flow: column;
     width: 80vw;
  }
  
`

const SubmitFormContainer = styled.div`
   display: flex;
   flex-flow: column;
   flex-grow: 1;
   justify-content: flex-start;
   align-content: center;
   background-color: ${props => props.theme.primaryColor};
`

const SubmitForm = styled(FormControl)`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-content: center;
  flex-grow: 1;
`

const SubmitFormParent = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  padding-left: 1em;
  padding-right: 1em;
`

const MailToContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: column;
  flex-grow: 1;
`


const ButtonOptionsContainer = styled.div`
  display: flex;
  justify-content: center;  
  padding: 1em;
`

const SpacedButton = styled(Button)`
  margin-left: 4em !important;
`

const MailLogo = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-grow: 1;
`

const TelegramLogo = styled.img`
  align-self: center;
  height: 6em;
  width: 6em;
`

const MailToLink = styled.a`
  align-self: center;
  
  color: ${props => props.theme.primaryText}
  
  padding-bottom: 1em;
`

const SubmitButton = styled(Button)`
  width: 50%;
`

const StyledBackArrow = styled(BackArrow)`
  position: absolute;
  padding: .5em;
`

type TileProps = {
    onFlip: any,
    children: never[]
}

export const ContactTile = ({onFlip}: TileProps) => {
    return (
        <TileContainer>
            <StyledBackArrow onClick={onFlip}/>
            <MailToContainer>
                <MailLogo>
                    <TelegramLogo src={telegram_logo}/>
                </MailLogo>
                <MailToLink href="mailto:4smalmgren@gmail.com">Mail To Link</MailToLink>
            </MailToContainer>
            <SubmitFormContainer>
                <SubmitFormParent>
                    <h1>Leave Contact Info</h1>
                    <SubmitForm>
                        <TextField
                            id="standard-with-placeholder"
                            label="Email"
                            margin="normal"
                            type="Email"
                            variant="outlined"
                        />
                        <TextField
                            id="standard-with-placeholder"
                            label="Phone Number"
                            margin="normal"
                            type="phone"
                            variant="outlined"

                        />
                        <TextField
                            id="standard-multiline-static"
                            label="Reason for contact"
                            multiline
                            rows="4"
                            margin="normal"
                            variant="outlined"
                        />

                    </SubmitForm>


                </SubmitFormParent>

            <ButtonOptionsContainer>
                <SubmitButton variant="contained">
                    Submit
                </SubmitButton>

            </ButtonOptionsContainer>
            </SubmitFormContainer>


        </TileContainer>
    )
}

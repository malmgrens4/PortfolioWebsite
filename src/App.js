import React from 'react';
import './App.css';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'
import {HomePage} from "./homepage/Homepage"
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import {ThemeProvider as ThemeProviderMui} from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red';
import {blueGrey, brown, deepOrange, lightBlue, orange} from "@material-ui/core/colors";

const GlobalStyle = createGlobalStyle`
  body{
    color: whitesmoke;
    font-family: Georgia, serif;
  }
`


export const theme = {
    primaryColor: '#333',
    secondaryColor: '#2D4CBE',
    backgroundColor: '#4d4d4d',
    primaryText: 'whitesmoke',
    secondaryText: 'whitesmoke',
    largeFont: '2em',
    spacing: '1.2em',
    gradient: 'linear-gradient(#333, #2D4CBE)',
    input: {
        color: 'whitesmoke'
    },
}


const muiTheme = createMuiTheme({
    palette: {
        primary: {
            main: theme.secondaryColor,
        },
        secondary: {
            main: theme.primaryColor,
        },
    },
    overrides: {
        // Style sheet name ⚛️
        MuiInput: {
            // Name of the rule
            formControl: {
                // Some CSS
               color: theme.primaryText
            },
            root: {
                color: theme.primaryText
            },
            input: {
                color: theme.primaryText
            },

        },
        MuiOutlinedInput: {
            // Name of the rule
            formControl: {
                // Some CSS
                color: theme.primaryText
            },
            root: {
                color: theme.primaryText
            },
            input: {
                color: theme.primaryText
            },
        },
        MuiTextField: {
            // Name of the rule
            root: {
                // Some CSS
                color: theme.primaryText
            },
            focused: {
                color: 'pink'
            }
        },
        MuiFormLabel: {
            root: {
                color: theme.primaryText
            },
        },
        MuiInputLabel: {
            root: {
                color: theme.primaryText
            },
            focused: {
                color: theme.primaryText
            }
        }

    },
});

function App() {
  return (
      <ThemeProviderMui theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <ParallaxProvider scrollAxis='vertical'>
          <HomePage/>
        </ParallaxProvider>
          <GlobalStyle/>
      </ThemeProvider>
      </ThemeProviderMui>
  );
}

export default App;

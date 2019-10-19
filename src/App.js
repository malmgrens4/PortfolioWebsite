import React from 'react';
import './App.css';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'
import {HomePage} from "./homepage/Homepage"
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

const GlobalStyle = createGlobalStyle`
  body{
    color: whitesmoke;
    font-family: Georgia, serif;
  }
`

const theme = {
    primaryColor: '#3393FF',
    secondaryColor: '#E7F2ff',
    backgroundColor: '#4d4d4d',
    primaryText: 'whitesmoke',
    secondaryText: '#333'
}

function App() {
  return (
      <ThemeProvider theme={theme}>
        <ParallaxProvider scrollAxis='vertical'>
          <HomePage/>
        </ParallaxProvider>
          <GlobalStyle/>
      </ThemeProvider>
  );
}

export default App;

import React from 'react'
import { configure } from '@storybook/react';
import { load, addDecorator } from '@storybook/react';
import {ThemeProvider} from 'styled-components';


const theme = {
    primaryColor: '#3393FF',
    secondaryColor: '#E7F2ff',
    backgroundColor: '#4d4d4d',
    primaryText: 'whitesmoke',
    secondaryText: '#333'
}

addDecorator(storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>);


configure(require.context('../src', true, /\.stories\.js$/), module);

import React from 'react'
import styled, { css } from 'styled-components'
import Button from '@material-ui/core/Button'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const MenuItem = styled(Button)`
  a{
    all: unset;
  }
  padding-left: 2em;
`

const MenuBar = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-content: center;
  width: 100%;
`


const menuItems = [{label: 'About', location: '#about'}, {label: 'Projects', location: '#projects'}, {label: 'Contact', location: '#projects'}];

export const Menu = () => {
    return(
        <MenuBar>
            {
                menuItems.map((item: any , i: number) => {
                    return (
                        <>
                            <MenuItem color="secondary" >
                                <AnchorLink href={item.location}>{item.label}</AnchorLink>
                            </MenuItem>
                            {i === menuItems.length - 1 ?  '' : <span style={{fontSize: '1.4em'}}>/</span> }
                        </>
                    )
                })

            }
        </MenuBar>
    )
}


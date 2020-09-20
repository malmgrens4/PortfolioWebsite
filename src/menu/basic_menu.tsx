import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from "@material-ui/core/Grid";

const MenuItem = styled(Button)`
  a{
    all: unset;
  }
  &:hover {
    background: unset;
  }
  &.MuiButton-root:hover{
    background-color: unset !important;
  }
  &.MuiButton-textSecondary:hover{
    background-color: unset !important;
  }
`

const MenuTitle = styled.div`
  position: relative;
  padding: 4px;
  border: solid .11em transparent;
  transition: border-bottom-color .2s;
  
  &:hover {
    border-bottom: .11em solid;
  }
  
`

const ScrollLink = styled(AnchorLink)`
    all: unset;
`

const MenuBar = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-content: center;
  width: 100%;
`

const LinkSplit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const menuItems = [{label: 'About', location: '#about'}, {label: 'Experience', location: '#experience'}, {label: 'Projects', location: '#projects'}];

type Props = {
    onContactClick?: () => void
}
export const Menu = ({onContactClick}: Props) => {
    return(
        <MenuBar>
            <Grid>
                <ButtonGroup color="primary" fullWidth aria-label="full width outlined button group">

                {
                    menuItems.map((item: any, i: number) => {
                        return (
                            <>
                                <ScrollLink href={item.location}>
                                    <MenuItem color="secondary">
                                        <MenuTitle>
                                            {item.label}
                                        </MenuTitle>
                                    </MenuItem>
                                </ScrollLink>
                                <LinkSplit><div>/</div></LinkSplit>

                            </>
                        )
                    })

                }
                    <ScrollLink >
                    <MenuItem color="secondary" onClick={onContactClick}>
                        <MenuTitle>
                            Contact
                        </MenuTitle>
                    </MenuItem>
                    </ScrollLink>

                </ButtonGroup>
            </Grid>
        </MenuBar>
    )
}


import React from 'react'
import styled, { css } from 'styled-components'

const DropdownContainer = styled.div`
    height: 40px;
    width: 400px;
`

const DropdownHeader = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00CED1;

    & > button {
        height: 100%;
        width: 100%;
        border: none;
        background-color: ${props => props.headerBackgroundColor ? props.headerBackgroundColor : 'transparent'};
        font-size: 120%;
        cursor: pointer;
        outline: none;
        color: ${props => props.headerColor ? props.headerColor : 'white'};
    }

    &:hover {
        background-color: #00BFFF;
    }
`

const DropdownList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const DropdownListItem = styled.div`
    height: 40px;
    width: 98%;
    background-color: lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid grey;
    border-right: 1px solid grey;
    position: relative;

    & > button {
        height: 100%;
        width: 100%;
        border: none;
        background-color: transparent;
        color: black;
        font-size: 120%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    &:hover {
        background-color: grey;
    }

    &::after {
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        background-color: inherit;
        left: 100%;
        border: 1px solid grey;
    }
`

class Dropdown extends React.Component {
    state = {
        isCollapsed: false
    }
    
    onHeaderClick = () => {
        this.setState(prevState => ({
            isCollapsed: !prevState.isCollapsed
        }))
    }

    onListItemClick = () => {

    }

    render() {
        const {
            title,
            list,
            headerColor,
            headerBackgroundColor,
            hiddenContent
        } = this.props
        console.log(hiddenContent)
        const { isCollapsed } = this.state

        return(
            <DropdownContainer>
                <DropdownHeader
                    headerColor={headerColor}
                    headerBackgroundColor={headerBackgroundColor}
                    hiddenContent={hiddenContent}
                >
                    <button
                        onClick={() => this.onHeaderClick()}
                    >
                        {title}
                    </button>
                </DropdownHeader>
                <DropdownList>
                    {isCollapsed && list.map((item, index) => <DropdownListItem key={index}>
                            <button
                                onClick={() =>{  }}
                            >{Object.keys(item)}</button>
                        </DropdownListItem>
                    )}
                </DropdownList>
                
            </DropdownContainer>
        )
    }
}

export default Dropdown
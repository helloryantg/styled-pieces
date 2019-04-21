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
    color: white;

    & > button {
        height: 100%;
        width: 100%;
        border: none;
        background-color: transparent;
        font-size: 120%;
        cursor: pointer;
        outline: none;
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

    renderDropdownListItems = () => {
        const { isCollapsed } = this.state
        const { list } = this.props

        return <DropdownList>
            {isCollapsed && list.map((item, index) => <DropdownListItem key={index}>
                    <button
                        onClick={() =>{ }}
                    >{item}</button>
                </DropdownListItem>
            )}
        </DropdownList>
        
    }

    render() {
        const {
            title,
            list,
        } = this.props

        return(
            <DropdownContainer>
                <DropdownHeader>
                    <button
                        onClick={() => this.onHeaderClick()}
                    >
                        {title}
                    </button>
                </DropdownHeader>
                {this.renderDropdownListItems()}
                
            </DropdownContainer>
        )
    }
}

export default Dropdown
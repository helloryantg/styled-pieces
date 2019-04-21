import React from 'react'
import styled from 'styled-components'

import Dropdown from 'components/Dropdown/Dropdown'

const DropdownPageContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    top: 20%;
`

class DropdownPage extends React.Component {
    state = {
        dropdownList: [
            'Facebook',
            'Instagram',
            'LinkedIn',
            'GitHub',
            'Snapchat'
        ],
        dropdownTitle: 'Social Media'
    }

    render() {
        const { 
            dropdownList,
            dropdownTitle
        } = this.state

        return (
            <DropdownPageContainer>
                <Dropdown
                    title={dropdownTitle}
                    list={dropdownList}
                />
            </DropdownPageContainer>
        )
    }
} 

export default DropdownPage
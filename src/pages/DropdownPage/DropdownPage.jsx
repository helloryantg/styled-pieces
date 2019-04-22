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
            { Facebook: 'www.facebook.com' },
            { Instagram: 'www.instagram.com' },
            { LinkedIn: 'www.linkedIn.com' },
            { GitHub: 'www.github.com' },
            { Snapchat: 'www.snapchat.com'}
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
                    headerColor={'white'}
                    headerBackgroundColor={'black'}
                />
            </DropdownPageContainer>
        )
    }
} 

export default DropdownPage
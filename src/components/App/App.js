import React, { Component } from 'react';
import styled from 'styled-components'

import DropdownPage from 'pages/DropdownPage/DropdownPage'

const AppContainer = styled.div`
  height: 100vh;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <DropdownPage />
      </AppContainer>
    );
  }
}

export default App;

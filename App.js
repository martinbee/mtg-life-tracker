import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

import Actions from '@components/Actions';
import Players from '@components/Players';

const { width } = Dimensions.get('window');

const AppContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
  max-width: ${width}px;
  flex-wrap: wrap;
  flex-direction: row;
`;

const App = () => (
  <AppContainer>
    <Actions />
    <Players />
  </AppContainer>
);

export default App;

// App: 
// has player and settings context setup
// - Settings
// - Players
// Settings
// - renders buttons
// - disables add player button when players is a certain length
// - can set initial life total and initial number of players
// - can reset current game 
// - uses modal
// Players
// - renders player cards
// - displays player info
// - can set player life total
// - can set player poison counter total
// - can set player commander damage by color
// - all of this uses modal

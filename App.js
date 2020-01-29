import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

import storage from '@utilities/storage';
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

const defaultStartingLifeTotal = '40';
const defaultStartingNumberOfPlayers = '2';

const App = () => {
  useEffect(() => {
    const setDefaultSettings = async () => {
      const startingLifeTotal = await storage.get('startingLifeTotal');
      const startingNumberOfPlayers = await storage.get('startingNumberOfPlayers');

      if (!startingLifeTotal) await storage.set('startingLifeTotal', defaultStartingLifeTotal);
      if (!startingNumberOfPlayers) await storage.set('startingNumberOfPlayers', defaultStartingNumberOfPlayers);
    };

    setDefaultSettings();
  }, []);

  return (
    <AppContainer>
      <Actions />
      <Players />
    </AppContainer>
  );
};

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

import React, { useState } from 'react';
import { 
  View,
  TouchableOpacity,
  Image, 
} from 'react-native';
import styled from 'styled-components';

import PlayerCard from './components/PlayerCard';

// board
// - settings
// - add new player
// - player cards

const AppContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
  flex-direction: row;
`;

const ActionsContainer = styled.View`
  position: absolute;
  width: 100px;
  height: 150px;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const ActionImage = styled.Image`
  height: 50px;
  width: 50px;
`;

const initialPlayersState = {
  0: {
    name: 'Player 1',
    life: 40,
  },
  1: {
    name: 'Player 2',
    life: 40,
  },
};

const App = () => {
  const [players, setPlayers] = useState(initialPlayersState);
  const openSettings = () => console.log('settings');
  const addNewPlayer = () => console.log('addNewPlayer');

  return (
    <AppContainer>
      <ActionsContainer>
        <TouchableOpacity onPress={openSettings}>
          <ActionImage source={require('./assets/settings.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={addNewPlayer}>
          <ActionImage source={require('./assets/add-player.png')} />
        </TouchableOpacity>
      </ActionsContainer>
      {Object.values(players).map(({ name, life }, index) => {
        return (
          <PlayerCard 
            key={index}
            index={index}
            life={life}
            name={name}
          />
        );
      })}
    </AppContainer>
  );
};

export default App;

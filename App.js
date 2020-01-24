import React, { useState } from 'react';
import { 
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components';

import PlayerCard from './components/PlayerCard';

const { width, height } = Dimensions.get('window');

const AppContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
  maxWidth: ${width}px;
  flex-wrap: wrap;
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
  const [playersMap, setPlayers] = useState(initialPlayersState);
  const players = Object.values(playersMap);
  const numberOfCardRows = Math.round(players.length / 2);
  const cardHeight = height / numberOfCardRows;

  const openSettings = () => console.log('settings');
  const addNewPlayer = () => {
    const newIndex = players.length;

    const updatedPlayersMap = {
      ...playersMap,
      [newIndex]: {
        name: `Player ${newIndex}`,
        life: 40,
      },
    };

    setPlayers(updatedPlayersMap);
  };

  const atMaxPlayers = players.length === 8; // add styles

  return (
    <AppContainer>
      <ActionsContainer>
        <TouchableOpacity onPress={openSettings}>
          <ActionImage source={require('./assets/settings.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={addNewPlayer} disabled={atMaxPlayers}>
          <ActionImage source={require('./assets/add-player.png')} />
        </TouchableOpacity>
      </ActionsContainer>
      {players.map(({ name, life }, index) => {
        return (
          <PlayerCard 
            key={index}
            index={index}
            life={life}
            name={name}
            cardHeight={cardHeight}
          />
        );
      })}
    </AppContainer>
  );
};

export default App;

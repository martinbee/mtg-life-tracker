import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { 
  Ionicons,
  FontAwesome,
} from '@expo/vector-icons';

import SettingsModal from './SettingsModal';

  // const openSettings = () => console.log('settings');
  // const addNewPlayer = () => {
  //   const newIndex = players.length;

  //   const updatedPlayersMap = {
  //     ...playersMap,
  //     [newIndex]: {
  //       name: `Player ${newIndex}`,
  //       life: 40,
  //     },
  //   };

  //   setPlayers(updatedPlayersMap);
  // };

  // const atMaxPlayers = players.length === 8; // add styles

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

const Actions = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = useCallback(
    () => setIsModalVisible(!isModalVisible), 
    [setIsModalVisible, isModalVisible]
  );

  const addNewPlayer = () => console.log('add new player');
  const atMaxPlayers = false;

  return (
    <>
      <ActionsContainer>
        <TouchableOpacity onPress={toggleModal}>
          <Ionicons name="md-settings" size={42} color="#263238" />
        </TouchableOpacity>
        <TouchableOpacity onPress={addNewPlayer} disabled={atMaxPlayers}>
          <FontAwesome 
            name="user-plus" 
            size={32} 
            color={atMaxPlayers ? '#9E9E9E' : '#263238'}
            style={{ paddingLeft: 5 }} 
          />
        </TouchableOpacity>
      </ActionsContainer>
      <SettingsModal 
        isVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </>
  );
};

export default Actions;

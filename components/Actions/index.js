import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

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

const ActionIcon = styled.Image`
  height: 50px;
  width: 50px;
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
          <ActionIcon source={require('@assets/settings.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={addNewPlayer} disabled={atMaxPlayers}>
          <ActionIcon source={require('@assets/add-player.png')} />
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

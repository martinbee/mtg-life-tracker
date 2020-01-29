import React, { useState, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';
import styled from 'styled-components';

import storage from '@utilities/storage';

const SettingsContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

// add validations
const SettingsModal = ({ isVisible, toggleModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({});
  const { startingLifeTotal, startingNumberOfPlayers } = settings;

  const setStartingLifeTotal = async (newStartingLifeTotal) => {
    await storage.set('startingLifeTotal', newStartingLifeTotal);
    setSettings({ ...settings, startingLifeTotal: newStartingLifeTotal });
  };

  const setStartingNumberOfPlayers = async (newStartingNumberOfPlayers) => {
    await storage.set('startingNumberOfPlayers', newStartingNumberOfPlayers);
    setSettings({ ...settings, startingNumberOfPlayers: newStartingNumberOfPlayers });
  };

  useEffect(() => {
    setIsLoading(true);

    const getLifeTotal = async () => {
      try {
        const storedStartingLifeTotal = await storage.get('startingLifeTotal');
        const storedStartingNumberOfPlayers = await storage.get('startingNumberOfPlayers');

        setSettings({
          startingLifeTotal: storedStartingLifeTotal,
          startingNumberOfPlayers: storedStartingNumberOfPlayers,
        });
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
      }
    }

    getLifeTotal();
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
    >
      <SettingsContainer>
          <Text>Starting Life Total:</Text>
          <TextInput 
            keyboardType='numeric'
            onChangeText={setStartingLifeTotal}
            value={startingLifeTotal}
            maxLength={4}
          />
          <Text>Starting Number Of Players:</Text>
          <TextInput 
            keyboardType='numeric'
            onChangeText={setStartingNumberOfPlayers}
            value={startingNumberOfPlayers}
            maxLength={1}
          />
          <Button onPress={toggleModal} title="Close" />
      </SettingsContainer>
    </Modal>
  );
};

export default SettingsModal;

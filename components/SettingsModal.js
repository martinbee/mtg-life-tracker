import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

const SettingsModal = ({ isVisible, toggleModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
    >
      <View style={{marginTop: 22}}>
        <View>
          <Text>Hello World!</Text>
          <TouchableHighlight onPress={toggleModal}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

export default SettingsModal;

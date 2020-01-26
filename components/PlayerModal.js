import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

const PlayerModal = ({ isVisible, toggleModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isVisible}
    >
      <View style={{marginTop: 22}}>
        <View>
          <Text>Player Modal</Text>
          <TouchableHighlight onPress={toggleModal}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

export default PlayerModal;

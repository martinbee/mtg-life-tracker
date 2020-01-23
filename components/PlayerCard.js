import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    width: '100%'
  },
});

const PlayerCard = ({ playerIndex }) => {
  const [playerName, setPlayerName] = useState(`Player ${playerIndex + 1}`);

  return (
    <View style={styles.card}>
      <Text>{playerName}</Text>
    </View>
  );
};

export default PlayerCard;

import React from 'react';
import { 
  StyleSheet, 
  View,
  TouchableOpacity,
  Image, 
} from 'react-native';

import PlayerCard from './components/PlayerCard';

// board
// - settings
// - add new player
// - player cards

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  actionsContainer: {
    position: 'absolute',
    width: 150,
    height: 100,
    justifyContent: 'space-evenly',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flexDirection: 'row',
    zIndex: 1,
  },
  settingsIcon: {
    height: 50,
    width: 50,
  },
});

const App = () => {
  const openSettings = () => console.log('settings');
  const addNewPlayer = () => console.log('addNewPlayer');

  return (
    <View style={styles.container}>
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={openSettings}>
          <Image
            style={styles.settingsIcon}
            source={require('./assets/settings.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={addNewPlayer}>
          <Image
            style={styles.settingsIcon}
            source={require('./assets/settings.png')}
          />
        </TouchableOpacity>
      </View>
      <PlayerCard playerIndex={0} />
      <PlayerCard playerIndex={1} />
    </View>
  );
};

export default App;

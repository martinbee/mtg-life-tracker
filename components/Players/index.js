
  // const [playersMap, setPlayers] = useState(initialPlayersState);
  // const players = Object.values(playersMap);
  // const numberOfCardRows = Math.round(players.length / 2);
  // const cardHeight = height / numberOfCardRows;
      // {players.map(({ name, life }, index) => {
      //   return (
      //     <PlayerCard 
      //       key={index}
      //       index={index}
      //       life={life}
      //       name={name}
      //       cardHeight={cardHeight}
      //     />
      //   );
      // })}

import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const Players = () => {
  return (
    <View>
      <Text>Players!</Text>
    </View>
  );
};

export default Players;

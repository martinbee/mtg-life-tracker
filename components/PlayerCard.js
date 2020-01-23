import React from 'react';
import {
  Text,
} from 'react-native';
import styled from 'styled-components';

const colorOptions = {
  0: '#FF7043',
  1: '#8D6E63',
  2: '#5C6BC0',
  3: '#66BB6A',
  4: '#78909C',
  5: '#AB47BC',
  6: '#FFA726',
  7: '#BDBDBD',
};

const Card = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  backgroundColor: ${({ index }) => colorOptions[index]};
  width: 100%;
  height: 100%;
`;

const PlayerCard = ({ name, life, index }) => {

  return (
    <Card index={index}>
      <Text>{name}</Text>
      <Text>{life}</Text>
    </Card>
  );
};

export default PlayerCard;

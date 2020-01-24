import React from 'react';
import {
  Text,
  Dimensions,
} from 'react-native';
import styled from 'styled-components';

const { width } = Dimensions.get('window');

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
  flex-basis: ${width / 2}px;
  justify-content: center;
  align-items: center;
  backgroundColor: ${({ index }) => colorOptions[index]};
  height: ${({ cardHeight }) => cardHeight}px;
`;

const PlayerCard = ({ name, life, index, cardHeight }) => {

  return (
    <Card index={index} cardHeight={cardHeight}>
      <Text>{name}</Text>
      <Text>{life}</Text>
    </Card>
  );
};

export default PlayerCard;

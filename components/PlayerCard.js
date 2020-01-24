import React, { useState } from 'react';
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

  // transform: [
  //   { rotateY: '60deg'},
  // ];
const Card = styled.View`
  flex: 1;
  flex-basis: ${width / 2}px;
  justify-content: center;
  align-items: center;
  backgroundColor: ${({ index }) => colorOptions[index]};
  height: ${({ cardHeight }) => cardHeight}px;
`;

const ContentContainer = styled.View`
  transform: rotate(${({ cardRotation }) => cardRotation});
`;

// handle odd player total rotation

const PlayerCard = ({ name, life, index, cardHeight }) => {
  const isIndexEven = index % 2 === 0;
  const initialRotation = isIndexEven ? '90deg' : '-90deg';
  const [cardRotation, setCardRotation] = useState(initialRotation);

  return (
    <Card index={index} cardHeight={cardHeight}>
      <ContentContainer cardRotation={cardRotation}>
        <Text>{name}</Text>
        <Text>{life}</Text>
        <Text>{cardRotation}</Text>
      </ContentContainer>
    </Card>
  );
};

export default PlayerCard;

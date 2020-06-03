import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

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

interface Props {
  addPlayer(): void;
}

export default function Actions({ addPlayer }: Props) {
  return (
    <ActionsContainer>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="md-settings" size={42} color="#263238" />
      </TouchableOpacity>
      <TouchableOpacity onPress={addPlayer} disabled={false}>
        <FontAwesome
          name="user-plus"
          size={32}
          color={false ? '#9E9E9E' : '#263238'}
          style={{ paddingLeft: 5 }}
        />
      </TouchableOpacity>
    </ActionsContainer>
  );
}

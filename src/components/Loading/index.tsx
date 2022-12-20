import { StatusBar } from 'react-native';
import React from 'react';
import { Container, LoadIndicator } from './styles';

export function Loading() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LoadIndicator />
    </Container>
  )
}
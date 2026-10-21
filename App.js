
import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import InterruptorLuz from './components/InterruptorLuz';
import AlterarEmoji from './components/AlterarEmoji';
import NomeUsuario from './components/NomeUsuario';
import MostrarSenha from './components/MostrarSenha';
import SistemaCurtidas from './components/SistemaCurtidas';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>
        Lista de Exercícios — useState
      </Text>

      <InterruptorLuz />
      <AlterarEmoji />
      <NomeUsuario />
      <MostrarSenha />
      <SistemaCurtidas />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

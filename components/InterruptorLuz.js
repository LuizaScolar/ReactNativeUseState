
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function InterruptorLuz() {
  const [luzLigada, setLuzLigada] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Exercício 1 — Interruptor de Luz
      </Text>

      <Text style={styles.luz}>
        {luzLigada ? 'Luz ligada' : 'Luz desligada'}
      </Text>

      <Button
        title={luzLigada ? 'Desligar luz' : 'Ligar luz'}
        onPress={() => setLuzLigada(!luzLigada)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  luz: {
    fontSize: 24,
    marginBottom: 20,
  },
});

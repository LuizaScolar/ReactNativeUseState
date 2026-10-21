
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AlterarEmoji() {
  const [feliz, setFeliz] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Exercício 2 — Alterar Emoji
      </Text>

      <Text style={styles.emoji}>
        {feliz ? '😁' : '😐'}
      </Text>

      <Button
        title="Alterar emoji"
        onPress={() => setFeliz(!feliz)}
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
  emoji: {
    fontSize: 60,
    marginBottom: 20,
  },
});

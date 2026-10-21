
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SistemaCurtidas() {
  const [curtidas, setCurtidas] = useState(0);

  function adicionarCurtida() {
    setCurtidas(curtidas + 1);
  }

  function removerCurtida() {
    if (curtidas > 0) {
      setCurtidas(curtidas - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Exercício 5 — Sistema de Curtidas
      </Text>

      <Text style={styles.curtidas}>
        ❤️ Curtidas: {curtidas}
      </Text>

      <Button
        title="Adicionar curtida"
        onPress={adicionarCurtida}
      />

      <View style={styles.espaco} />

      <Button
        title="Remover curtida"
        onPress={removerCurtida}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  curtidas: {
    fontSize: 24,
    marginBottom: 20,
  },
  espaco: {
    height: 10,
  },
});


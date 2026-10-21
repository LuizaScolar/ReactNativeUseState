
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function MostrarSenha() {
  const [senha, setSenha] = useState('');
  const [mostrar, setMostrar] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Exercício 4 — Mostrar e Ocultar Senha
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={!mostrar}
      />

      <Button
        title={mostrar ? 'Ocultar senha' : 'Mostrar senha'}
        onPress={() => setMostrar(!mostrar)}
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
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
});
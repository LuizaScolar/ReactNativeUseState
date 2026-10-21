
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function NomeUsuario() {
  const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Exercício 3 — Nome do Usuário
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.resultado}>
        {nome.trim() === '' ? 'Digite seu nome' : nome}
      </Text>
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
  resultado: {
    fontSize: 18,
  },
});

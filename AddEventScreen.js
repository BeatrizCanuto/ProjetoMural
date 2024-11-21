import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function AddEventScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleAddEvent = () => {
    if (!title || !date) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    // Aqui você adicionaria o evento a um backend ou storage local.
    Alert.alert('Sucesso', 'Evento adicionado com sucesso!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título do Evento:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Ex: Feira de Gado"
      />
      <Text style={styles.label}>Data do Evento:</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="Ex: 25/11/2024"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddEvent}>
        <Text style={styles.buttonText}>Adicionar Evento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f4f4f4' },
  label: { fontSize: 16, marginBottom: 5 },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 18 },
});

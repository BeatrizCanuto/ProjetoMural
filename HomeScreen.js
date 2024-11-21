import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [events, setEvents] = useState([
    { id: '1', title: 'Feira de Produtos Orgânicos', date: '25/11/2024' },
    { id: '2', title: 'Leilão de Gado', date: '01/12/2024' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDate}>Data: {item.date}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Adicionar Evento')}
      >
        <Text style={styles.addButtonText}>+ Adicionar Evento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f4f4f4' },
  eventCard: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  eventTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  eventDate: { fontSize: 14, color: '#555' },
  addButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: { color: '#fff', fontSize: 18 },
});

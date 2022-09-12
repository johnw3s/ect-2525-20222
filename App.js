import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Trainerapp</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#daa520',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
  }
});

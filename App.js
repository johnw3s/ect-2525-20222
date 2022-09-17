import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Trainerapp</Text>
      <StatusBar style="auto" />
      <Button
      marginTop="110"
  onPress={() => Alert.alert('Digite o login e senha')}
  title="Entrar"
  color="#303030"
  borderColor="#fff"
/>
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

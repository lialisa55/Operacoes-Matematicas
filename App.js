import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  function soma() {
    const resultado = parseFloat(num1) + parseFloat(num2);
    alert('O resultado é: ' + resultado);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Soma de Valores </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite um número"
        onChangeText={(num1) => setNum1(num1)}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite um segundo número"
        onChangeText={(num2) => setNum2(num2)}
      />
      <TouchableOpacity style={styles.btn} onPress={soma}>
        <Text style={styles.titulobtn}> Calcular </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#ffffff',
    color: 'FFFFFF',
    borderRadius: 10,
    margin: 30,
    padding: 10,
    fontSize: 15,
  },
  btn: {
    alignItems: 'center',
    margin: 30,
    borderRadius: 10,
    padding: 15,
    borderWidth: 5,
  },
  titulobtn: {
    fontSize: 50,
    color: '#000000',
  },
});

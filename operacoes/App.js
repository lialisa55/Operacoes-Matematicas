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
  function sub() {
    const resultado = parseFloat(num1) - parseFloat(num2);
    alert('O resultado é: ' + resultado);
  }
  function mult() {
    const resultado = parseFloat(num1) * parseFloat(num2);
    alert('O resultado é: ' + resultado);
  }
  function divs() {
    const resultado = parseFloat(num1) / parseFloat(num2);
    alert('O resultado é: ' + resultado);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Operações Matemáticas </Text>
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
      <View style={styles.buttons}>
      <TouchableOpacity style={styles.btn} onPress={soma}>
        <Text style={styles.titulobtn}> + </Text>
      </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={sub}>
        <Text style={styles.titulobtn}> - </Text>
      </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={mult}>
        <Text style={styles.titulobtn}> * </Text>
      </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={divs}>
        <Text style={styles.titulobtn}> / </Text>
      </TouchableOpacity>
      </View>
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
    margin: 10,
    padding: 10,
    fontSize: 15,
  },
    buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 20,
    padding: 10
  },
  btn: {
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    padding: 8,
    borderWidth: 5,
    width: 100,
  },
  titulobtn: {
    fontSize: 50,
    color: '#000000',
    flexDirection: 'reverseColumn'
  },
});

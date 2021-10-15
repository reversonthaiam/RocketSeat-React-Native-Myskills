import React from 'react'
import { TouchableOpacity, Text, StyleSheet} from 'react-native'


export default function Button({onPress}){
  return(
    <TouchableOpacity 
    onPress={onPress} 
    style={styles.button}>
            <Text style={styles.buttonText}>Adicionar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ad3',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },
})

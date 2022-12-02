import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './ButtonStyle'


const Button = () => {
  return (
   <TouchableOpacity style={styles.btnComponent}>
    <Text style={styles.btnText}>ADD TO CART</Text>
   </TouchableOpacity>
  )
}


export default Button

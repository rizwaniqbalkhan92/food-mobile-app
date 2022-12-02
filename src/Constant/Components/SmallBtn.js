import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './SmallBtnStyle'

const SmallBtn = ({icon}) => {
    return (
        <TouchableOpacity style={styles.btnAddToCart} >
            <Text style={styles.btnAddToCartText}>{icon}</Text>
        </TouchableOpacity>
    )
}

export default SmallBtn





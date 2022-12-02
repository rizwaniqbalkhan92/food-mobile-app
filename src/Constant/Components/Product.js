import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './ProductStyle'
import Pizza1 from '../../Assets/Images/pizza1.jpg';
import Pizza2 from '../../Assets/Images/pizza2.jpg';
import Pizza3 from '../../Assets/Images/pizza3.jpg';

const Product = () => {
    return (
        <View style={styles.mainContainer}>
            <Image source={Pizza1} style={styles.foodImage} />
            <Text style={styles.foodname}>Mashroom</Text>
            <Text style={styles.foodprice}>$12.4</Text>
         

        </View>
    )
}

export default Product

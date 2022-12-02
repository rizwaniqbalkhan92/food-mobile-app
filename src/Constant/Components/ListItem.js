import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './listItemStyle'
import SmallBtn from './SmallBtn'
import Pizza1 from '../../Assets/Images/pizza1.jpg'

const ListItem = ({col,name,price,details}) => {
    return (
        <View style={styles.listItemContainer}>
            <View style={styles.imageAndText}>
                <Image source={Pizza1} style={styles.listItemImg} />
                <View style={styles.textContainer}>
                    <Text style={styles.foodname}>{name}</Text>
                    <Text style={styles.fooddetails}>{details}</Text>
                    <Text style={styles.foodprice}>{price}</Text>
                </View>

            </View>
            <SmallBtn icon="+"  />

        </View>
    )
}

export default ListItem


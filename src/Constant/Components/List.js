import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pizza1 from '../../Assets/Images/pizza1.jpg'
import ListItem from './ListItem'
import Product from './Product'
const List = () => {

const data=[
    {img:Pizza1, name:'Pizza',price:'120',details:"Hot Beef stick with butter"},
    {img:Pizza1, name:'Pizza',price:'120',details:"Hot Beef stick with butter"},
    {img:Pizza1, name:'Pizza',price:'120',details:"Hot Beef stick with butter"},
    {img:Pizza1, name:'Pizza',price:'120',details:"Hot Beef stick with butter"},
    {img:Pizza1, name:'Pizza',price:'120',details:"Hot Beef stick with butter"},
    {img:Pizza1, name:'Pizza',price:'120',details:"Hot Beef stick with butter"},
]


  return (
<FlatList  
data={data}

renderItem={({item})=>(
//    <Product/>
    <ListItem  col={1} name={item.name}  price={item.price} details={item.details}   />
)}
/>
  )
}

export default List

const styles = StyleSheet.create({})
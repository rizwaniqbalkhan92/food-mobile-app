import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeThemeColor } from '../../Redux/Reducer/Theme'

const ScreenOne = () => {
    const theme=useSelector(state=>state.value);
    const dispatch=useDispatch();
    console.log('state---->',theme);
const changeTheme=()=>{
  console.log(theme)
dispatch(changeThemeColor())
}

  return (
    <View>
      <Text>ScreenOne</Text>
      
    </View>
  )
}

export default ScreenOne

const styles = StyleSheet.create({})
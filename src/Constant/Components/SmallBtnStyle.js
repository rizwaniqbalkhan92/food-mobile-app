import {StyleSheet}   from 'react-native';
import lightTheme from '../lightTheme.json';


export const styles =StyleSheet.create({


    btnAddToCart:{
        width:30,
        height:30,
        backgroundColor:lightTheme['primary-btn-color'],
        position:'absolute',
        bottom:0,
        right:0,
        borderTopLeftRadius:10,
        borderBottomRightRadius:10,
        justifyContent:'center',
        alignItems:'center',
    
    },
    btnAddToCartText:{
        fontSize:lightTheme['fz-20'],
        fontWeight:lightTheme['fw-500'],
        color:lightTheme['primary-theme-bg-color']
    }
})
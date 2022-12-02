import {Dimensions, StyleSheet}   from 'react-native';
import lightTheme from '../lightTheme.json';

const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;


export const styles=StyleSheet.create({



mainContainer:{
width:"45%",
height:230,
borderRadius:10,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,
backgroundColor:lightTheme['primary-theme-bg-color']
},
foodImage:{
width:"90%",
height:"50%",
alignSelf:'center',
marginTop:10


},
foodname:{
fontSize:lightTheme['fz-18'],
alignSelf:'center',
marginTop:10,
color:lightTheme['primary-fc-1'],

fontWeight:lightTheme['fw-500']
},
foodprice:{
fontSize:lightTheme['fz-18'],
alignSelf:'center',
marginTop:5,
color:lightTheme['primary-btn-color'],

fontWeight:lightTheme['fw-500']
},
// btnAddToCart:{
//     width:30,
//     height:30,
//     backgroundColor:lightTheme['primary-btn-color'],
//     position:'absolute',
//     bottom:0,
//     right:0,
//     borderTopLeftRadius:10,
//     borderBottomRightRadius:10,
//     justifyContent:'center',
//     alignItems:'center',

// },
// btnAddToCartText:{
//     fontSize:lightTheme['fz-20'],
//     fontWeight:lightTheme['fw-500'],
//     color:lightTheme['primary-theme-bg-color']
// }






})




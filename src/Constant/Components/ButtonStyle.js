import { StyleSheet } from "react-native";

import  lightTheme from '../lightTheme.json';


export const styles=StyleSheet.create({

btnComponent:{
width:"90%",
height:60,
backgroundColor:lightTheme["primary-btn-color"],
alignItems:'center',
justifyContent:'center',
borderRadius:50,
alignSelf:'center',
marginTop:5

},

btnText:{
color:'#fff',
fontSize:lightTheme["fz-20"],
fontFamily:lightTheme["fw-700"]


}


})

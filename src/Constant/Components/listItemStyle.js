import {StyleSheet}  from 'react-native';
import lightTheme from '../lightTheme.json';

export const styles=StyleSheet.create({
    listItemContainer:{

        width:"95%",
        marginTop:5,
        borderRadius:10,
        height:80,
        alignItems:'center',
        flexDirection:'row',
        // justifyContent:'space-between',
        alignSelf:'center',
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
    listItemImg:{
        width:70,
        height:70,
        marginLeft:7,
        borderRadius:50
    },
    imageAndText:{
flexDirection:'row',
justifyContent:'space-between',




    },
    textContainer:{
        marginLeft:10,

    justifyContent:'space-around',
    flexDirection:'column'
    },
    foodname:{
        fontSize:lightTheme['fz-16'],
        // alignSelf:'center',
        // marginTop:10,
        color:lightTheme['primary-fc-1'],
        
        fontWeight:lightTheme['fw-500']
        },
        foodprice:{
        fontSize:lightTheme['fz-16'],
        // alignSelf:'center',
        // marginTop:5,
        color:lightTheme['primary-btn-color'],
        
        fontWeight:lightTheme['fw-500']
        },
        fooddetails:{
        fontSize:lightTheme['fz-14'],
        // alignSelf:'center',
        // marginTop:5,
        opacity:0.7,
        color:lightTheme['primary-fc-1'],
        
        fontWeight:lightTheme['fw-500']
        },


    
})


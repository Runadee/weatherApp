import { StyleSheet, Text, SafeAreaView, ImageBackground, StatusBar,View} from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import IconText from '../components/IconText'

const City = () => {
  return (
    <SafeAreaView style={styles.container} >
     <ImageBackground source={require('../../assets/city.jpg')} style={styles.imageLayout} >
        <Text style={[styles.cityName, styles.cityText]}> Canada</Text>
        <Text style={[styles.countryName, styles.cityText]}> Toronto</Text>
        <View style={styles.populationWrapper} >
        <IconText />
        </View>
        <View style={styles.riseSetWrapper} >
          <Feather name={'sunrise'} size={50} color={'white'} />
          <Text style={styles.riseSetText} >10:46:58am</Text>
          <Feather name={'sunset'} size={50} color={'white'} />
          <Text style={styles.riseSetText} >17:28:15pm</Text>
        </View>
     </ImageBackground>
    </SafeAreaView>
  )
}

export default City

const styles = StyleSheet.create({

    container:{
        flex:1
    },
    imageLayout:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0
    },
    cityName:{
       fontSize:40,
       padding:20
    },
    countryName:{
      
       fontSize:30,
                },
    cityText: {
      justifyContent:'center',
       alignSelf:'center',
       fontWeight:'bold',
       color:'white',
    },
    populationWrapper:{
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
       marginTop:30
    },
    populationText:{
      fontSize:25,
      marginLeft:7.5,
      color:'blue',
     
    },
    riseSetWrapper:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
      marginTop:30
    },
    riseSetText:{
      fontSize:20,
      color:'white',
    
    }


})
import React from 'react'
import { SafeAreaView , StyleSheet, FlatList, View, Text, StatusBar, ImageBackground} from 'react-native'
import ListItem from '../components/ListItem'

const DATA =[
   {
    dt_txt: "2023-02-18 12:00:00",
    main: {
        temp_max: 8.55,
        temp_min: 7.55
    },
    weather: [
        {
            main: 'Clear'
        }
    ]
   },
   {
    dt_txt: "2023-02-18 15:00:00",
    main: {
        temp_max: 8.55,
        temp_min: 7.55
    },
    weather: [
        {
            main: 'Clouds'
        }
    ]
   },
   {
    dt_txt: "2023-02-18 18:00:00",
    main: {
        temp_max: 8.55,
        temp_min: 7.55
    },
    weather: [
        {
            main: 'Rain'
        }
    ]
   }
                          
]


const UpcomingWeather = () => {
    const renderItem = ({item}) =>  (
        <ListItem 
         condition={item.weather[0].main}
         dt_txt={item.dt_txt} 
         min={item.main.temp_min}
         max={item.main.temp_max}
        />
    )
    const { container, image } = styles
    return (
       <SafeAreaView style={container}>
           <Text> UpComing Weather</Text>
           <ImageBackground
           source={require('../../assets/upcoming-background.jpg')} 
           style={image} 
           >
           <FlatList 
            data={ DATA } 
           renderItem={renderItem} 
           keyExtractor={(item) => item.dt_txt} 
           ItemSeparatorComponent={() => <View style={{ backgroundColor:'#4682A9' , height: 2 }} /> }
           />
           </ImageBackground>
       </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
       flex:1,
       marginTop: StatusBar.currentHeight  || 0 ,
       backgroundColor: '#91C8E4'
    },
   
    image: {
        flex: 1
    }
})

export default UpcomingWeather 
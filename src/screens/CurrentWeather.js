
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function CurrentWeather() {
  return (
    <SafeAreaView style={styles.wrapper}>
    <View style={styles.container}>
    <Feather name="sun" size={24} color="black" />
     <Text style={styles.temp}>6</Text>
     <Text style={styles.feels}> Feels like 5 </Text>
     <View style={styles.highLowWrapper}>
     <Text style={styles.highlow}> High: 8</Text>
     <Text style={styles.highlow}>Low: 6</Text>
     </View>
     <View style={styles.bodyWrapper}>
      <Text style={styles.description}> Its a sunny weather</Text>
      <Text style={styles.message}> Its perfect T-shirt for sunny weather</Text>
     </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  wrapper:{
    flex:1,
    backgroundColor: 'pink'
  },
  temp:{
    color:'black',
    fontSize: 48
  },
  feels:{
    fontSize:30,
    color:'black'
  },
  highlow:{
    fontSize:20,
    color:'black'
  },
  highLowWrapper:{
    flexDirection: 'row'
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description:{
    fontSize: 36
  },
  message:{
    fontSize: 30
  }
});
         
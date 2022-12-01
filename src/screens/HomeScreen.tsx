import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import WeatherCurrent from '../components/WeatherCurrent';
import WeatherCordinate from '../components/WeatherCordinate';


function formateDate (date:Date) {
    const today = date.getDate();
    const month = `${[
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
    ][date.getMonth()]}`;
    return `${month} ${today}, ${date.getFullYear()}`
}


function HomeScreen() {
    const now = new Date()
    // const now = moment(new Date());
  return <View  testID='home-screen' style={styles.container}>
            <View style={styles.title}>

                <View style={styles.date}>
                    <Text>{formateDate(now)}</Text>
                    {/* <Text style={styles.date}>{now.format('MMM DD, YYYY')}</Text> */}
                </View>
                <WeatherCurrent/>
                <Text testID='home-screen-divider' style={styles.divider}>OR</Text>
                <WeatherCordinate/>
            </View>

        </View>
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:40,
        alignContent:'space-between',
        justifyContent:'space-evenly',
        backgroundColor:'#aaad',
    },
    date:{
        color:'red',
        backgroundColor:'white',
        fontSize:25,
    },
    title:{
        justifyContent:'flex-end',
    },
    divider:{
        color:"white",
    },
});

export default HomeScreen;
import { StyleSheet, Text, View, ImageBackground, Image, Button, Pressable } from 'react-native';
import React from 'react';
import bannerImg from './assets/blue-gradient.png'
import home from './assets/home-icon.png'
import assignments from './assets/clipboard-icon.png'
import calendar from './assets/calendar-icon.png'
import camera from './assets/camera-icon.png'
import phone from './assets/phone-icon.png'
import whitelogo from './assets/white-logo.png'
import usericon from './assets/usericon.png'
import calendarpic from './assets/calendar.png'
import { useState } from 'react'

const CalendarScreen = ({navigation, route}) => {

    const [user, setUser] = useState(route.params);

    return (
        <View style={styles.page}>

            {/*Header*/}
            <View style={styles.header}>
                <ImageBackground style={styles.header.bgImg} source={bannerImg}>
                    <View style={styles.header.bgImg.container}>
                        <View style={styles.header.bgImg.container.logo}>
                            <Pressable>
                                <Image style={styles.header.bgImg.container.logo.img} source={whitelogo}/>
                            </Pressable>
                        </View>
                        <View style={styles.header.bgImg.container.user.body}>
                            <Pressable onPress={() => navigation.navigate('User', user)} style={styles.header.bgImg.container.user.button}>
                                <Image source={usericon} style={styles.header.bgImg.container.user.img}/>
                            </Pressable>
                        </View> 
                    </View>
                </ImageBackground>
            </View>

            {/*Body*/}
            <View style={styles.body}>
                    <View style = {styles.body.item}>
                        <View style={styles.body.item.infotitle}>
                            <Text style = {styles.body.item.infotitle.text}>April</Text>
                        </View>
                        <View style = {styles.body.item.calendarcontainer}>
                            <View style = {styles.body.item.calendarcontainer.daynames}>
                                <Text style = {styles.body.item.calendarcontainer.daynames.names}>S M T W T F S</Text>
                            </View>
                            <View style = {styles.body.item.calendarcontainer.daynumbers}>
                                <Text style = {styles.body.item.calendarcontainer.daynumbers.numbers}>2 3 4 5 6 7 8</Text>
                            </View>
                            <View style = {styles.body.item.calendarcontainer.dayevents}>
                                <View style = {styles.body.item.calendarcontainer.dayevents.event}>
                                    <Text style = {styles.body.item.calendarcontainer.dayevents.event.day}>April 3rd, 2023</Text>
                                    <View style = {styles.body.item.calendarcontainer.dayevents.event.eventbox}>
                                        <Text>West-MEC Coding - FBLA State</Text>
                                    </View>
                                </View>
                                <View style = {styles.body.item.calendarcontainer.dayevents.event}>
                                    <Text style = {styles.body.item.calendarcontainer.dayevents.event.day}>April 4th, 2023</Text>
                                    <View style = {styles.body.item.calendarcontainer.dayevents.event.eventbox}>
                                        <Text>West-MEC Coding - FBLA State</Text>
                                    </View>
                                </View>
                                <View style = {styles.body.item.calendarcontainer.dayevents.event}>
                                    <Text style = {styles.body.item.calendarcontainer.dayevents.event.day}>April 5th, 2023</Text>
                                    <View style = {styles.body.item.calendarcontainer.dayevents.event.eventbox}>
                                        <Text>West-MEC Coding - FBLA State</Text>
                                    </View>
                                </View>
                                <View style = {styles.body.item.calendarcontainer.dayevents.event}>
                                    <Text style = {styles.body.item.calendarcontainer.dayevents.event.day}>April 7th, 2023</Text>
                                    <View style = {styles.body.item.calendarcontainer.dayevents.event.eventbox}>
                                        <Text>Professional Development - No School</Text>
                                    </View>
                                </View>
                            </View>
                        </View> 
                    </View>

                    {/* <View style = {styles.body.calendarcontainer}>
                        <ImageBackground source={calendarpic} style={styles.body.calendarcontainer.calendarpic}/>
                    </View> */}
            </View>

            {/*Footer*/}
            <View style={styles.footer}>
                <ImageBackground style={styles.footer.bgImg} source={bannerImg}>
                    <View style={styles.footer.bgImg.container}>
                        <View style={styles.footer.bgImg.container.buttonStyle.body}>
                            <Pressable onPress={() => navigation.navigate('DashboardUnscuffed', user)} style={styles.footer.bgImg.container.buttonStyle.button}>
                                <Image source={home} style={styles.footer.bgImg.container.buttonStyle.img}/>
                            </Pressable>
                        </View>
                        <View style={styles.footer.bgImg.container.buttonStyle.body}>
                            <Pressable onPress={() => navigation.navigate('Calendar', user)} style={styles.footer.bgImg.container.buttonStyle.button}>
                                <Image source={calendar} style={styles.footer.bgImg.container.buttonStyle.img}/>
                            </Pressable>
                        </View>
                        <View style={styles.footer.bgImg.container.buttonStyle.body}>
                            <Pressable onPress={() => navigation.navigate('Photos', user)} style={styles.footer.bgImg.container.buttonStyle.button}>
                                <Image source={camera} style={styles.footer.bgImg.container.buttonStyle.img}/>
                            </Pressable>
                        </View>
                        <View style={styles.footer.bgImg.container.buttonStyle.body}>
                            <Pressable onPress={() => navigation.navigate('Contact', user)} style={styles.footer.bgImg.container.buttonStyle.button}>
                                <Image source={phone} style={styles.footer.bgImg.container.buttonStyle.img}/>
                            </Pressable>
                        </View>
                        <View style={styles.footer.bgImg.container.buttonStyle.body}>
                            <Pressable onPress={() => navigation.navigate('Assignments', user)} style={styles.footer.bgImg.container.buttonStyle.button}>
                                <Image source={assignments} style={styles.footer.bgImg.container.buttonStyle.img}/>
                            </Pressable>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    header: {
        width: '100%',
        height: '15%',
        bgImg: {
            width: '100%',
            height: '100%',
            container: {
                width: '100%',
                height: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                logo: {
                    aspectRatio: 32 / 19,
                    width: '25%',
                    marginLeft: '5%',
                    img: {
                        width: '100%',
                        height: '100%'
                    }
                },
                user: {
                    body: {
                        aspectRatio: 1 / 1,
                        width: '15%',
                        marginRight: '5%'
                    },
                    button: {
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    },
                    img: {
                        width: '70%',
                        height: '70%'
                    }
                }
            }
        }
    },
    body: {
        width: '100%',
        height: '70%',
        item:{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            infotitle:{
                width: '50%',
                height: '10%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F57F20',
                borderRadius: 5,
                text: {
                    textAlign: 'center',
                    fontSize: 25,
                    fontWeight: '600',
                }
            },
            calendarcontainer:{
                width: '90%',
                height: '80%',  
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#0C2340',
                borderWidth: 5,
                marginHorizontal: '5%',
                marginVertical: '5%',
                // backgroundColor: 'red',
                daynames:{
                    height: '10%',
                    // backgroundColor: 'yellow',
                    names:{
                    letterSpacing: 10,
                    fontSize: 25,
                    justifyContent: 'center',
                    fontWeight: '600'
                    }
                },
                daynumbers:{
                    height: '10%',
                    // backgroundColor: 'purple',
                    numbers:{
                        letterSpacing: 11,
                        fontSize: 25,
                        justifyContent: 'center',
                        fontWeight: '600',
                        color: 'gray'
                    }
                },
                dayevents:{
                    height: '70%',
                    width: '100%',
                    // backgroundColor: 'green',
                    event:{
                        height: '25%',
                        width: '100%',
                        marginTop: '0%',
                        eventbox:{
                            backgroundColor: '#F57F20',
                            marginHorizontal: '5%',
                            padding: '5%',
                            marginTop: '2.5%'
                        },
                        day:{
                            fontSize: 15,
                            fontWeight: '600',
                            marginLeft: '5%'
                        }
                    },

                }
                // calendarpic:{
                //     aspectRatio: 256 / 109,
                //     width: '100%'
                // }
            }
        },
    },
    footer: {
        width: '100%',
        height: '15%',
        bgImg: {
            width: '100%',
            height: '100%',
            transform: [{rotate: '180deg'}],
            container: {
                width: '100%',
                height: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'row',
                transform: [{rotate: '180deg'}],
                buttonStyle: {
                    body: {
                        aspectRatio: 1 / 1,
                        width: '18%',
                    },
                    button: {
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    },
                    img: {
                        width: '70%',
                        height: '70%'
                    }
                }
            }
        },
    }
});

export default CalendarScreen;
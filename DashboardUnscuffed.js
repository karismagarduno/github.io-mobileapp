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
import campus from './assets/central-campus-building-a.png'
import ExternalLink from './externalLink.js';
import { useEffect, useState } from 'react';

const DashboardUnscuffed = ({navigation, route}) => {
    const data = route.params.data;

    const [user, setUser] = useState(data);

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
                <View style={styles.body.campuscontainer}>
                    <ImageBackground style = {styles.body.campuscontainer.campusbanner}source = {campus}>
                        <Text style = {styles.body.campuscontainer.campusbanner.campustext}>Central Campus</Text>
                    </ImageBackground>
                </View>

                <View style = {styles.body.campusnews}>
                    <Text style = {styles.body.campusnews.title}>Current Events</Text>
                    <View style = {styles.body.campusnews.line}></View>
                    <Pressable onPress={() => navigation.navigate('Frybread', user)} style={styles.body.campusnews.newsitem}>
                        <Text>Aviation Fry Bread Fundraiser</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Jeans', user)} style={styles.body.campusnews.newsitem}>
                        <Text>Coding Bucket Jeans Fundraiser</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Arrests', user)} style={styles.body.campusnews.newsitem}>
                        <Text>Law & Public Safety Arrest Fundraiser</Text>
                    </Pressable>
                    <View style = {styles.body.campusnews.line}></View>
                </View>
                <View style = {styles.body.instagram}>
                    <Pressable style={styles.body.instagram.button}>
                        <ExternalLink url = "https://www.instagram.com/westmeccentral/?hl=en" style = {styles.body.instagram.button.text}>West-MEC Central Campus Instagram</ExternalLink>
                    </Pressable>
                </View>
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
        campuscontainer: {
            width: '100%',
            height: '35%', 
            campusbanner:{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                campustext:{
                    color: '#FFFFFF',
                    backgroundColor: 'rgba(12,35,64, 0.5)',
                    textAlign: 'center',
                    fontSize: 40,
                    fontWeight: '600',
                },
            },
        },
        campusnews:{
            width: '100%',
            height: '45%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            title:{
                fontSize: 20,
                marginLeft: '5%',
                fontWeight: '600'
            },
            line:{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginHorizontal: '10%'
            },
            newsitem:{
                backgroundColor: '#F57F20',
                padding: '5%',
                marginHorizontal: '5%',
                borderRadius: 5,
                alignItems: 'center',
                fontSize: 50
            }
        },
        instagram:{
            width: '100%',
            height: '15%',
            marginVertical: '2.5%',
            justifyContent: 'center',
            alignItems: 'center',
            button:{
                backgroundColor: 'rgba(12,35,64, 1)',
                padding: '5%',
                borderRadius: 25,
                text:{
                    color: '#FFFFFF',
                    fontSize: 17.5,
                    fontWeight: '800'
                }
            }
        }
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

export default DashboardUnscuffed;
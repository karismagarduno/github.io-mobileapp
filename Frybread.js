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
import frybread from './assets/defnitely-frybread.jpg'
import { useState } from 'react';

const FrybreadScreen = ({navigation, route}) => {

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
            <View style={styles.body.itemcontainer}>
                    <ImageBackground style = {styles.body.itemcontainer.itembanner}source = {frybread}>
                    </ImageBackground>
                <View style = {styles.body.item}>
                    <Text style = {styles.body.item.infotitle}>FryBread</Text>
                    <Text style = {styles.body.item.infoinfo}>
                    A fry bread fundraiser is being organized by the aviation class. The proceeds from the fundraiser will be used to purchase new equipment for the class. The fry bread will be made fresh on the day of the event and will be sold for $3 per plate. 
                    </Text>    
                    <Text style = {styles.body.item.infowhen}>April 10th and 11th- 1:00pm - 5:00pm</Text>
                </View>
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
        itemcontainer: {
            width: '90%',
            height: '35%', 
            alignItems: 'center',
            itembanner:{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                marginLeft: '12%',
                marginTop: '5%',
            },
        },
        item:{
            width: '100%',
            height: '100%',
            display: 'flex',
            textAlign: 'center',
            marginTop: '5%',
            infotitle:{
                width: '100%',
                backgroundColor: '#F57F20',
                padding: '7.5%',
                marginHorizontal: '6%',
                borderRadius: 5,
                alignItems: 'center',
                fontSize: 25,
                textAlign: 'center',
            },
            infoinfo:{
                width: '100%',
                marginHorizontal: '6%',
                marginTop: '2.5%',
                textAlign: 'center'
            },
            infowhen:{
                width: '100%',
                backgroundColor: '#0C2340',
                color: '#FFFFFF',
                padding: '2.5%',
                marginHorizontal: '6%',
                borderRadius: 5,
                alignItems: 'center',
                fontSize: 15,
                textAlign: 'center',
                marginTop: '5%',
                fontWeight: '600'
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

export default FrybreadScreen;
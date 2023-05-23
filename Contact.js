import { StyleSheet, Text, View, ImageBackground, Image, Button, Pressable , TextInput} from 'react-native';
import { useState } from 'react';
import React from 'react';
import bannerImg from './assets/blue-gradient.png'
import home from './assets/home-icon.png'
import assignments from './assets/clipboard-icon.png'
import calendar from './assets/calendar-icon.png'
import camera from './assets/camera-icon.png'
import phone from './assets/phone-icon.png'
import whitelogo from './assets/white-logo.png'
import usericon from './assets/usericon.png'
import Email from './smtp.js';

const ContactScreen = ({navigation, route}) => {

    const [user, setUser] = useState(route.params);

    const sendEmail = () => {
        Email.send({
            SecureToken : '17838ead-6bed-4fa7-a7e4-8f542faf9bae',
            To : 'dschro206@west-mec.org',
            From : 'reliablesource13@gmail.com',
            Subject : subject,
            Body : `
            Message: ${msg}
            `
        }).then(() => {
            alert('Email Sent');
            navigation.navigate('DashboardUnscuffed');
        });
    }

    const [subject, setSubject] = useState('');
    const [msg, setMsg] = useState('');

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
                <View style = {styles.body.heading}>
                    <Text style = {styles.body.heading.headingtext}>Contact Admin</Text>
                </View>
                <View style = {styles.body.contactform}>
                    <View style = {styles.formquestions}>
                        <TextInput style = {styles.body.contactform.formquestions.subject} placeholder="Subject" onChangeText={(text) => {
                            setSubject(text);
                        }}/>
                        <TextInput style = {styles.body.contactform.formquestions.message}placeholder="Message" onChangeText={(text) => {
                            setMsg(text);
                        }}/>
                        <Pressable onPress={() => {
                            if (subject !== '' && msg !== '') {
                                sendEmail();
                            }
                        }} style={styles.body.contactform.submit}>
                            <Text style = {styles.body.contactform.submit.text}>Send</Text>
                        </Pressable>
                    </View>
                </View>
                <Text style = {styles.body.bug}>Found a bug? Fill out the subject as "Bug Report" and explain the problem.</Text>
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
        bug:{
            fontSize: 10,
            textAlign: 'center'
        },
        heading:{
            textAlign: 'center',
            width: '60%',
            height: '10%',
            backgroundColor: '#F57F20',
            justifyContent: 'center',
            marginHorizontal: '20%',
            borderRadius: 25,
            marginTop: '5%',
            headingtext:{
                textAlign: 'center',
                fontSize: 25,
                fontWeight: '600'
            }
        },
        contactform:{
            height: '75%',
            width: '90%',
            justifyContent: 'center',
            backgroundColor: 'rgba(12,35,64, 1)',
            paddingHorizontal: '5%',
            margin: '5%',
            formquestions:{
                width: '100%',
                height: '75%',
                margin: '5%',
                backgroundColor: 'red',
                subject:{
                    backgroundColor: '#FFFFFF',
                    padding: '2.5%'
                },
                message:{
                    marginTop: '5%',
                    backgroundColor: '#FFFFFF',
                    padding: '2.5%',
                    height: '50%'
                }
            },
            submit:{
                width: '100%',
                height: '17.5%',
                backgroundColor: '#FFFFFF',
                marginTop: '5%',
                padding: '5%',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                text:{
                    textAlign: 'center',
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

export default ContactScreen;
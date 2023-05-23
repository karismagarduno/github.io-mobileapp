import { StyleSheet, Text, View, ImageBackground, Image, Button, Pressable , TextInput} from 'react-native';
import React from 'react';
import bannerImg from './assets/blue-gradient.png'
import home from './assets/home-icon.png'
import assignments from './assets/clipboard-icon.png'
import calendar from './assets/calendar-icon.png'
import camera from './assets/camera-icon.png'
import phone from './assets/phone-icon.png'
import whitelogo from './assets/white-logo.png'
import usericon from './assets/usericon.png'
import { useState } from 'react';

const UserScreen = ({navigation, route}) => {

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
                            <Pressable style={styles.header.bgImg.container.user.button}>
                                <Image source={usericon} style={styles.header.bgImg.container.user.img}/>
                            </Pressable>
                        </View> 
                    </View>
                </ImageBackground>
            </View>

            {/*Body*/}
            <View style={styles.body}>
                <View style = {styles.body.studentinfo}>
                    <Text style = {styles.body.studentinfo.title}>Account Info</Text>
                    <View style={styles.body.studentinfo.studentpic}>
                        <Image source={usericon} style={styles.body.studentinfo.studentpic.img}/>
                    </View>
                    <Text style = {styles.body.studentinfo.name}>{`${user.fName} ${user.lName}`}</Text>
                </View>
                <View style = {styles.body.studentinformationboxes}>
                    <TextInput style = {styles.body.studentinformationboxes.box} value = {`Campus: ${user.campus}`} editable={false}/>
                    <TextInput style = {styles.body.studentinformationboxes.box} value = {`Email: ${user.email}`} editable={false}/>
                </View>
                <View style={styles.body.logout}>
                    <View style={styles.body.logout.lougoutBtn}>
                        <Pressable style={styles.body.logout.lougoutBtn.btn} onPress={async () => {
                            const res = await fetch('https://mongo-api-y91g.onrender.com/logout', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ id: user._id.toString() }) });
                            navigation.navigate('Home', { name: 'Home' });
                        }}>
                            <Text style={styles.body.logout.lougoutBtn.btn.text}>
                                Log Out
                            </Text>
                        </Pressable>
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
        alignItems: 'center',
        studentinfo:{
            width: '100%',
            height: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            studentpic:{
                width: '80%',
                height: '80%',
                backgroundColor: 'gray',
                aspectRatio: 1/1,
                borderRadius: 1000,
                justifyContent: 'center',
                alignItems: 'center',
                img:{
                    aspectRatio: 1/1,
                    width: '85%',
                    height: '85%',
                    borderRadius: 1000,
                }
            },
            title:{
                fontSize: 20,
                fontWeight: '600'
            },
            name:{
                fontSize: 20,
                fontWeight: '600',
            }
        },
        studentinformationboxes:{
            width: '100%',
            box:{
                fontSize: 17.5,
                paddingVertical: '3%',
                borderTopWidth: 1,
                borderColor: 'black',
                color: '#F57F20',
                fontWeight: '600',
                paddingLeft: '5%'
            }
        },
        logout: {
            width: '100%',
            height: '45%',
            justifyContent: 'center',
            alignItems: 'center',
            lougoutBtn: {
                width: '60%',
                height: '25%',
                btn: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: 'black',
                    borderWidth: 2,
                    borderRadius: 5,
                    text: {
                        color: 'black',
                        fontSize: 25,
                    }
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

export default UserScreen;
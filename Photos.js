import { StyleSheet, Text, View, ImageBackground, Image, Button, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import React from 'react';
import bannerImg from './assets/blue-gradient.png';
import home from './assets/home-icon.png';
import assignments from './assets/clipboard-icon.png';
import calendar from './assets/calendar-icon.png';
import camera from './assets/camera-icon.png';
import phone from './assets/phone-icon.png';
import whitelogo from './assets/white-logo.png';
import usericon from './assets/usericon.png';
import uploadicon from './assets/upload.png';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';

const PhotoScreen = ({navigation, route}) => {

    const [user, setUser] = useState(route.params);

    //Creating state to hold the img file and the status on device permission
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [img, setImg] = useState(null);

    //When this page loads for the first time request permission and set state to be the result
    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');
        })();
    }, []);

    //Saves the result of an image being selected from picker
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.canceled) {
            setImg(result.assets[0].uri);
            alert('Image uploaded for review');
        }
    }

    //Checking for photo gallery permission
    if (hasGalleryPermission === false) {
        return <Text>No access to internal storage</Text>
    }

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
                <View style={styles.body.buttonContainer}>
                    <Pressable style={styles.body.buttonContainer.button} onPress={() => {pickImage();}}>
                        <Image source={uploadicon} style={styles.body.buttonContainer.button.buttonImg}/>{/*https://www.flaticon.com/free-icons/upload*/}
                        <Text style={styles.body.buttonContainer.button.buttonText}>Upload Image</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        buttonContainer: {
            width: '50%',
            aspectRatio: 1 / 1,
            backgroundColor: '#F57F20',
            borderRadius: 1000,
            justifyContent: 'center',
            alignItems: 'center',
            button: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                buttonImg: {
                    width: '60%',
                    height: '60%'
                },
                buttonText: {
                    fontSize: 15,
                    color: 'white',
                    textDecorationLine: 'underline'
                }
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

export default PhotoScreen;
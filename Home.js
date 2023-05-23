import { StyleSheet, Text, View, ImageBackground, Image, Button, Pressable } from 'react-native';
import React from 'react';
import bgImage from './assets/home-orange-gradient.png';
import logoImage from './assets/west-mec-logo.png';
import { useEffect } from 'react';
import * as Device from 'expo-device';

const HomeScreen = ({navigation}) => {

  useEffect(() => {
    const isLogged = async () => {
      const res = await fetch('https://mongo-api-y91g.onrender.com/deviceLogged', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ device: Device.osName }) });
      const resJ = await res.json();
      if (resJ.success) {
        const result = await fetch(`https://mongo-api-y91g.onrender.com/user/${resJ.id}`);
        const data = await result.json();
        navigation.navigate('DashboardUnscuffed', {data});
      }
    }
    isLogged();
  });

  return ( 
    <View style={styles.container}>
        <ImageBackground source={bgImage} style={bgStyle.image}>

          {/*Logo*/}
          <View style={logoStyle.logoContainer}>
            <Image source = {logoImage} style = {logoStyle.logo}></Image>
          </View>

          <View style = {styles.buttonContainer}>
            
            {/*Login Button*/}
            <View style={buttonStyle.body}>
                <Pressable style={buttonStyle.button} onPress={() => navigation.navigate('Login', {name: 'Login'})}>
                    <Text style={buttonStyle.text}>
                        Log In
                    </Text>
                </Pressable>
            </View>

            {/*Sign Up Button*/}
            <View style={buttonStyle.body}>
                <Pressable style={buttonStyle.button} onPress={() => navigation.navigate('StudentSignup', {name: 'StudentSignup'})}>
                    <Text style={buttonStyle.text}>
                        Sign Up
                    </Text>
                </Pressable>
            </View>

            {/*Licensing Terms & Conditions*/}
            <Text onPress={() => navigation.navigate('Licensing', {name: 'Licensing'})} style = {styles.licensinginfo}>Licensing Terms & Conditions</Text>
          </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
//main container
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
//container for the sign up and log in buttons
  buttonContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
//link to go to license info style
  licensinginfo: {
    textDecorationLine: 'underline',
    color: '#f5f5f5',
    marginBottom: '15%'
  }
});

const buttonStyle = StyleSheet.create({
  //log in/sign up button styling
    body: {
        width: '75%',
        height: '20%',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 5,
        marginBottom: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#f5f5f5',
        fontSize: 20,
    }
});

const bgStyle = StyleSheet.create({
  //Background Image
  image: {
    width: '100%',
    height: '100%'
  }
});

const logoStyle = StyleSheet.create({
  //west-mec logo
  logoContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: '100%',
    aspectRatio: 1/1
  }
});

export default HomeScreen;
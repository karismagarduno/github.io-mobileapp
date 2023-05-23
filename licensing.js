import { StyleSheet, Text, View, ImageBackground, Image, Button, Pressable } from 'react-native';
import React from 'react';
import bgImage from './assets/home-orange-gradient.png'
import logoImage from './assets/west-mec-logo.png'


const Licensing = ({navigation}) => {

  const DEV = 'Developer'

  return ( 
    <View style={styles.container}>
        <ImageBackground source={bgImage} style={bgStyle.image}>
          <Text style={bgStyle.image.text}>

          


const Terms = `ACCEPTANCE OF TERMS
By downloading and using the WestMEC Central Campus app, you agree to be bound by the terms and conditions set forth below. If you do not agree to the terms and conditions, do not use the app.

DESCRIPTION OF SERVICE
The WestMEC Central Campus app is a social media platform designed specifically for students and community, faculty, and staff at the Central Campus. The app allows users to connect with each other, share content, and access school resources.

REGISTRATION
In order to use the WestMEC Central Campus app, you must create a user account and provide certain information about yourself as prompted by the app's registration form. You represent and warrant that all required registration information you submit is truthful and accurate, and you will maintain the accuracy of such information. You may not use a false identity or impersonate any person or entity.

USE OF SERVICE
You agree to use the WestMEC Central Campus app only for lawful purposes. You may not use the app to transmit or post any content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, or that may invade another's privacy. You may not use the app to transmit or post any content that infringes on the intellectual property rights of any person or entity.

TERMINATION OF SERVICE
${DEV} reserves the right to terminate your access to the WestMEC Central Campus app at any time, without notice, for any reason.

DISCLAIMER OF WARRANTIES
You understand and agree that the WestMEC Central Campus app is provided on an 'as is' and 'as available' basis. ${DEV} makes no representations or warranties of any kind, express or implied, as to the operation of the app or the information, content, materials, or products included on the app.

LIMITATION OF LIABILITY
${DEV}shall not be liable for any damages of any kind arising from the use of the WestMEC Central Campus app, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.

INDEMNIFICATION
You agree to indemnify and hold ${DEV} and its affiliates, officers, agents, and employees harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of the WestMEC Central Campus app, the violation of these terms of use by you, or the infringement by you of any intellectual property or other right of any person or entity.

GOVERNING LAW
These terms of use shall be governed by and construed in accordance with the laws of the State of Arizona, without giving effect to any principles of conflicts of law.

AMENDMENTS TO TERMS OF USE
${DEV} reserves the right to change the terms of use at any time, without notice. You are responsible for regularly reviewing these terms of use. Your continued use of the WestMEC Central Campus app after any changes are made will constitute your acceptance of such changes.`
export default Terms



          </Text>
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
    alignItems: 'center',
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
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    text: {

    }
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

export default Licensing;
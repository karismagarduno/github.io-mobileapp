import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import React from 'react';
import bgImage from './assets/home-orange-gradient.png'


const SignupScreen = ({navigation}) => ( 
    <View style={styles.container}>
        <ImageBackground source={bgImage} style={styles.image}>
        <View style = {styles.buttonStyle}>
            <Text title='Home' style = {styles.returnbutton} onPress={() => navigation.navigate('Home', {name: 'Home'})}>Home</Text>
            </View>
        <View style = {styles.form}>
            <Text style = {styles.header}>Sign Up</Text>
        </View>
        <View style = {styles.accbuttons}>
            <Text style = {styles.accoption} onPress={() => navigation.navigate('StudentSignup', {name: 'StudentSignUp'})}>Student</Text>
            <Text style = {styles.accoption} onPress={() => navigation.navigate('ParentSignup', {name: 'ParentSignup'})}>Parent</Text>
            <Text style = {styles.accoption} onPress={() => navigation.navigate('TeacherSignup', {name: 'TeacherSignup'})}>Teacher</Text>
        </View>
        </ImageBackground>

    </View>
);

const styles = StyleSheet.create({
  //main container style
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%'
      },
  //home "return" button styling
    buttonStyle: {
        width: '20%',
        height: '5%',
        margin: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
      },
      returnbutton: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500',
        padding: '10%'
      },
    //signup "form"
      form: {
        alignItems: 'center'
      },
      header: {
        justifyContent: 'center',
        fontSize: 55,
        color: '#f5f5f5',
        fontWeight: '900',
        marginTop: '20%',
        marginBottom: '-5%'
      },
    //main container holding the 3 buttons for the different account types
      accbuttons:{
        justifyContent: 'center',
        alignItems: 'center',
        
      },
    //each individual button for each account
      accoption: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#f5f5f5',
        height: '17.5%',
        width: '75%',
        fontSize: 40,
        fontWeight: '800',
        color: '#f5f5f5',
        padding: '2.5%',
        textAlign: 'center',
        marginBottom: '5%'
      }
})

export default SignupScreen;
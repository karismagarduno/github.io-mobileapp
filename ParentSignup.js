import { StyleSheet, Text, View, ImageBackground, Button, TextInput } from 'react-native';
import React from 'react';
import bgImage from './assets/home-orange-gradient.png'


const ParentSignupScreen = ({navigation}) => ( 
    <View style={styles.container}>
        <ImageBackground source={bgImage} style={styles.image}>
        <View style = {styles.buttonStyle}>
        <Text title='Sign Up' style = {styles.returnbutton} onPress={() => navigation.navigate('Signup', {name: 'Signup'})}>Back</Text>
            </View>
        <View style = {styles.form}>
            <Text style = {styles.header}>Parent Sign Up</Text>
            <View style = {styles.formquestions}>
              <TextInput style = {styles.question}placeholder="First Name" />
              <TextInput style = {styles.question}placeholder="Last Name" />
              <TextInput style = {styles.question}placeholder="Email" />
              <TextInput style = {styles.question}placeholder="Address" />
            </View>
        </View>
        <View style = {styles.nextStyle}>
          <Text onPress={() => navigation.navigate('ParentSignup2', {name: 'ParentSignup2'})} style = {styles.next}>Next</Text>
        </View>
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
  //main container
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%'
      },
  //Home "return" button
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
    //Login form
      form: {
        alignItems: 'center',
        paddingTop: 100
      },
      header: {
        justifyContent: 'center',
        fontSize: 35,
        color: '#f5f5f5',
        fontWeight: '800'
      },
      question: {
        textAlign: 'center',
        backgroundColor: 'rgba(245, 245, 245, 0.30)',
        borderRadius: 5,
        margin: 10,
        height: '100%',
        width: '100%',
        fontSize: 20,
      },
      formquestions:{
        height: '25%',
        width: '75%',
        marginTop: 20
      },
    //Submit button styling
      nextStyle: {
        width: '50%',
        height: '6.5%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '25%',
        marginTop: 200,

      },
      next: {
        width: '100%',
        height: '100%',
        color: '#f5f5f5',
        textAlign: 'center',
        fontSize: 20,
        padding: '5%',
        borderWidth: 2,
        borderColor: '#fff',  
        borderRadius: 5,
      },
      
})

export default ParentSignupScreen;
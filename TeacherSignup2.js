import { StyleSheet, Text, View, ImageBackground, Button, TextInput } from 'react-native';
import React from 'react';
import bgImage from './assets/home-orange-gradient.png';


const TeacherSignupScreen2 = ({navigation}) => ( 
    <View style={styles.container}>
        <ImageBackground source={bgImage} style={styles.image}>
        <View style = {styles.buttonStyle}>
        <Text title='Sign Up' style = {styles.returnbutton} onPress={() => navigation.navigate('TeacherSignup', {name: 'TeacherSignup'})}>Back</Text>
            </View>
        <View style = {styles.form}>
            <View style = {styles.formquestions}>
              <TextInput style = {styles.question}placeholder="Campus" />
              <TextInput style = {styles.question}placeholder="Program" />
              <TextInput style = {styles.question}placeholder="Employee ID" />
              <TextInput style = {styles.question}placeholder="Password" />
              <TextInput style = {styles.question}placeholder="Confirm Password" />
            </View>
        </View>
        <View style = {styles.nextStyle}>
          <Text style = {styles.next} onPress={() => navigation.navigate('Login', {name: 'Login'})}>Submit</Text>
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
        marginTop: '50%',

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

export default TeacherSignupScreen2;
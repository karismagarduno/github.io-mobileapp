import { StyleSheet, Text, View, ImageBackground, Button, TextInput, Pressable } from 'react-native';
import React from 'react';
import bgImage from './assets/home-orange-gradient.png';
import { useState } from 'react';

const StudentSignupScreen = ({navigation}) => {
  const nameXp = /(\d|\W)/g;
  const emailXp = /(\w+@)(\w+)([-\.]\w+)?\.(org|net|com)/;

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [campus, setCampus] = useState('');
  const [pass, setPass] = useState('');
  const [confirm, setConfirm] = useState('');

  const submitData = () => {
    const promise = new Promise(async (res, rej) => {
      const result = await fetch('https://mongo-api-y91g.onrender.com/signup', { method: 'POST', headers: { 'Content-Type': 'Application/json' }, body: JSON.stringify({ fName: first, lName: last, email: email, campus: campus, password: pass }) });
      const data = await result.json();
      if (data.success) {
        navigation.navigate('Login', {name: 'Login'});
        res(true);
      } else {
        alert(data.msg);
        res(false);
      }
    });
    return promise;
  }

  const form = ['first', 'last', 'email', 'campus', 'password', 'confirm'];

  return (
    <View style={styles.container}>
        <ImageBackground source={bgImage} style={styles.image}>
        <Pressable style = {styles.buttonStyle} onPress={() => navigation.navigate('Home', {name: 'Home'})}>
          <Text title='Sign Up' style = {styles.returnbutton}>Back</Text>
        </Pressable>
        <View style = {styles.form}>
            <Text style = {styles.header}>Sign Up</Text>
            <View style = {styles.formquestions}>
              <TextInput style = {styles.question}placeholder="First Name" onChangeText={(text) => {
                setFirst(text);
              }}/>
              <TextInput style = {styles.question}placeholder="Last Name" onChangeText={(text) => {
                setLast(text);
              }}/>
              <TextInput style = {styles.question}placeholder="Email" onChangeText={(text) => {
                setEmail(text);
              }}/>
              <TextInput style={styles.question} placeholder={'Campus'} onChangeText={(text) => {
                setCampus(text.toUpperCase());
              }}/>
              <TextInput style = {styles.question}placeholder="Password" secureTextEntry={true} onChangeText={(text) => {
                setPass(text);
              }}/>
              <TextInput style = {styles.question}placeholder="Confirm Password" secureTextEntry={true} onChangeText={(text) => {
                setConfirm(text);
              }}/>
            </View>
        </View>
        <View style = {styles.nextStyle}>
          <Pressable style={styles.next} onPress={async () => {
            let errCount = 0;
            let errMsg = '';
            form.every((key) => {
              switch (key) {
                case 'first':
                  if (first.match(nameXp) || first === '') {
                    errCount++;
                    errMsg = 'Invalid First Name';
                  }
                  break;
                
                case 'last':
                  if (last.match(nameXp) || last === '') {
                    errCount++;
                    errMsg = 'Invalid Last Name';
                  }
                  break;

                case 'email':
                  if (!email.match(emailXp) || email === '') {
                    errCount++;
                    errMsg = 'Invalid Email';
                  }
                  break;

                case 'campus':
                  switch (campus) {
                    case 'CENTRAL':
                      break;
                    
                    case 'NORTHWEST':
                      break;
                    
                    case 'NORTHEAST':
                      break;

                    case 'SOUTHWEST':
                      break;

                    default:
                      errCount++;
                      errMsg = 'Invalid Campus'
                  }
                  break;
                
                case 'password':
                  if (pass.length < 8 || pass === '') {
                    errCount++;
                    errMsg = 'Password must be longer than 8 characters';
                  }
                  break;

                case 'confirm':
                  if (confirm !== pass || pass === '') {
                    errCount++;
                    errMsg = 'Passwords do not match';
                  }
                  break;
              }
              if (errCount > 0) {
                return false;
              } else {
                return true;
              }
            });
            if (errCount > 0) {
              alert(errMsg);
            } else {
              submitData();
            }
          }}>
            <Text style={styles.nextText}>Sign Up</Text>
          </Pressable>
        </View>
        {/* <View style = {styles.circlebox}>
          <Text style = {styles.circle}>a</Text>
        </View>
        <View style = {styles.circlebox}>
          <Text style = {styles.emptycircle}>a</Text>
        </View> */}
        
        </ImageBackground>
    </View>
  );
};

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
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500',
      },
    //Login form
      form: {
        alignItems: 'center',
        paddingTop: 0,
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
        marginTop: '8%',
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
        marginTop: 375,

      },
      next: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        padding: '5%',
        borderWidth: 2,
        borderColor: '#fff',  
        borderRadius: 5,
      },
      nextText: {
        color: '#f5f5f5',
        textAlign: 'center',
        fontSize: 20
      },
      circlebox: {
        textAlign: 'center'
      },
      circle: {
        color: '#0C2340',
        backgroundColor: '#0C2340',
        height: 30,
        width: 30,
        borderRadius: 15,
        marginTop: 100,
      },
      emptycircle: {
        color: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        height: 30,
        width: 30,
        borderRadius: 15,
        marginTop: 100,
        marginLeft: '20%'
      }
})

export default StudentSignupScreen;
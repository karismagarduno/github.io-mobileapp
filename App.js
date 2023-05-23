import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home.js';
import LoginScreen from './Login.js';
import SignupScreen from './Signup.js';
import StudentSignupScreen from './StudentSignup.js';
import ParentSignupScreen from './ParentSignup.js';
import TeacherSignupScreen from './TeacherSignup.js';
import StudentSignupScreen2 from './StudentSignup2.js';
import DashboardScreen from './Dashboard.js';
import DashboardUnscuffed from './DashboardUnscuffed.js';
import FrybreadScreen from './Frybread.js';
import JeansScreen from './Jeans.js';
import ArrestScreen from './Arrests.js';
import CalendarScreen from './Calendar.js';
import PhotoScreen from './Photos.js';
import ContactScreen from './Contact.js';
import AssignmentScreen from './Assignments.js';
import ParentSignupScreen2 from './ParentSignup2.js';
import TeacherSignupScreen2 from './TeacherSignup2.js';
import UserScreen from './User.js';
import Licensing from './licensing.js';

const Stack = createNativeStackNavigator();

const App = () => ( 
    <NavigationContainer>
        <Stack.Navigator>

            {/*Home Navigation*/}
            <Stack.Screen
            name = "Home"
            component = {HomeScreen}
            options ={{
              headerShown: false
            }}
            />

            {/*Login Navigation*/}
            <Stack.Screen 
            name = "Login"
            component = {LoginScreen}
            options ={{
              headerShown: false
            }}/>

            {/*Sign Up navigation*/}
            <Stack.Screen 
            name = "Signup"
            component = {SignupScreen}
            options ={{
              headerShown: false
            }}/>

            {/*Studen Signup*/}
            <Stack.Screen 
            name = "StudentSignup"
            component = {StudentSignupScreen}
            options ={{
              headerShown: false
            }}/>
            
            <Stack.Screen 
            name = "StudentSignup2"
            component = {StudentSignupScreen2}
            options ={{
              headerShown: false
            }}/>

            <Stack.Screen 
            name = "ParentSignup"
            component = {ParentSignupScreen}
            options ={{
              headerShown: false
            }}/>

            <Stack.Screen 
            name = "TeacherSignup"
            component = {TeacherSignupScreen}
            options ={{
              headerShown: false
            }}/>

            <Stack.Screen 
            name = "Dashboard"
            component = {DashboardScreen}
            options ={{
              headerShown: false
            }}/>

            <Stack.Screen
            name='DashboardUnscuffed'
            component={DashboardUnscuffed}
            options = {{
              headerShown: false
            }}
            />
            <Stack.Screen
            name='Frybread'
            component={FrybreadScreen}
            options = {{
              headerShown: false
            }}
            />
            <Stack.Screen
            name='Jeans'
            component={JeansScreen}
            options = {{
              headerShown: false
            }}
            />
            <Stack.Screen
            name='Arrests'
            component={ArrestScreen}
            options = {{
              headerShown: false
            }}
            />
            <Stack.Screen
            name='Calendar'
            component={CalendarScreen}
            options = {{
              headerShown: false
            }}
            />
            <Stack.Screen
            name='Photos'
            component={PhotoScreen}
            options = {{
              headerShown: false
            }}
            />
            <Stack.Screen
            name='Contact'
            component={ContactScreen}
            options = {{
              headerShown: false
            }}
            />
            <Stack.Screen
            name='Assignments'
            component={AssignmentScreen}
            options = {{
              headerShown: false
            }}
            />
            <Stack.Screen
            name='ParentSignup2'
            component={ParentSignupScreen2}
            options = {{
              headerShown: false
            }}
            />
            <Stack.Screen
            name='TeacherSignup2'
            component={TeacherSignupScreen2}
            options = {{
              headerShown: false
            }}
            />
            <Stack.Screen
            name='User'
            component={UserScreen}
            options = {{
              headerShown: false
            }}
            />
            <Stack.Screen
            name='Licensing'
            component={Licensing}
            options = {{
              headerShown: false
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
);


export default App;
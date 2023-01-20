import React,{ useState}from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/Login";
import Cadastro from "./src/screens/Cadastro"
import Home from "./src/screens/Home";
import Informacoes from "./src/screens/Informacoes";
import estimativas from "./src/screens/estimativas";
import hoje from "./src/screens/hoje";
import semana from "./src/screens/semana";
import principal from "./src/screens/principal";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={Home}options={{headerShown:false}}/>
      <Stack.Screen name="principal" component={principal} options={{headerShown:false}} />
      <Stack.Screen name="Informacoes" component={Informacoes} options={{headerShown:false}}/>
      <Stack.Screen name='hoje' component={hoje}/>
      <Stack.Screen name='estimativas' component={estimativas}/>
      <Stack.Screen name='semana' component={semana}/>
    </Stack.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}


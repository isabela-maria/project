import React, {useState} from 'react';
import { Image, View ,TextInput, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import {auth} from './conexaofirebase';
import {signOut} from 'firebase/auth';

export default function Perfil({navigation}) {

 
  
  async function logout(){
    await signOut(auth)
    .then(() =>{
       
        navigation.reset({
          index:0,
          routes:[{name:'Home'}]
           })
       navigation.navigate("Login");
    })
    .catch(erro => console.log(error))
};  

 

 
  
    return (
      <View style={styles.container}>

      <Image
          source={require('../assets/perfil.png')}
          style={styles.perfil}
          />

      <Text style={{
        fontSize: 12,
       
      }}>

      <h2>Nome: </h2>
      <h2>Email: </h2>
      </Text>

        <TouchableOpacity 
        style={styles.botao} 
        

        onPress ={() =>{logout()}}> 
        
        <Text style={styles.botaoText}>Sair</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoRegister}></TouchableOpacity>
        
    
      


       
      
      </View> 

);
}
    


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#F4F4F4'
  },


  perfil:{
    width: 100,
    height:100,
    justifyContent: 'center'
  },



  input:{
    marginTop: 15,
    padding: 10,
    width: 300,
    backgroundColor: '#F4F4F4',
    fontSize: 17,
    fontWeight: 'bold',
    borderRadius: 7
  },

  botao: {
    width: 300,
    height: 45,
    backgroundColor: '#4089B1',
    marginTop: 20,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
  botaoText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'

  },

  botaoRegister:{
    marginTop: 30
  
  },

  registerText:{
    color: '#191919'
  }

});
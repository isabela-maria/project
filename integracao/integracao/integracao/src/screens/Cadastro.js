import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'; 
import {auth} from './conexaofirebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';

export default function Cadastro({navigation}) {


  const[nome, setNome] = useState('');
  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState(''); 
  
   

  async function createUser(){
    await createUserWithEmailAndPassword(auth,email,senha,nome)
    .then((value) =>{
        //console.log('Cadastrado com sucesso! \n');
        navigation.navigate("Login");
    })
    .catch(erro => {
      if(erro.code =='auth/email-already-in-use'){
        alert("Email Já Cadastrado")
      }else if(erro.code=='auth/weak-password'){
        alert("A senha deve conter no Minimo 6 Caracteres")
      }
      
    });


  };  

  return (
    
    <View style={styles.container}>
      <StatusBar hidden />

      <Image style={{width:150, height: 150}} source={require('../assets/logo.png')} />

      <TextInput  placeholderTextColor="#C0C0C0" placeholder= "Seu nome..." style = {styles.textInput} onChangeText={value=> setNome(value)}  />
      <TextInput  placeholderTextColor="#C0C0C0"placeholder= "Seu e-mail..." style = {styles.textInput} onChangeText={value=> setEmail(value)}  />
      <TextInput  placeholderTextColor="#C0C0C0"secureTextEntry={true} placeholder= "Sua senha..." style = {styles.textInput} onChangeText={value=> setSenha(value)}  />

      <TouchableOpacity style= {styles.btnCadastro} onPress={()=>createUser()}>
        <Text style ={{color: '#FFF',fontSize: 18,fontWeight: 'bold', textAlign:'center'}}>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },


  textInput:{
    width:'100%',
    height: 40,
    backgroundColor:'white',
    borderRadius:7,
    paddingLeft:10,
    marginBottom:10

  },

  btnCadastro:{
    width: '100%',
    height:40,
    backgroundColor:'#4089B1',
    borderRadius:7,
    justifyContent:'center'
    
  }
});
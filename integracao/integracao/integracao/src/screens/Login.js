import React, {useState} from 'react';
import { Image, View ,TextInput, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import {auth} from './conexaofirebase';
import {signInWithEmailAndPassword} from 'firebase/auth';

export default function Login({navigation}) {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  
  async function login(){
    await signInWithEmailAndPassword(auth,email,senha)
    .then((value) =>{
        console.log('Login realizado com sucesso');
        navigation.reset({
          index:0,
          routes:[{name:'Home'}]
           })
       navigation.navigate("Home");
    })

    .catch(erro => {
     if(erro.code =='auth/invalid-email'){
       alert("Email Invalido")
      }else if(erro.code=='auth/wrong-password'){
        alert("Senha Invalida")
    }else if(erro.code=='auth/user-not-found'){
        alert("Usuario não Cadastrado")
      }
       
    }); 
    
    
};  

 

 const criarConta = () =>{
    navigation.navigate("Cadastro")
  }
  
    return (
      <View style={styles.container}>
        <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        />
      
      <Text style={{ marginTop: 7, padding: 15,fontSize: 25,fontWeight: 'bold'}}>Bem vindo(a)!</Text>
      <TextInput
        style={styles.input}
          placeholder="Email"
          placeholderTextColor="#C0C0C0"
          value={email}
          onChangeText={value=> setEmail(value)} 
         
        />
        
        <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Senha"
        placeholderTextColor="#C0C0C0"
        value={senha}
        onChangeText={value=> setSenha(value)} 
        />

        <TouchableOpacity 
        style={styles.botao} 
        

        onPress ={() =>{login()}}> 
        
          <Text style={styles.botaoText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoRegister}
        
        onPress ={() =>{criarConta()}}>
          <Text style={styles.registerText}>Criar conta</Text>
        </TouchableOpacity>

    
      </View> 

      )
    }


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#F4F4F4'
  },


  logo:{
    width: 220,
    height:220,
    justifyContent: 'center'
  },


  input:{
    marginTop: 15,
    padding: 10,
    width: 300,
    backgroundColor: '#FFF',
    fontSize: 17,
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
    fontSize: 18,
    color: '#191919'
  }

});
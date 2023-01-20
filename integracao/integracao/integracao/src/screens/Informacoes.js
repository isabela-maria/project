import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';


export default function grafico({navigation}) {

  const telaEstimativas = () =>{
        navigation.navigate(
            'estimativas'
        )
    }

    const telaHoje = () =>{
        navigation.navigate(
            'hoje'
        )
    }

    const telaSemana = () =>{
        navigation.navigate(
            'semana'
        )
    }
   




  return (
    
    <View style={styles.container}>
      <StatusBar hidden />

      <Image style={{width:100, height: 100}} source={require('../assets/logo.png')} />

      

      

      <TouchableOpacity style= {styles.btnGrafico} onPress={()=>{telaHoje()}}>
        <Text style ={{fontWeight: 'bold', color: 'black', textAlign:'center'}}>Gráfico de hoje</Text>
      </TouchableOpacity>

      <TouchableOpacity style= {styles.btnGrafico} onPress={()=>{telaSemana()}}>
        <Text style ={{fontWeight: 'bold', color: 'black', textAlign:'center'}}>Gráficos semanais</Text>
      </TouchableOpacity>

      <TouchableOpacity style= {styles.btnGrafico} onPress={()=>{telaEstimativas()}}>
        <Text style ={{fontWeight: 'bold', color: 'black', textAlign:'center'}}>Como economizar água?</Text>
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
    backgroundColor:'black',
    borderRadius:20,
    paddingLeft:10,
    marginBottom:10

  },

  btnGrafico:{
    width: '100%',
    height:40,
    backgroundColor:'#c9e5ee',
    borderRadius:20,
    justifyContent:'center',
    marginBottom:10
  }
});
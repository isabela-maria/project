import React, {useState} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'; 

export default function semana(){
    return(
        <View style={styles.container}>
         <Text style={{ fontSize: 25,fontWeight: 'bold'}}>Relatório Semanal</Text>
         <Text style={{ fontSize: 25,fontWeight: 'bold'}}> ◀ Junho 13 - Junho 19 ▶</Text>
         <Image 
        source={require('../assets/semanal.png')}
        style={styles.grafico}
        />
       

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

    grafico:{
        width: 300,
        height: 300,
        justifyContent: 'center'
        
      },
    
});
import React, {useState} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'; 


export default function estimativas(){
    return(
        <View style={styles.container}>
         <Text style={{color: '#3f3f3f', fontSize: 20, fontWeight: 'bold'}}>Reabastecimento:</Text>
        
      <TextInput
        style={styles.input}
          placeholder="Dias"
          placeholderTextColor="#C0C0C0"
          
        />
        
        <Text style={{color: '#3f3f3f', fontSize: 20, fontWeight: 'bold'}}>Uso diário até o reabastecimento:</Text>
        <TouchableOpacity style= {styles.btnResul}>
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

    input:{
        marginTop: 15,
        padding: 10,
        width: 300,
        backgroundColor: '#FFF',
        borderRadius:20,
        justifyContent:'center',
        fontSize: 17,
        marginBottom:10,
        
    }, 

    btnGrafico:{
        marginTop: 15,
        padding: 10,
        width: 300,
        backgroundColor:'#c9e5ee',
        borderRadius:20,
        justifyContent:'center',
        marginBottom:10
      }

});
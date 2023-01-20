import React, {useState} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'; 

export default function hoje(){
    return(
        <View style={styles.container}>
         <Text style={{ padding:15, color: '#3f3f3f', fontSize: 25, fontWeight: 'bold'}}>Gasto de Água Hoje</Text>
         <Text style={{marginTop: 5, padding:10,color: '#3f3f3f', fontSize: 25, fontWeight: 'bold'}}>(dd-mm-aaaa)</Text>
          
         
          
         <Image 
        source={require('../assets/hoje.png')}
        style={styles.grafico}
        />
        
        <Text style={{ marginTop: 30, padding:30, color: '#3f3f3f', fontSize: 20}}>Gasto de Hoje: 50 L </Text>
        <Text style={{marginTop: 10,  padding:10, color: '#3f3f3f', fontSize: 20,fontWeight: 'bold'}}> Litros Restantes: 850 L</Text>
        

        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4F4F4',
      alignItems: 'center',
      justifyContent: 'center',
      padding:25
    },

    grafico:{
        width: 180,
        height: 180,
        justifyContent: 'center',
        marginTop: 30
     
      },
    
});
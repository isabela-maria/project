import React, { useEffect, useState } from "react";

import { Alert, StyleSheet, Text, View } from "react-native";
import { getAgua } from "./Request";

export default function App() {

  const [agua, setAgua] = useState([
    useEffect(() => {
      getAgua()
       .then((result) => {
         setAgua(result);
       })
       .catch(); })
  ])

 

  // ? --> ~= serve para quando um dado não tiver sido designado ele ir sem nada como um vazio
  return (
 <>

 <Text>TESTANDO</Text>

 <Text>Quantidade: {agua.quantidade}</Text>
 <Text>ID: {agua.id}</Text>
 
 
 </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});